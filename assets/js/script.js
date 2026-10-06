const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

async function hydrateEncodedAssets() {
  const images = [...document.querySelectorAll('img[data-b64-src]')];
  await Promise.all(images.map(async img => {
    try {
      const response = await fetch(img.dataset.b64Src, { cache: 'force-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const base64 = (await response.text()).trim();
      if (!base64) throw new Error('Arquivo vazio');
      img.src = `data:image/webp;base64,${base64}`;
      img.classList.add('is-loaded');
    } catch (error) {
      img.classList.add('is-error');
      console.warn('Não foi possível carregar um asset do portfólio:', img.dataset.b64Src, error);
    }
  }));
}
hydrateEncodedAssets();

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
  items.forEach(item => observer.observe(item));
} else {
  items.forEach(item => item.classList.add('visible'));
}
