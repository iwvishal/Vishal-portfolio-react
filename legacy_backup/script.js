// script.js - simple interactivity: theme toggle, mobile menu, contact demo
(function () {
  // set year on all pages
  function setYears() {
    for (const id of ['year', 'year2', 'year3', 'year4', 'year5', 'year6']) {
      const el = document.getElementById(id);
      if (el) el.textContent = new Date().getFullYear();
    }
  }
  setYears();

  // theme: remember in localStorage
  const body = document.body;
  const pref = localStorage.getItem('theme');
  if (pref === 'dark') body.classList.add('dark');

  function toggleTheme() {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  }

  // wire up theme buttons (there are multiple per page)
  ['themeToggle', 'themeToggle2', 'themeToggle3', 'themeToggle4', 'themeToggle5', 'themeToggle6'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleTheme);
  });

  // mobile nav toggles
  function wireNav(navToggleId, mobileNavId) {
    const t = document.getElementById(navToggleId);
    const m = document.getElementById(mobileNavId);
    if (!t || !m) return;
    t.addEventListener('click', () => m.classList.toggle('hidden'));
  }
  wireNav('navToggle', 'mobileNav');
  wireNav('navToggle2', 'mobileNav2');
  wireNav('navToggle3', 'mobileNav3');
  wireNav('navToggle4', 'mobileNav4');
  wireNav('navToggle5', 'mobileNav5');
  wireNav('navToggle6', 'mobileNav6');

  // demo contact form behavior (no backend)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('#name') ? form.querySelector('#name').value.trim() : '';
      const email = form.querySelector('#email') ? form.querySelector('#email').value.trim() : '';
      const message = form.querySelector('#message') ? form.querySelector('#message').value.trim() : '';
      const status = document.getElementById('formStatus');
      if (!name || !email || !message) {
        if (status) status.textContent = 'Please fill all fields.';
        return;
      }
      // simulate success
      if (status) status.textContent = "Thanks! This demo form doesn't send yet.";
      form.reset();
    });
  }

  // add simple smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();





const projects = [
  {
    img: "shop.jpg",
    title: "Featured Project: ShopSwift",
    desc: "Full-stack MERN app with product search, cart, Stripe payments & admin dashboard.",
    live: "#",
    code: "#"
  },
  {
    img: "portfolio.jpg.avif",
    title: "Featured Project: Portfolio Website",
    desc: "Responsive personal portfolio with dark/light mode and modern UI.",
    live: "#",
    code: "#"
  },
  {
    img: "management.jpg",
    title: "Featured Project: Task Manager",
    desc: "MERN app for task tracking, authentication, and real-time updates.",
    live: "#",
    code: "#"
  },
  {
    img: "expenseproject.jpg",
    // ✅ make sure this file exists in your folder
    title: "Featured Project: Expense Tracker",
    desc: "Flutter-based expense tracker to manage income, expenses, categories, and monthly reports.",
    live: "#",
    code: "#"
  }
];

let index = 0;
const projectCard = document.getElementById("projectCard");

function showProject(i) {
  projectCard.innerHTML = `
    <img src="${projects[i].img}" alt="${projects[i].title}" class="cover" />
    <div class="card-body">
      <h3>${projects[i].title}</h3>
      <p class="muted">${projects[i].desc}</p>
      <div class="card-actions">
        <a href="${projects[i].live}" class="btn small">Live</a>
        <a href="${projects[i].code}" class="btn small outline">Code</a>
      </div>
    </div>
  `;
}

// Show first project
showProject(index);

// Auto change every 5 seconds
setInterval(() => {
  index = (index + 1) % projects.length;
  showProject(index);
}, 2000);







//contact message phone me sms

document.getElementById("contactForm").addEventListener("submit", function (event) {
  let valid = true;

  // Get form values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";
  

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters";
    valid = false;
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Please enter a valid email";
    valid = false;
  }

  // Message validation
  if (message.length < 10) {
    document.getElementById("messageError").innerText = "Message must be at least 10 characters";
    valid = false;
  }

  // Stop form if not valid
  if (!valid) {
    event.preventDefault();
  }
});

