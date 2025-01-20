// Add interactivity and demonstrations
document.addEventListener('DOMContentLoaded', () => {
  // Example showing button click states
  const buttons = document.querySelectorAll('.farm-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const btnEl = e.target;
      btnEl.style.transform = 'scale(0.98)';
      setTimeout(() => {
        btnEl.style.transform = 'scale(1)';
      }, 100);
    });
  });

  // Example showing form field focus states
  const inputs = document.querySelectorAll('.farm-field input, .farm-field select');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });

  // Example showing nav item selection
  const navLinks = document.querySelectorAll('.farm-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Automatically cycle through alert types
  const alerts = document.querySelectorAll('.farm-alert');
  let currentAlertIndex = 0;

  setInterval(() => {
    alerts.forEach(alert => alert.style.opacity = '0.5');
    alerts[currentAlertIndex].style.opacity = '1';
    currentAlertIndex = (currentAlertIndex + 1) % alerts.length;
  }, 2000);
});