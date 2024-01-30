const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav li");
  const line2 = document.querySelector(".hamburger .line2");

  burger.addEventListener("click", () => {
    line2.classList.toggle("turn");
    burger.classList.toggle("rotate");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, idx) => {
      link.style.animation = `navLinkFade 0.3s ease forwards ${idx / 7 + 0.3}s`;
    });
  });
};

navSlide();

const projectData = [
  {
    title: "Blossom Café",
    image: "/images/blossom-cafe.WebP",
    link1: "https://github.com/zhamman/blossom-cafe/tree/full-site-update",
    link1Text: "Github",
    link2: "https://tangerine-pixie-ffd683.netlify.app/",
    link2Text: "Live Site",
    description: "Restaurant website",
    techStack: "React",
    sClass: "",
  },
  {
    title: "Gung-Ho Films",
    image: "/images/gung-ho.WebP",
    link1: "https://github.com/zhamman/gung-ho",
    link1Text: "Github",
    link2: "https://gung-ho.netlify.app/",
    link2Text: "Live Site",
    description: "Production company website",
    techStack: "React",
    sClass: "",
  },
  {
    title: "Job Trackr",
    image: "/images/jobtrackr-img.WebP",
    link1: "https://github.com/zhamman/JobTrackr",
    link1Text: "Github",
    link2: "https://jobtrackr.online/",
    link2Text: "Live Site",
    description: "Job application tracker",
    techStack: "React",
    sClass: "",
  },
  {
    title: "Miles Mazel",
    image: "/images/miles-mazel.WebP",
    link1: "https://github.com/zhamman/Miles-site-rework",
    link1Text: "Github",
    link2: "https://milesmazel.netlify.app/",
    link2Text: "Live Site",
    description: "Photography website for Miles Mazel",
    techStack: "React",
    sClass: "",
  },
  {
    title: "My Portfolio",
    image: "/images/zach-hamman-portfolio.WebP",
    link1: "https://github.com/zhamman/my-website-2",
    link1Text: "Github",
    link2: "../index.html",
    link2Text: "Live Site",
    description: "My Portfolio website",
    techStack: "HTML CSS JavaScript",
    sClass: "highlight",
  },
  {
    title: "Ip Adress Tracker",
    image: "/images/ip-address.WebP",
    link1: "https://github.com/zhamman/ip-address-tracker",
    link1Text: "Github",
    link2: "https://iptracker-webapp.netlify.app/",
    link2Text: "Live Site",
    description: "An ip address tracker",
    techStack: "React",
    sClass: "",
  },
  {
    title: "Sneaker Shop",
    image: "/images/sneaker-shop.WebP",
    link1: "https://github.com/zhamman/sneaker-shop-site",
    link1Text: "Github",
    link2: "https://sneakrshop.netlify.app/",
    link2Text: "Live Site",
    description: "Sneaker E-commerce shop concept",
    techStack: "React",
    sClass: "",
  },
  {
    title: "Tip Calculator",
    image: "/images/tip-calc.WebP",
    link1: "https://github.com/zhamman/tip-calculator",
    link1Text: "Github",
    link2: "https://gratuity-calc.netlify.app/",
    link2Text: "Live Site",
    description: "Automated Tip Calculator",
    techStack: "React",
    sClass: "",
  },
];

const projectContent = "";

const projectContainer = document.querySelector(".projects-container");

const projectRender = () => {
  projectData.map((project, i) => {
    const projects = document.createElement("div");
    projects.classList.add("project");
    projects.innerHTML = `<div class="title">
    ${project.title}
    </div>
    <div class="image ${project.sClass}">
        <img src=${project.image} alt="" />
      <div class="cover">
        <a href=${project.link1} target="_blank"
          ><span class="yellow">${project.link1Text}</span>
        </a>
        <a href=${project.link2} target="_blank"
          ><span class="red">${project.link2Text}</span></a
        >
      </div>
    </div>
    <div class="description">${project.description}</div>
    
    <div class="mobile-links">
    <a href=${project.link1} target="_blank"
      ><span class="red">${project.link1Text}</span>
    </a>
    <a href=${project.link2} target="_blank"
      ><span class="yellow">${project.link2Text}</span></a
    >
    </div>`;
    projectContainer.appendChild(projects);
  });
};

projectRender();
