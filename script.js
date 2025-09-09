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
]
const skillList = document.getElementById("skillList")
keySkills.forEach(skill => {
  const li = document.createElement("li")
  li.textContent = skill;
  skillList.appendChild(li)
})
const topSkill = [
   "web Developer",
  "web Developer",
  "HTML",
]

const topSkillList =document.getElementById("content")
topSkill.forEach(s => {
  const li = document.createElement("li")
  li.textContent = s;
  topSkillList.appendChild(li)
})
 document.addEventListener('DOMContentLoaded', () => {
 
      const softSkills = [
        { name: "Problem-solving", icon: "lightbulb" },
  { name: "Communication skills", icon: "smartphone" },
  { name: "Time management", icon: "timer" }
      ];

      const softSkillsEl = document.getElementById("softskills");

     
      softSkills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `<i data-lucide="${skill.icon}"></i><span>${skill.name}</span>`;
        softSkillsEl.appendChild(li);
      })
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      } else {
        console.warn('Lucide not available yet.');
      }
    });
    const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Basic" }
];
const languageList = document.getElementById("languageList");

  languages.forEach(lang => {
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
    recent: true
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum is placeholder",
    duration: "Jul 2024 - Jul 2025",
    location: "Sargodha, Pakistan",
    recent: false
  }
];

const educationList = document.getElementById("educationList");

function renderEducation(showAll = false) {
  educationList.innerHTML = "";
  let items = showAll ? educationData : educationData.slice(0, 1);

  items.forEach(item => {
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
  toggleBtn.textContent = expanded ? "See less Education ▲" : "See all Education ▼";
});

// render first time
renderEducation();
