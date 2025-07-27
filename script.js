document.getElementById('projects-btn').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.classList.add('progress-fill-active');
    bar.style.width = percent + '%';
  });

  // Only run once
  window.removeEventListener('scroll', animateProgressBars);
}

window.addEventListener('scroll', animateProgressBars);
animateProgressBars(); // Trigger on load if already in view

document.getElementById('projects-btn').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
