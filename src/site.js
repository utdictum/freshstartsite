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
