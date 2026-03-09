/* ============================================================
   Divyanshu Tiwari — Portfolio
   Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ==================== NAVBAR ==================== */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  // Scroll: add .scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    toggleBackToTop();
    updateActiveNavLink();
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ==================== ACTIVE NAV LINK ==================== */
  const sections  = Array.from(document.querySelectorAll('section[id]'));
  const allLinks  = Array.from(document.querySelectorAll('.nav-link'));

  function updateActiveNavLink() {
    const scrollY = window.scrollY + 120;
    let current = '';

    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop) current = sec.id;
    });

    allLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  updateActiveNavLink();

  /* ==================== TYPEWRITER ==================== */
  const phrases = [
    'Full Stack Java Developer',
    'Backend Engineer',
    'DevOps Enthusiast',
    'Data Science Explorer',
    'Spring Boot Specialist',
  ];

  const typeEl  = document.getElementById('typewriter');
  let phraseIdx = 0;
  let charIdx   = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      typeEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      typeEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before next phrase
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 600);

  /* ==================== SCROLL REVEAL ==================== */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (idx * 80) + 'ms';
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ==================== HERO PARTICLES ==================== */
  const particleContainer = document.getElementById('particles');
  const PARTICLE_COUNT = 28;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    createParticle();
  }

  function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';

    // Random properties
    const size    = Math.random() * 3 + 1.5;
    const left    = Math.random() * 100;
    const delay   = Math.random() * 12;
    const dur     = Math.random() * 10 + 12;
    const opacity = Math.random() * 0.5 + 0.2;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -8px;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      opacity: ${opacity};
    `;

    // Alternate between purple and cyan
    p.style.background = i % 3 === 0
      ? 'rgba(6, 182, 212, 0.7)'
      : 'rgba(124, 58, 237, 0.7)';

    particleContainer.appendChild(p);
  }

  /* ==================== BACK TO TOP ==================== */
  const backBtn = document.getElementById('back-to-top');

  function toggleBackToTop() {
    backBtn.classList.toggle('visible', window.scrollY > 400);
  }

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ==================== CONTACT FORM ==================== */
  const contactForm = document.getElementById('contact-form');
  const formNote    = document.getElementById('form-note');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = contactForm.name.value.trim();
      const email   = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      // Basic validation
      if (!name || !email || !message) {
        showNote('Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showNote('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate form submission (replace with real endpoint / EmailJS as needed)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        showNote('Thank you! Your message has been sent.', 'success');
      }, 1400);
    });
  }

  function showNote(text, type) {
    formNote.textContent = text;
    formNote.className = 'form-note ' + type;
    setTimeout(() => { formNote.textContent = ''; formNote.className = 'form-note'; }, 4000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ==================== SMOOTH SCROLL (fallback) ==================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

})();
