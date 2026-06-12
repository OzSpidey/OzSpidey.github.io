/* ---------------------------------------------------------------
   Data
--------------------------------------------------------------- */
const projects = [
  {
    title: "Market_Sentiment_Watch",
    domain: "Finance",
    desc: "Real-time NLP sentiment for 15 stocks via Yahoo Finance RSS + Reddit, with a candlestick overlay so you can read mood against price action.",
    stack: ["Python", "VADER", "Plotly Dash", "Reddit API", "Yahoo Finance"],
    icon: "chart",
  },
  {
    title: "Global_Trial_Monitor",
    domain: "Healthcare",
    desc: "Real-time intelligence across 1,500+ clinical trials, phase pipeline, sponsor leaderboard, and NLP-driven trending topics.",
    stack: ["Python", "Plotly Dash", "NLP", "ClinicalTrials API"],
    icon: "pulse",
  },
  {
    title: "Customer_Churn_Insights",
    domain: "Customer Analytics",
    desc: "Customer churn prediction with SHAP explainability, a What-If simulator, and ROC/PR curves. Achieves an AUC of 0.824.",
    stack: ["Python", "XGBoost", "SHAP", "Plotly Dash"],
    icon: "users",
  },
  {
    title: "Fraud_Detection_DB",
    domain: "Finance",
    desc: "Real-time credit-card fraud detection simulator: XGBoost + Isolation Forest ensemble, SHAP explainability, a live transaction stream, and threshold tuning.",
    stack: ["Python", "XGBoost", "Isolation Forest", "SHAP", "Plotly Dash"],
    icon: "shield",
  },
  {
    title: "IPL_Analytics_DB",
    domain: "Sports Analytics",
    desc: "Interactive IPL analytics across 6 tabs, animated charts, a venue map, and a captain leaderboard spanning 2008–2026.",
    stack: ["Python", "Plotly Dash"],
    icon: "trophy",
  },
];

const skills = [
  { group: "Languages & Query", items: ["Python", "SQL", "Pandas", "NumPy"] },
  { group: "ML & Modeling", items: ["XGBoost", "Isolation Forest", "SHAP", "scikit-learn"] },
  { group: "NLP", items: ["VADER", "Topic trending", "Sentiment analysis"] },
  { group: "Data Apps & Viz", items: ["Plotly Dash", "Plotly", "Dashboards"] },
  { group: "Data Sources", items: ["REST APIs", "RSS feeds", "Reddit API", "ETL pipelines"] },
  { group: "Workflow", items: ["Git", "GitHub Actions", "Netlify", "Real-time streams"] },
];

const icons = {
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-4 3 3 4-6"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M18 20a6 6 0 0 0-3-5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M16 5h3v2a3 3 0 0 1-3 3"/><path d="M8 5H5v2a3 3 0 0 0 3 3"/><path d="M10 14h4M9 20h6M12 14v6"/></svg>',
};

/* ---------------------------------------------------------------
   Render projects
--------------------------------------------------------------- */
const grid = document.getElementById("projectGrid");
grid.innerHTML = projects
  .map(
    (p) => `
    <article class="card reveal">
      <div class="card__top">
        <span class="card__icon">${icons[p.icon] || ""}</span>
        <span class="card__domain">${p.domain}</span>
      </div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
    </article>`
  )
  .join("");

/* ---------------------------------------------------------------
   Render skills
--------------------------------------------------------------- */
const skillGrid = document.getElementById("skillGrid");
skillGrid.innerHTML = skills
  .map(
    (s) => `
    <div class="skill reveal">
      <h3>${s.group}</h3>
      <ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>`
  )
  .join("");

/* ---------------------------------------------------------------
   Typed role effect
--------------------------------------------------------------- */
(function typeEffect() {
  const phrases = [
    "data products.",
    "real-time dashboards.",
    "ML with explainability.",
    "sentiment engines.",
    "fraud detectors.",
  ];
  const el = document.getElementById("typed");
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const word = phrases[pi];
    el.textContent = word.slice(0, ci);
    if (!deleting && ci < word.length) {
      ci++;
      setTimeout(tick, 75);
    } else if (!deleting && ci === word.length) {
      deleting = true;
      setTimeout(tick, 1600);
    } else if (deleting && ci > 0) {
      ci--;
      setTimeout(tick, 35);
    } else {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(tick, 350);
    }
  }
  tick();
})();

/* ---------------------------------------------------------------
   Nav: shrink on scroll, hide on scroll-down, mobile toggle
--------------------------------------------------------------- */
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");
let lastY = 0;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 40);
  if (y > lastY && y > 200 && !nav.classList.contains("open")) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
  lastY = y;
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  nav.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    nav.classList.remove("open");
  })
);

/* ---------------------------------------------------------------
   Reveal on scroll
--------------------------------------------------------------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal, .section__title, .about, .contact").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

/* footer year-free, set current year if a node exists */
document.documentElement.style.setProperty("--loaded", "1");
