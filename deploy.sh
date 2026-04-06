#!/bin/bash
# ============================================================
#  BRENT BROOKS PORTFOLIO — HETZNER VPS DEPLOY SCRIPT
#
#  USAGE:
#    1. SSH into your Hetzner VPS:  ssh root@YOUR_VPS_IP
#    2. Upload this entire folder:  scp -r portfolio-deploy/ root@YOUR_VPS_IP:/root/
#    3. Run:  bash /root/portfolio-deploy/deploy.sh
#
#  WHAT THIS DOES:
#    - Installs Nginx (if not present)
#    - Copies your site files to /var/www/brentbrooks.com
#    - Configures Nginx to serve the site
#    - Installs Let's Encrypt SSL (free HTTPS)
#    - Sets up auto-renewal for SSL
#
#  REQUIREMENTS:
#    - Ubuntu 22.04 or 24.04 (Hetzner default)
#    - Root or sudo access
#    - Domain already pointed to this VPS IP
# ============================================================

set -e

DOMAIN="brentbrooks.com"
WWW_DOMAIN="www.brentbrooks.com"
SITE_DIR="/var/www/${DOMAIN}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "=========================================="
echo "  Deploying ${DOMAIN}"
echo "=========================================="
echo ""

# --- 1. Update system & install dependencies ---
echo "[1/5] Updating system and installing Nginx..."
apt update -y && apt upgrade -y
apt install -y nginx certbot python3-certbot-nginx ufw

# --- 2. Configure firewall ---
echo "[2/5] Configuring firewall..."
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw --force enable

# --- 3. Deploy site files ---
echo "[3/5] Deploying site files..."
mkdir -p "${SITE_DIR}"
cp "${SCRIPT_DIR}/index.html" "${SITE_DIR}/index.html"
cp -r "${SCRIPT_DIR}/images" "${SITE_DIR}/images"
chown -R www-data:www-data "${SITE_DIR}"

# --- 4. Configure Nginx ---
echo "[4/5] Configuring Nginx..."
cat > /etc/nginx/sites-available/${DOMAIN} << 'NGINX_CONF'
server {
    listen 80;
    listen [::]:80;
    server_name brentbrooks.com www.brentbrooks.com;
    root /var/www/brentbrooks.com;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Cache static assets
    location ~* \.(png|jpg|jpeg|gif|ico|svg|webp|woff2|woff|ttf)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ =404;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    gzip_min_length 1000;
}
NGINX_CONF

# Enable site, disable default
ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo ""
echo "=========================================="
echo "  Site is live at http://${DOMAIN}"
echo "=========================================="
echo ""

# --- 5. SSL Certificate ---
echo "[5/5] Setting up SSL with Let's Encrypt..."
echo ""
echo "IMPORTANT: Before running this step, make sure your"
echo "domain DNS is already pointing to this server's IP."
echo ""
read -p "Is ${DOMAIN} already pointing to this server? (y/n): " DNS_READY

if [ "$DNS_READY" = "y" ] || [ "$DNS_READY" = "Y" ]; then
    certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN} --non-interactive --agree-tos --email me@brentbrooks.com --redirect
    echo ""
    echo "=========================================="
    echo "  SSL configured! Site is live at:"
    echo "  https://${DOMAIN}"
    echo "=========================================="
    echo ""
    echo "SSL will auto-renew. Test with:"
    echo "  certbot renew --dry-run"
else
    echo ""
    echo "Skipping SSL for now. Once DNS is pointed here, run:"
    echo "  certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN} --redirect"
    echo ""
fi

echo ""
echo "DONE! Your portfolio is deployed."
echo ""
echo "To update content later:"
echo "  1. Edit index.html on your computer (change the SITE_DATA JSON)"
echo "  2. Upload:  scp index.html root@YOUR_VPS_IP:${SITE_DIR}/"
echo ""
