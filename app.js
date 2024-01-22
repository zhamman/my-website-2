let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let subTitle = document.querySelector(".sub-title");
let subLink = document.querySelector(".sub a");
let headerLinks = document.querySelector(".nav li");
const btn = document.getElementById("sbm-button");
const navLink = document.querySelectorAll(".nav-link");

// Opening page animation
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2000);
  });
});

// subtitle animation

setTimeout(function () {
  subTitle.style.visibility = "visible";
}, 4200);

setTimeout(function () {
  subLink.style.visibility = "visible";
}, 4200);

//  Hamburger menu fade in

const navSlide = () => {
  const open = false;
  const line2 = document.querySelector(".hamburger .line2");
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav li");

  burger.addEventListener("click", () => {
    line2.classList.toggle("turn");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("rotate");
    navLinks.forEach((link, idx) => {
      link.style.animation = `navLinkFade 0.3s ease forwards ${idx / 7 + 0.3}s`;
    });
  });
  navLink.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.toggle("rotate");
      line2.classList.toggle("turn");
      console.log("clicked");
    });
  });
};

navSlide();

// Projects Render

const homeProjectContainer = document.querySelector(".project-container");

const homeProjectData = [
  {
    title: "Blossom Café",
    link: "/project-page2/project2.html",
    class: "yellow",
  },
  {
    title: "Gung-Ho",
    link: "/project-page3/project3.html",
    class: "red",
  },
  {
    title: "JobTrackr",
    link: "/project-page/project1.html",
    class: "red",
  },
  {
    title: "All Projects",
    link: "/project-page4/project4.html",
    class: "yellow",
  },
];

const homeProjectRender = () => {
  homeProjectData.map((project, i) => {
    const homeProject = document.createElement("div");
    homeProject.classList.add("projects");
    homeProject.innerHTML = `<div class="square">
    <span></span>
    <span></span>
    <span></span>
    <div class="content">
      <a class="project-title" href=${project.link}>
        ${project.title}</a
      >
      <div class="project-links">
        <a class="view-project ${project.class}" href=${project.link}
          >>>>View Project</a
        >
      </div>
    </div>
  </div>`;
    homeProjectContainer.appendChild(homeProject);
  });
};

homeProjectRender();

// form Submit

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_npet1q3";
  const templateID = "template_1reyw7s";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      document.getElementById("form").innerHTML =
        "Your Message has been sent. Thank You!";
    },
    err => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
