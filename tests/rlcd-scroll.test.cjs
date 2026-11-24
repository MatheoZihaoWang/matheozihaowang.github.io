const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../assets/themes/lab/js/rlcd-scroll.js'), 'utf8');

function setup() {
  let time = 0, nextFrame = 1;
  const frames = new Map(), events = {}, properties = {};
  const reduced = { matches: false, addEventListener: (_, fn) => events.preference = fn };
  const root = { scrollHeight: 4000, style: { setProperty: (key, value) => properties[key] = value } };
  const document = { documentElement: root, hidden: false, addEventListener: (name, fn) => events[name] = fn };
  const window = { scrollY: 0, innerHeight: 720, matchMedia: () => reduced, addEventListener: (name, fn, options) => {
    events[name] = fn;
    if (name === 'scroll') assert.equal(options.passive, true);
  } };
  vm.runInNewContext(source, {
    document, window, performance: { now: () => time },
    requestAnimationFrame: fn => { const id = nextFrame++; frames.set(id, fn); return id; },
    cancelAnimationFrame: id => frames.delete(id)
  });
  return {
    window, document, reduced, events, properties, frames,
    scroll(y) { time += 16; window.scrollY = y; events.scroll(); assert.equal(window.scrollY, y); },
    tick(ms = 16) { time += ms; const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(fn => fn(time)); },
    alpha: () => parseFloat(properties['--rlcd-response-alpha'] || 0),
    edge: () => parseFloat(properties['--rlcd-response-y'] || 0)
  };
}

test('native fractional scrolling is untouched; response is faint and bounded', () => {
  const s = setup();
  for (const y of [10.25, 45.5, 85.75, 185.125]) {
    s.scroll(y); s.tick();
    assert(s.alpha() > 0 && s.alpha() <= .11);
    assert(s.edge() > 0 && s.edge() <= 1.8);
  }
  assert.equal(s.window.scrollY, 185.125);
});

test('response reverses direction and fully settles without an idle animation loop', () => {
  const s = setup();
  s.scroll(200); s.tick();
  for (const y of [180, 140, 100, 50]) { s.scroll(y); s.tick(); }
  assert(s.edge() < 0);
  for (let i = 0; i < 20; i++) s.tick();
  assert.equal(s.alpha(), 0);
  assert.equal(s.edge(), 0);
  assert.equal(s.frames.size, 0);
});

test('reduced motion, hidden tabs, and history restoration reset the effect', () => {
  const s = setup();
  s.scroll(100); s.tick();
  s.reduced.matches = true; s.events.preference();
  s.scroll(130); assert.equal(s.frames.size, 0); assert.equal(s.alpha(), 0);
  s.reduced.matches = false; s.events.preference();
  s.scroll(160); s.tick();
  s.document.hidden = true; s.events.visibilitychange();
  assert.equal(s.alpha(), 0); assert.equal(s.frames.size, 0);
  s.document.hidden = false; s.events.pageshow();
  assert.equal(s.edge(), 0);
});

test('large jumps and elastic overscroll do not produce artificial flashes', () => {
  const s = setup();
  for (const y of [2000, -15, 3400]) {
    s.scroll(y); s.tick();
    assert.equal(s.alpha(), 0);
    assert.equal(s.frames.size, 0);
  }
});
