// Dark-mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact-form handler (replace with your own back-end)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent (demo only—hook up your back-end)!');
  e.target.reset();
});
