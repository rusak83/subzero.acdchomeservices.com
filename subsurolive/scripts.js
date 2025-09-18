// Modal logic
const modal = document.getElementById('modal');
const scheduleBtn = document.getElementById('scheduleBtn');
const heroScheduleBtn = document.getElementById('heroScheduleBtn');
const aboutContactBtn = document.getElementById('aboutContactBtn');
const modalClose = document.getElementById('modalClose');

function openModal() {
  modal.style.display = 'flex';
}
function closeModal() {
  modal.style.display = 'none';
}

scheduleBtn.addEventListener('click', openModal);
if (heroScheduleBtn) heroScheduleBtn.addEventListener('click', openModal);
if (aboutContactBtn) aboutContactBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submit (demo only)
document.getElementById('serviceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your request has been submitted.');
  closeModal();
  this.reset();
});
