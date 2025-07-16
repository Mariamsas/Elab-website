// Smooth scroll for 'Get Involved' button
const ctaBtn = document.querySelector('.cta-btn[href="#get-involved"]');
if (ctaBtn) {
  ctaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.getElementById('get-involved');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Placeholder for future interactivity
// e.g., contact form, gallery, etc.
