(function () {
  'use strict';

  var STORAGE_KEY = 'zihao-site-theme';
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var themeColor = document.querySelector('meta[name="theme-color"]');
  if (!button) return;

  function storedTheme() {
    try { return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'; }
    catch (error) { return 'light'; }
  }

  function buttonLabel(theme) {
    var chinese = root.lang === 'zh-CN';
    if (theme === 'dark') return chinese ? '切换至亮色显示' : 'Switch to light display';
    return chinese ? '切换至暗色显示' : 'Switch to dark display';
  }

  function refreshButton(theme) {
    var dark = theme === 'dark';
    var label = buttonLabel(theme);
    button.setAttribute('aria-pressed', dark ? 'true' : 'false');
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.querySelector('[aria-hidden]').textContent = dark ? '☀' : '☾';
    if (themeColor) themeColor.content = dark ? '#181a18' : '#d3d3d3';
  }

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (error) {}
    }
    refreshButton(theme);
  }

  button.addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  new MutationObserver(function (changes) {
    if (changes.some(function (change) { return change.attributeName === 'lang'; })) {
      refreshButton(root.getAttribute('data-theme') || 'light');
    }
  }).observe(root, { attributes: true, attributeFilter: ['lang'] });

  applyTheme(storedTheme(), false);
}());
