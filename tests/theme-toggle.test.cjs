const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '../assets/themes/lab/js/theme.js'), 'utf8');

function setup(savedTheme, lang = 'en') {
  const rootAttributes = { lang };
  const buttonAttributes = {};
  const listeners = {};
  const icon = { textContent: '' };
  const button = {
    addEventListener: (name, fn) => listeners[name] = fn,
    querySelector: selector => selector === '[aria-hidden]' ? icon : null,
    setAttribute: (name, value) => buttonAttributes[name] = value
  };
  const themeColor = { content: '' };
  const root = {
    get lang() { return rootAttributes.lang; },
    set lang(value) { rootAttributes.lang = value; },
    getAttribute: name => rootAttributes[name] || null,
    setAttribute: (name, value) => rootAttributes[name] = value
  };
  const storage = { value: savedTheme };
  const localStorage = {
    getItem: () => storage.value,
    setItem: (_, value) => storage.value = value
  };
  let observer;
  class MutationObserver {
    constructor(fn) { observer = fn; }
    observe() {}
  }
  const document = {
    documentElement: root,
    querySelector: selector => selector === '.theme-toggle' ? button : themeColor
  };
  vm.runInNewContext(source, { document, localStorage, MutationObserver });
  return { root, buttonAttributes, icon, listeners, themeColor, storage, observer };
}

test('restores dark mode and toggles to persisted light mode', () => {
  const s = setup('dark');
  assert.equal(s.root.getAttribute('data-theme'), 'dark');
  assert.equal(s.buttonAttributes['aria-pressed'], 'true');
  assert.equal(s.buttonAttributes['aria-label'], 'Switch to light display');
  assert.equal(s.icon.textContent, '☀');
  assert.equal(s.themeColor.content, '#181a18');
  s.listeners.click();
  assert.equal(s.root.getAttribute('data-theme'), 'light');
  assert.equal(s.storage.value, 'light');
  assert.equal(s.buttonAttributes['aria-pressed'], 'false');
  assert.equal(s.icon.textContent, '☾');
  assert.equal(s.themeColor.content, '#d3d3d3');
});

test('updates accessible copy when the language changes', () => {
  const s = setup('light');
  s.root.lang = 'zh-CN';
  s.observer([{ attributeName: 'lang' }]);
  assert.equal(s.buttonAttributes['aria-label'], '切换至暗色显示');
  assert.equal(s.buttonAttributes.title, '切换至暗色显示');
  s.listeners.click();
  assert.equal(s.buttonAttributes['aria-label'], '切换至亮色显示');
});
