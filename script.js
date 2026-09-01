const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.timeline-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.timeline-trigger').forEach((item) => item.setAttribute('aria-expanded', 'false'));
    trigger.setAttribute('aria-expanded', String(!isExpanded));
  });
});

const sections = document.querySelectorAll('main section[id], main section:first-child');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
      const id = entry.target.id;
      if (id) {
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      }
    }
  });
}, { threshold: 0.18 });

sections.forEach((section) => observer.observe(section));
document.querySelectorAll('.hero .reveal').forEach((element) => element.classList.add('visible'));
