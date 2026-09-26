/* Brent Brooks — minimal UI behaviour
   - Work index discipline filter (chips toggle row visibility)
   No framework. Progressive: page works fully without JS. */
(function () {
  function initFilter() {
    var chips = document.querySelectorAll('[data-filter]');
    var rows = document.querySelectorAll('.proj-row[data-discipline]');
    if (!chips.length || !rows.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
        rows.forEach(function (r) {
          var d = r.getAttribute('data-discipline');
          r.classList.toggle('is-hidden', f !== 'All' && d !== f);
        });
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilter);
  } else {
    initFilter();
  }
})();
