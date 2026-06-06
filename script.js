// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Active nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

const titles = [
    "Creative Developer",
    "UI/UX Designer",
    "Web Wizard"
];

let index = 0;

const titleEl = document.getElementById("title");

setInterval(() => {
    index = (index + 1) % titles.length;

    titleEl.style.opacity = 0;

    setTimeout(() => {
        titleEl.textContent = titles[index];
        titleEl.style.opacity = 1;
    }, 500);

}, 4000);
