const tabLinks = [...document.querySelectorAll('[data-tab]')];
const panels = [...document.querySelectorAll('.skill-page')];
const tabList = document.querySelector('.skill-index');
const activate = (link, focus = false) => {
  tabLinks.forEach(tab => {
    const selected = tab === link;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.dataset.tab).hidden = !selected;
  });
  if (focus) link.focus();
};
document.querySelector('.skill-workspace').classList.add('tabs-enabled');
tabList.setAttribute('role', 'tablist');
tabList.setAttribute('aria-orientation', 'vertical');
tabLinks.forEach((link, index) => {
  link.setAttribute('role', 'tab');
  link.setAttribute('aria-controls', link.dataset.tab);
  const panel = document.getElementById(link.dataset.tab);
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', link.id);
  panel.tabIndex = 0;
  link.addEventListener('click', event => { event.preventDefault(); activate(link); });
  link.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabLinks.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabLinks.length) % tabLinks.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabLinks.length - 1;
    if (event.key === ' ') { event.preventDefault(); activate(link); }
    if (next !== undefined) { event.preventDefault(); activate(tabLinks[next], true); }
  });
});
const activateHash = () => {
  const requested = tabLinks.find(link => '#' + link.dataset.tab === location.hash);
  if (requested) activate(requested);
};
activate(tabLinks[0]);
activateHash();
window.addEventListener('hashchange', activateHash);
// Accordion panels remain native details elements: fully usable without JavaScript.
document.querySelectorAll('.feature-list').forEach(list => {
  list.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) list.querySelectorAll('details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  }));
});
document.getElementById('year').textContent = new Date().getFullYear();
