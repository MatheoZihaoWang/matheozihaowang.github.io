(function () {
  'use strict';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Visual approximation only: native scrolling supplies motion; a short, faint
  // trailing edge suggests finite LCD response. No coarse pixel jumps, E Ink
  // flashes, frame-rate throttling, or persistent ghost images.
  const attackMs = 12;
  const releaseMs = 24;
  let lastY = window.scrollY;
  let lastScroll = performance.now();
  let lastFrame = lastScroll;
  let targetY = 0;
  let targetAlpha = 0;
  let responseY = 0;
  let responseAlpha = 0;
  let frame = 0;

  function paint() {
    root.style.setProperty('--rlcd-response-y', responseY.toFixed(3) + 'px');
    root.style.setProperty('--rlcd-response-alpha', responseAlpha.toFixed(4));
  }

  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    targetY = targetAlpha = responseY = responseAlpha = 0;
    lastY = window.scrollY;
    lastScroll = lastFrame = performance.now();
    paint();
  }

  function tick(now) {
    frame = 0;
    if (reducedMotion.matches || document.hidden) { reset(); return; }
    const dt = Math.min(64, Math.max(0, now - lastFrame));
    lastFrame = now;
    const moving = now - lastScroll < 34;
    const alpha = moving ? targetAlpha : 0;
    const weight = 1 - Math.exp(-dt / (alpha > responseAlpha ? attackMs : releaseMs));
    responseAlpha += (alpha - responseAlpha) * weight;
    // Hold the previous edge position while fading instead of sliding it back.
    if (moving) responseY += (targetY - responseY) * weight;
    if (!moving && responseAlpha < .001) { reset(); return; }
    paint();
    frame = requestAnimationFrame(tick);
  }

  function onScroll() {
    const now = performance.now();
    const y = window.scrollY;
    const delta = y - lastY;
    const elapsed = now - lastScroll;
    lastY = y;
    lastScroll = now;
    if (reducedMotion.matches || document.hidden || !delta) return;
    // Suppress flashes on anchor/history jumps and during elastic overscroll.
    const maxY = Math.max(0, root.scrollHeight - window.innerHeight);
    if (Math.abs(delta) > window.innerHeight * .75 || y < 0 || y > maxY) {
      reset();
      return;
    }
    const speed = delta / Math.max(8, Math.min(64, elapsed));
    targetY = Math.sign(speed) * Math.min(1.8, Math.abs(speed) * 1.2);
    targetAlpha = .11 * Math.min(1, Math.abs(speed) / 1.5);
    if (!frame) {
      lastFrame = now;
      frame = requestAnimationFrame(tick);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('pageshow', reset);
  window.addEventListener('pagehide', reset);
  document.addEventListener('visibilitychange', reset);
  reducedMotion.addEventListener('change', reset);
}());
