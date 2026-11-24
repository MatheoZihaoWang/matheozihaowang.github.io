(function () {
  'use strict';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cell = parseFloat(getComputedStyle(root).getPropertyValue('--rlcd-cell-size')) || 3;
  let previousOffset;

  function alignContent() {
    const y = Math.max(0, window.scrollY);
    // A non-positive correction avoids extending document overflow at the bottom.
    // Never change scrollY or intercept wheel/touch/keyboard events: preserve inertia,
    // anchors, history restoration, selection, and native scrollbar behavior.
    const offset = reducedMotion.matches ? 0 : y - Math.ceil(y / cell) * cell;
    if (offset === previousOffset) return;
    root.style.setProperty('--rlcd-scroll-offset', offset + 'px');
    previousOffset = offset;
  }

  window.addEventListener('scroll', alignContent, { passive: true });
  window.addEventListener('pageshow', alignContent);
  reducedMotion.addEventListener('change', alignContent);
  alignContent();
}());
