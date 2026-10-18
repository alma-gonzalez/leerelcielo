// Pestañas por año. Cada <button data-year="AAAA"> muestra su <section data-year="AAAA">.
// El año se refleja en la URL (#2026) para poder compartir el enlace directo.
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.year-tabs [role="tab"]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('section.year'));
  if (!tabs.length) return;

  function show(year, focus) {
    var found = tabs.some(function (t) { return t.dataset.year === year; });
    if (!found) year = tabs[tabs.length - 1].dataset.year; // por defecto, el año más reciente
    tabs.forEach(function (t) {
      var on = t.dataset.year === year;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    panels.forEach(function (p) { p.hidden = p.dataset.year !== year; });
    return year;
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      var y = show(t.dataset.year);
      history.replaceState(null, '', '#' + y);
      window.scrollTo({ top: 0 });
    });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      show(n.dataset.year, true);
      history.replaceState(null, '', '#' + n.dataset.year);
    });
  });

  var hash = location.hash.replace('#', '');
  show(/^\d{4}$/.test(hash) ? hash : '');
})();
