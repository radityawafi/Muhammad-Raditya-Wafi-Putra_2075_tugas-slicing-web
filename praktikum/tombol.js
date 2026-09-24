const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu').querySelector('ul');
 
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('active');
});
 
// Tutup menu otomatis saat salah satu link diklik (khusus mobile)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});
 
 
const themeToggle = document.getElementById('themeToggle');
const bodyEl = document.body;
 
const savedTheme = localStorage.getItem('theme');
 
if (savedTheme === 'dark') {
  bodyEl.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️'; 
}
 
themeToggle.addEventListener('click', () => {
  const isDark = bodyEl.getAttribute('data-theme') === 'dark';
 
  if (isDark) {
    bodyEl.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    bodyEl.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});
 