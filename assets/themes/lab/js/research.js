(() => {
  const reader = document.querySelector('[data-thrust-reader]');
  if (!reader) return;

  const cards = Array.from(reader.children);
  const list = document.createElement('div');
  list.className = 'thrust-list';
  const panel = document.createElement('div');
  panel.className = 'thrust-panel';
  panel.id = 'thrust-panel';
  panel.hidden = true;
  panel.setAttribute('role', 'region');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'thrust-close';
  close.textContent = 'Close −';
  close.setAttribute('aria-label', 'Close research overview and restore all three columns');
  panel.append(close);

  const entries = cards.map((card, index) => {
    const summary = card.querySelector('summary');
    const content = card.querySelector('.thrust-content');
    const title = summary.querySelector('h2').textContent;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'thrust-select';
    button.id = `thrust-select-${index + 1}`;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panel.id);
    [
      ['thrust-number', summary.querySelector('span').textContent],
      ['thrust-title', title],
      ['thrust-description', summary.querySelector('p').textContent],
      ['thrust-action', 'Open +']
    ].forEach(([className, text]) => {
      const span = document.createElement('span');
      span.className = className;
      span.textContent = text;
      if (className === 'thrust-action') span.setAttribute('aria-hidden', 'true');
      button.append(span);
    });
    const heading = document.createElement('h2');
    heading.id = `thrust-heading-${index + 1}`;
    heading.textContent = title;
    content.prepend(heading);
    content.hidden = true;
    panel.append(content);
    card.replaceChildren(button);
    list.append(card);
    return { card, button, content, heading };
  });
  reader.append(list, panel);
  reader.classList.add('has-thrust-reader');

  let active = null;
  let animations = [];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function select(entry) {
    animations.forEach(animation => animation.cancel());
    animations = [];
    const before = cards.map(card => card.getBoundingClientRect());
    const previous = active;
    active = entry === active ? null : entry;
    reader.classList.toggle('is-open', Boolean(active));
    panel.hidden = !active;

    // Reorder the DOM as well as the visual list, so keyboard order matches.
    const ordered = active ? [active, ...entries.filter(item => item !== active)] : entries;
    ordered.forEach(item => {
      list.append(item.card);
      const selected = item === active;
      item.button.setAttribute('aria-expanded', String(selected));
      item.button.classList.toggle('is-active', selected);
      item.button.querySelector('.thrust-action').textContent = selected ? 'Close −' : 'Open +';
      item.content.hidden = !selected;
    });
    if (active) panel.setAttribute('aria-labelledby', active.heading.id);
    else panel.removeAttribute('aria-labelledby');
    (active || previous)?.button.focus({ preventScroll: true });

    if (reducedMotion.matches) return;
    const timing = { duration: 420, easing: 'cubic-bezier(.2,.72,.2,1)' };
    cards.forEach((card, index) => {
      const after = card.getBoundingClientRect();
      animations.push(card.animate([
        { transform: `translate(${before[index].left - after.left}px, ${before[index].top - after.top}px)` },
        { transform: 'translate(0, 0)' }
      ], timing));
    });
    if (active) {
      animations.push(panel.animate([
        { opacity: 0, transform: 'perspective(1200px) rotateY(-12deg) translateX(18px)' },
        { opacity: 1, transform: 'perspective(1200px) rotateY(0) translateX(0)' }
      ], timing));
    }
  }

  entries.forEach(entry => entry.button.addEventListener('click', () => select(entry)));
  close.addEventListener('click', () => select(null));
  reader.addEventListener('keydown', event => {
    if (event.key === 'Escape' && active) {
      event.preventDefault();
      select(null);
    }
  });
})();
