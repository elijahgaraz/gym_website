document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.add('active');
    }
  });

  // Toggle menu for small screens
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('show');
    });
  }

  // Simple gallery slider
  const slides = document.querySelectorAll('.gallery img');
  if (slides.length) {
    let idx = 0;
    slides[idx].classList.add('active');
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 3000);
  }

  // Reveal animations on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(r => observer.observe(r));
  }
});
