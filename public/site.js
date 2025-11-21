// contact form client-side validation (no real send yet)
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const status = document.getElementById('formStatus');
    status.textContent = 'Mulțumim! Vom reveni în scurt timp.';
    status.classList.remove('text-danger');
    status.classList.add('text-success');

    setTimeout(() => {
      form.reset();
      form.classList.remove('was-validated');
      status.textContent = '';
    }, 2500);
  });
})();


// close mobile menu when a link is clicked
(() => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn-nav-cta');
  const menuToggle = document.getElementById('mainnav');
  const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        // check if the menu is actually open (has class 'show')
        if (menuToggle.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
  });
})();