// ===== Bio Toggle =====
const bioText = document.getElementById("bioText");
const bioBtn = document.getElementById("bioToggleBtn");

const fullText =
  "Full-Stack Laravel & React Developer | AI & Chatbot Integration Expert | SaaS, API & Payment Gateway Specialist | Founder @ Code Fixxer | Web & Mobile (Flutter/React Native) App Specialist with extensive experience in building scalable applications and innovative solutions for modern businesses.";
const shortText =
  "Full-Stack Laravel & React Developer | AI & Chatbot Integration Expert | SaaS, API & Payment Gateway Specialist | Founder @ Code Fixxer | Web & Mobile (Flutter/React Native) App Specialist...";

bioBtn.addEventListener("click", () => {
  bioText.classList.toggle("expanded");
  bioBtn.classList.toggle("expanded");

  if (bioText.classList.contains("expanded")) {
    bioText.textContent = fullText;
    bioBtn.innerHTML = 'See less <span class="arrow">▲</span>';
  } else {
    bioText.textContent = shortText;
    bioBtn.innerHTML = 'See more <span class="arrow">▼</span>';
  }
});

const seeAll = document.querySelector(".see-all");
const skillsBtn = document.getElementById("skillsToggleBtn");

skillsBtn.addEventListener("click", () => {
  seeAll.classList.toggle("open");

  skillsBtn.textContent = seeAll.classList.contains("open")
    ? "See less"
    : "See all";
});
const keySkills = [
  "web Developer",
  "web Developer",
  "HTML",
  "web Developer",
  "HTML",
];
const skillList = document.getElementById("skillList");
keySkills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.appendChild(li);
});
const topSkill = ["web Developer", "web Developer", "HTML"];

const topSkillList = document.getElementById("content");
topSkill.forEach((s) => {
  const li = document.createElement("li");
  li.textContent = s;
  topSkillList.appendChild(li);
});
document.addEventListener("DOMContentLoaded", () => {
  const softSkills = [
    { name: "Problem-solving", icon: "lightbulb" },
    { name: "Communication skills", icon: "smartphone" },
    { name: "Time management", icon: "timer" },
  ];

  const softSkillsEl = document.getElementById("softskills");

  softSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.innerHTML = `<i data-lucide="${skill.icon}"></i><span>${skill.name}</span>`;
    softSkillsEl.appendChild(li);
  });
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  } else {
    console.warn("Lucide not available yet.");
  }
});
const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Basic" },
];
const languageList = document.getElementById("languageList");

languages.forEach((lang) => {
  const li = document.createElement("li");
  li.textContent = `${lang.name} — ${lang.level}`;
  languageList.appendChild(li);
});
const educationData = [
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: true,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false,
  },
];

const educationList = document.getElementById("educationList");

function renderEducation(showAll = false) {
  educationList.innerHTML = "";
  let items = showAll ? educationData : educationData.slice(0, 3);

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = item.recent ? "recent" : "";

    li.innerHTML = `
      <h3>${item.title} ${item.recent ? "<span>Recent</span>" : ""}</h3>
      <p>${item.desc}</p>
      <p>${item.duration}</p>
      <p>${item.location}</p>
    `;

    educationList.appendChild(li);
  });
}

let expanded = false;
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  renderEducation(expanded);
  toggleBtn.textContent = expanded
    ? "See less Education ▲"
    : "See all Education ▼";
});

renderEducation();
const portfolioItems = [
  {
    title: "How Laravel + AI Can Transform Your Business: A Client's Guide",
    description:
      "A productivity tool for organizing tasks, setting deadlines, and tracking progress. Complete project management solution.",
    tech: ["PHP +", "CSS 3", "HTML", "Laravel", "Python"],
    category: ["laravel", "ai"],
    link: "www.codefixxer.com",
    launchTime: "Launched in 3 Weeks",
    gradient: "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
  },
  {
    title: "E-Commerce Platform with React & Node",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: ["react", "node", "mern"],
    link: "www.shopmaster.io",
    launchTime: "Launched in 5 Weeks",
    gradient: "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
  },
];

function generatePortfolioCards() {
  const grid = document.getElementById("portfolioGrid");
  grid.innerHTML = "";

  portfolioItems.forEach((item) => {
    const techBadges = item.tech
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    const categoryClasses = item.category.join(" ");

    const cardHTML = `
      <div class="col-lg-4 col-md-6 portfolio-item ${categoryClasses}">
        <div class="portfolio-card">
          <img class="card-image" src="${item.gradient}" alt="${item.title}" style="background: ${item.gradient}">
            <div class="case-study-badge">Case Study</div>
          </img>
          <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <div class="tech-stack">${techBadges}</div>
            <p class="card-description">${item.description}</p>
            <div class="card-footer">
              <a href="#" class="project-link">🔗 ${item.link}</a>
              <span class="launch-info">${item.launchTime}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    grid.innerHTML += cardHTML;
  });
}

function setupFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");


  function applyFilter(filter) {
    let visibleCount = 0;

    portfolioItems.forEach((item) => {
      const card = item.querySelector(".portfolio-card");

      if (filter === "all" || item.classList.contains(filter)) {
        card.classList.remove("filtered-out");
        visibleCount++;
      } else {
        card.classList.add("filtered-out");
      }
    });

    document.getElementById("projectCount").textContent =
      `${visibleCount} Projects`;
  }

 
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      applyFilter(filter);
    });
  });


  document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
  applyFilter("all");
}


document.addEventListener("DOMContentLoaded", () => {
  generatePortfolioCards();
  setupFilters();
});
const educationListOfCard = document.getElementById("portfolioGrid");

function renderPortfolioEducation(showAll = false) {
  educationListOfCard.innerHTML = "";
  let carditems = showAll ? portfolioItems : portfolioItems.slice(0, 2);

  carditems.forEach((item) => {
     const div = document.createElement("div");
    div.className = item.recent ? "recent" : "";
    const cardHTML = `
      <div class="col-lg-4 col-md-6 portfolio-item ${item.category.join(" ")}">
        <div class="portfolio-card">
          <div class="card-image" style="background: ${item.gradient}">
            <div class="case-study-badge">Case Study</div>
          </div>
          <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
            <div class="card-footer">
              <a href="#" class="project-link">🔗 ${item.link}</a>
              <span class="launch-info">${item.launchTime}</span>
            </div>
          </div>
        </div>
      </div>
    `;
     educationListOfCard.appendChild(div);
  });
}

let expandedcard = false;
const togglecard = document.getElementById("togglecard");

togglecard.addEventListener("click", () => {
  expandedcard = !expandedcard;
  renderPortfolioEducation(expandedcard);
  togglecard.textContent = expandedcard
    ? "See less Projects ▲"
    : "See all Projects ▼";
});


renderPortfolioEducation();


 function animateProgressCircles() {
            const circles = document.querySelectorAll('.progress-bar');
            
            circles.forEach(circle => {
                const percentage = parseInt(circle.getAttribute('data-percentage'));
                const circumference = 2 * Math.PI * 45; // radius = 45
                const strokeDasharray = (percentage / 100) * circumference;
                
                // Start animation after a small delay
                setTimeout(() => {
                    circle.style.strokeDasharray = `${strokeDasharray} ${circumference}`;
                }, 500);
            });
        }

        // Handle "See all" toggle
        function initSeeAllToggle() {
            const seeAllBtn = document.getElementById('seeAllBtn');
            const skillsDetails = document.getElementById('skillsDetails');
            
            seeAllBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                seeAllBtn.classList.toggle('expanded');
                skillsDetails.classList.toggle('expanded');
                
                // Update text
                if (seeAllBtn.classList.contains('expanded')) {
                    seeAllBtn.textContent = 'See less';
                } else {
                    seeAllBtn.textContent = 'See all';
                }
            });
        }

        // Intersection Observer for scroll animations
        function initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressCircles();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(document.querySelector('.skills-grid'));
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            initSeeAllToggle();
            initScrollAnimations();
        });

        // Add hover effects for skill items
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px)';
                item.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
            });
        });
         const skills = [
  {
    category: "Backend",
    skills: ["PHP", "Laravel", "Node Js.", "My SQL", "Sql Queries", "Mongo DB"]
  },
  {
    category: "Frontend",
    skills: ["HTML 5", "CSS 3", "Vanilla Js.", "React Js.", "Ajax", "Tailwind CSS"]
  }
];

const skillsContainer = document.getElementById("skillsDetails");

skillsContainer.innerHTML = skills
  .map(
    (cat) => `
    <div class="skill-category">
      <div class="category-header">
        <div class="category-icon"></div>
      
        <div class="category-title">${cat.category}</div>
      </div>
      <div class="skill-tags">
        ${cat.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
      </div>
        <div class="category-line"></div>
    </div>
  `
  )
  .join("");



  const experienceData = [
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: true,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false,
  },
];

const experienceList = document.getElementById("experienceList");

function renderExperience(showAll = false) {
  experienceList.innerHTML = "";
  let items = showAll ? experienceData : experienceData.slice(0, 3);

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = item.recent ? "recent" : "";

    li.innerHTML = `
      <h3>${item.title} ${item.recent ? "<span>Recent</span>" : ""}</h3>
      <p>${item.desc}</p>
      <p>${item.duration}</p>
      <p>${item.location}</p>
    `;

    experienceList.appendChild(li);
  });
}

let expand = false;
const toggleBtnExp = document.getElementById("toggleBtnExp");

toggleBtnExp.addEventListener("click", () => {
  expand = !expand;
  renderExperience(expand);
  toggleBtnExp.textContent = expand
    ? "See less Experience ▲"
    : "See all Experience ▼";
});

renderExperience();


const reviewsData = [
  {
    name: "Sophie Carter",
    location: "New York, USA",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  },
  {
    name: "James Bennett",
    location: "Toronto, Canada",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  },
  {
    name: "Ayesha Gull",
    location: "Sargodha, Pakistan",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  },
  {
    name: "Michael Ross",
    location: "London, UK",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  }
];

const reviewsList = document.getElementById("reviewsList");
const toggleBtnReviews = document.getElementById("toggleBtnReviews");
let expandedRevews = false;

function renderReviews(showAll = false) {
  reviewsList.innerHTML = "";
  const items = showAll ? reviewsData : reviewsData.slice(0, 2);

  items.forEach((review) => {
    const li = document.createElement("li");
    li.className = "review-card";
    li.innerHTML = `
      <img src="${review.img}" alt="${review.name}">
      <h3>${review.name}</h3>
      <p class="location">${review.location}</p>
      <p class="text">“${review.text}”</p>
    `;
    reviewsList.appendChild(li);
  });
}

toggleBtnReviews.addEventListener("click", () => {
  expandedRevews = !expandedRevews;
  renderReviews(expandedRevews);
  toggleBtnReviews.textContent = expandedRevews
    ? "See less Reviews ▲"
    : "View all Reviews ▼";
});

// Initial render
renderReviews();
