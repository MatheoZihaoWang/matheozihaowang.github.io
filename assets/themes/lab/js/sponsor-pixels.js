(function () {
  'use strict';

  var glyphs = {
    A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
    C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
    E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
    F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
    H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
    I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
    N: ['10001', '11001', '11001', '10101', '10011', '10011', '10001'],
    R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
    S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
    T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100']
  };

  function matrix(width, height) {
    return Array.from({ length: height }, function () {
      return Array(width).fill(false);
    });
  }

  function set(grid, x, y) {
    if (grid[y] && typeof grid[y][x] !== 'undefined') grid[y][x] = true;
  }

  function line(grid, x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0);
    var sx = x0 < x1 ? 1 : -1;
    var dy = -Math.abs(y1 - y0);
    var sy = y0 < y1 ? 1 : -1;
    var error = dx + dy;
    while (true) {
      set(grid, x0, y0);
      if (x0 === x1 && y0 === y1) break;
      var twice = 2 * error;
      if (twice >= dy) { error += dy; x0 += sx; }
      if (twice <= dx) { error += dx; y0 += sy; }
    }
  }

  function word(text) {
    var width = (text.length * 5) + Math.max(0, text.length - 1);
    var result = matrix(width, 7);
    Array.from(text).forEach(function (character, index) {
      glyphs[character].forEach(function (row, y) {
        Array.from(row).forEach(function (pixel, x) {
          if (pixel === '1') set(result, index * 6 + x, y);
        });
      });
    });
    return result;
  }

  function merge(target, source, offsetX, offsetY) {
    source.forEach(function (row, y) {
      row.forEach(function (pixel, x) {
        if (pixel) set(target, offsetX + x, offsetY + y);
      });
    });
  }

  function nsf() {
    var result = matrix(35, 15);
    var cx = 7;
    var cy = 7;
    for (var y = 0; y < 15; y += 1) {
      for (var x = 0; x < 15; x += 1) {
        var distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
        if (distance >= 5.1 && distance <= 6.4) set(result, x, y);
      }
    }
    [[7, 0], [7, 14], [0, 7], [14, 7], [2, 2], [12, 2], [2, 12], [12, 12]].forEach(function (point) {
      set(result, point[0], point[1]);
    });
    line(result, 3, 7, 11, 7);
    line(result, 7, 3, 7, 11);
    merge(result, word('NSF'), 18, 4);
    return result;
  }

  function nairr() {
    var result = matrix(41, 15);
    [[1, 3], [7, 2], [4, 7], [1, 12], [8, 11]].forEach(function (point) {
      set(result, point[0], point[1]);
      set(result, point[0] + 1, point[1]);
      set(result, point[0], point[1] + 1);
      set(result, point[0] + 1, point[1] + 1);
    });
    line(result, 2, 4, 7, 3);
    line(result, 2, 4, 5, 8);
    line(result, 5, 8, 2, 12);
    line(result, 5, 8, 8, 11);
    line(result, 8, 3, 8, 11);
    merge(result, word('NAIRR'), 12, 4);
    return result;
  }

  function nih() {
    var result = matrix(27, 13);
    for (var x = 0; x < 22; x += 1) { set(result, x, 1); set(result, x, 11); }
    for (var y = 1; y < 12; y += 1) set(result, 0, y);
    merge(result, word('NIH'), 2, 3);
    line(result, 21, 1, 26, 6);
    line(result, 26, 6, 21, 11);
    line(result, 21, 2, 21, 10);
    return result;
  }

  function astec() {
    var result = matrix(43, 15);
    line(result, 1, 12, 6, 1);
    line(result, 6, 1, 11, 12);
    line(result, 3, 8, 9, 8);
    [[5, 11], [6, 11], [5, 12], [6, 12]].forEach(function (point) {
      set(result, point[0], point[1]);
    });
    merge(result, word('ASTEC'), 14, 4);
    return result;
  }

  var marks = { nsf: nsf, nairr: nairr, nih: nih, astec: astec };
  Array.prototype.forEach.call(document.querySelectorAll('[data-pixel-mark]'), function (container) {
    var create = marks[container.getAttribute('data-pixel-mark')];
    if (!create) return;
    var grid = create();
    container.style.setProperty('--pixel-columns', grid[0].length);
    container.style.setProperty('--pixel-rows', grid.length);
    var fragment = document.createDocumentFragment();
    grid.forEach(function (row) {
      row.forEach(function (active) {
        var cell = document.createElement('i');
        cell.className = 'pixel-logo__cell' + (active ? ' is-on' : '');
        fragment.appendChild(cell);
      });
    });
    container.appendChild(fragment);
  });
}());
