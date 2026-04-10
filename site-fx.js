/* ============================================================
   SITE EFFECTS — runs on every page
   - Scroll-reveal (IntersectionObserver)
   - Nav shadow on scroll
   - Converts .page-images into a crossfade slider
   - Lightbox for clicks on slider/page images
   ============================================================ */
(function () {
  'use strict';

  // ---------- Scroll reveal ----------
  function initReveal() {
    var targets = document.querySelectorAll(
      '.hero h1, .hero-bio, .hero-cta, .hero-img,' +
      '.section-title, .project-card,' +
      '.page h1, .page h2, .page p, .page-images img, .fx-slider,' +
      '.block-text, .block-image, .block-gallery,' +
      '.contact h1, .contact-info p'
    );
    targets.forEach(function (el) { el.classList.add('fx-reveal'); });

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // ---------- Nav shadow on scroll ----------
  function initNavScroll() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 10) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Enhance sliders ----------
  // Supports two sources:
  //   1. Pre-rendered <div class="fx-slider fx-slider-static"> with .fx-slide children
  //   2. Legacy <div class="page-images"> wrapping >=2 <img>
  function initSlider() {
    // Pre-rendered sliders: just add controls
    document.querySelectorAll('.fx-slider.fx-slider-static').forEach(function (slider) {
      enhanceSlider(slider);
    });

    // Legacy page-images (in case any page still uses it)
    document.querySelectorAll('.page-images').forEach(function (container) {
      var imgs = Array.prototype.slice.call(container.querySelectorAll('img'));
      if (imgs.length < 2) return;
      var slider = document.createElement('div');
      slider.className = 'fx-slider';
      imgs.forEach(function (img, i) {
        var slide = document.createElement('div');
        slide.className = 'fx-slide' + (i === 0 ? ' is-active' : '');
        slide.appendChild(img.cloneNode(true));
        slider.appendChild(slide);
      });
      container.innerHTML = '';
      container.appendChild(slider);
      enhanceSlider(slider);
    });
  }

  function enhanceSlider(slider) {
    if (slider.dataset.fxEnhanced) return;
    slider.dataset.fxEnhanced = '1';

    var slides = slider.querySelectorAll('.fx-slide');
    if (slides.length < 2) {
      // Single-image "gallery" — just display it, no controls
      if (slides.length === 1) slides[0].classList.add('is-active');
      slider.classList.add('fx-slider-single');
      return;
    }

    var prev = document.createElement('button');
    prev.className = 'fx-slider-btn prev';
    prev.setAttribute('aria-label', 'Previous');
    prev.innerHTML = '&#10094;';

    var next = document.createElement('button');
    next.className = 'fx-slider-btn next';
    next.setAttribute('aria-label', 'Next');
    next.innerHTML = '&#10095;';

    var counter = document.createElement('div');
    counter.className = 'fx-slider-counter';
    counter.textContent = '1 / ' + slides.length;

    var dots = document.createElement('div');
    dots.className = 'fx-slider-dots';
    var dotList = [];
    for (var i = 0; i < slides.length; i++) {
      (function (n) {
        var d = document.createElement('button');
        d.setAttribute('aria-label', 'Go to slide ' + (n + 1));
        if (n === 0) d.className = 'is-active';
        d.addEventListener('click', function () { go(n); });
        dots.appendChild(d);
        dotList.push(d);
      })(i);
    }

    slider.appendChild(prev);
    slider.appendChild(next);
    slider.appendChild(counter);
    slider.appendChild(dots);

    // Ensure first slide is active
    var anyActive = false;
    slides.forEach(function (s) { if (s.classList.contains('is-active')) anyActive = true; });
    if (!anyActive) slides[0].classList.add('is-active');

    var idx = 0;
    slides.forEach(function (s, n) { if (s.classList.contains('is-active')) idx = n; });

    function go(i) {
      idx = (i + slides.length) % slides.length;
      var prevIdx = (idx - 1 + slides.length) % slides.length;
      var nextIdx = (idx + 1) % slides.length;
      slides.forEach(function (s, n) {
        s.classList.toggle('is-active', n === idx);
        s.classList.toggle('is-prev', n === prevIdx && n !== idx);
        s.classList.toggle('is-next', n === nextIdx && n !== idx);
      });
      dotList.forEach(function (d, n) { d.classList.toggle('is-active', n === idx); });
      counter.textContent = (idx + 1) + ' / ' + slides.length;
    }
    // Apply initial state
    go(idx);

    prev.addEventListener('click', function () { go(idx - 1); });
    next.addEventListener('click', function () { go(idx + 1); });

    slider.tabIndex = 0;
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') go(idx - 1);
      else if (e.key === 'ArrowRight') go(idx + 1);
    });

    var touchStartX = null;
    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (touchStartX === null) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
      touchStartX = null;
    });
  }

  // ---------- Lightbox ----------
  function initLightbox() {
    var overlay = document.createElement('div');
    overlay.className = 'fx-lightbox';
    overlay.innerHTML = '<button class="fx-lightbox-close" aria-label="Close">&times;</button><img alt="">';
    document.body.appendChild(overlay);
    var img = overlay.querySelector('img');
    var closeBtn = overlay.querySelector('.fx-lightbox-close');

    function open(src, alt) {
      img.src = src;
      img.alt = alt || '';
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target === closeBtn) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // Attach click-to-zoom on slider slides and inline images
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'IMG' && (
        t.closest('.fx-slide') ||
        t.closest('.page-images') ||
        t.closest('.block-image')
      )) {
        open(t.src, t.alt);
      }
    });
  }

  function init() {
    initSlider();   // before reveal so .fx-slider is part of observed set
    initReveal();
    initNavScroll();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
