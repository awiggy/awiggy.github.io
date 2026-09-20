const menu = document.getElementById('menu');
const links = document.getElementById('nav-links');
const mobile = window.matchMedia('(max-width: 720px)');
const setOpen = (open) => {
  links.hidden = !open;
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '收起' : '菜单';
};
const sync = () => {
  menu.hidden = !mobile.matches;
  setOpen(!mobile.matches);
};
sync();
mobile.addEventListener('change', sync);
menu.addEventListener('click', () => setOpen(links.hidden));
links.addEventListener('click', event => {
  if (mobile.matches && event.target.closest('a')) setOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !links.hidden) {
    setOpen(false);
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (mobile.matches && !event.target.closest('.nav')) setOpen(false);
});
document.getElementById('year').textContent = new Date().getFullYear();
