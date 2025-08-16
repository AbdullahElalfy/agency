// Setting Box
let btn = document.querySelector(".set-icon");
let box = document.querySelector(".setting");
let icon = document.querySelector(".set-icon i");
btn.addEventListener("click", function () {
  icon.classList.toggle("spin");
  box.classList.toggle("show");
});

// Theme
let orange = document.querySelector(".fr-color");
let blue = document.querySelector(".se-color");
let purple = document.querySelector(".th-color");
let green = document.querySelector(".fo-color");

// Var
const root = document.documentElement;
const bg = document.getElementById("bg");
const img = document.getElementById("logo");
// Orange
const orangeColors = {
  "--bg-primary": "#2b1400",
  "--bg-secondary": "#4a2600",
  "--bg-tertiary": "#331a00",
  "--bg-quaternary": "#4d2800",
  "--bg-quinary": "#663c00",

  "--text-primary": "white",
  "--text-secondary": "#d9a15a",
  "--text-accent": "#ff8c00",

  "--button-primary": "#ff6f00",
  "--button-secondary": "#ffa040",
  "--button-text": "#2b1400",
  "--button-shadow": "rgba(255, 111, 0, 0.5)",
  "--button-shadow-hover": "rgba(255, 111, 0, 0.8)",
  "--button-shadow-inner-1": "rgba(204, 55, 0, 0.5)",
  "--button-shadow-inner-2": "rgba(102, 25, 0, 0.35)",
  "--button-shadow-hover-inner-1": "rgba(204, 55, 0, 0.7)",
  "--button-shadow-hover-inner-2": "rgba(102, 25, 0, 0.55)",

  "--scroll-text-active": "#ff8c00",
  "--accent-orange-light": "#ffb347",
  "--accent-orange-dark": "#ff8c00",
  "--line-one": "#f90",

  "--body-bg": "#121212",
  "--body-bg-two": "#181818",
  "--body-text-color": "white",
  "--scroll-text-default": "white",
  "--box-bg": "#444",
  "--line-two": "#888",
};

orange.addEventListener("click", function () {
  for (const [key, value] of Object.entries(orangeColors)) {
    root.style.setProperty(key, value);
  }
  bg.setAttribute("src", "./Assests/VID/orange.mp4");
  img.setAttribute("src", "./Assests/IMG/orange-logo.png");
});

// blue
const blueColors = {
  "--bg-primary": "#0f1a20",
  "--bg-secondary": "#162229",
  "--bg-tertiary": "#001f3f",
  "--bg-quaternary": "#0a263f",
  "--bg-quinary": "#002b55",

  "--text-primary": "white",
  "--text-secondary": "#a2c2c8",
  "--text-accent": "#00f7ff",

  "--button-primary": "#005a77",
  "--button-secondary": "#00f7ff",
  "--button-text": "#0f1a20",
  "--button-shadow": "rgba(0, 247, 255, 0.5)",
  "--button-shadow-hover": "rgba(0, 247, 255, 0.8)",
  "--button-shadow-inner-1": "rgba(2, 144, 179, 0.5)",
  "--button-shadow-inner-2": "rgba(0, 51, 68, 0.35)",
  "--button-shadow-hover-inner-1": "rgba(2, 144, 179, 0.7)",
  "--button-shadow-hover-inner-2": "rgba(0, 51, 68, 0.55)",

  "--accent-orange-light": "#00f7ff",
  "--accent-orange-dark": "rgb(19, 220, 226)",
  "--line-one": "#005a77",
  "--scroll-text-active": "rgb(19, 220, 226)",

  "--body-bg": "#121212",
  "--body-bg-two": "#181818",
  "--body-text-color": "white",
  "--scroll-text-default": "white",
  "--box-bg": "#444",
  "--line-two": "#888",
};
blue.addEventListener("click", () => {
  for (const [key, value] of Object.entries(blueColors)) {
    root.style.setProperty(key, value);
  }
  bg.setAttribute("src", "./Assests/VID/blue.mp4");
  img.setAttribute("src", "./Assests/IMG/blue-logo.png");
});
// Purple
const purpleColors = {
  "--bg-primary": "#2a003e",
  "--bg-secondary": "#4b006f",
  "--bg-tertiary": "#33004a",
  "--bg-quaternary": "#4d0077",
  "--bg-quinary": "#660099",

  "--text-primary": "white",
  "--text-secondary": "#b899d9",
  "--text-accent": "#d46fff",

  "--button-primary": "#a633ff",
  "--button-secondary": "#d89aff",
  "--button-text": "#2a003e",

  "--button-shadow": "rgba(166, 51, 255, 0.5)",
  "--button-shadow-hover": "rgba(166, 51, 255, 0.8)",
  "--button-shadow-inner-1": "rgba(134, 14, 204, 0.5)",
  "--button-shadow-inner-2": "rgba(77, 0, 119, 0.35)",
  "--button-shadow-hover-inner-1": "rgba(134, 14, 204, 0.7)",
  "--button-shadow-hover-inner-2": "rgba(77, 0, 119, 0.55)",

  "--line-one": "#a633ff",
  "--accent-orange-light": "#d89aff",
  "--accent-orange-dark": "rgb(188, 105, 240)",
  "--scroll-text-active": "#d46fff",

  "--body-bg": "#121212",
  "--body-bg-two": "#181818",
  "--body-text-color": "white",
  "--scroll-text-default": "white",
  "--box-bg": "#444",
  "--line-two": "#888",
};

purple.addEventListener("click", () => {
  for (const [key, value] of Object.entries(purpleColors)) {
    root.style.setProperty(key, value);
  }
  bg.setAttribute("src", "./Assests/VID/purple.mp4");
  img.setAttribute("src", "./Assests/IMG/purple-logo.png");
});
// Green

const greenTheme = {
  "--bg-primary": "#014d40",
  "--bg-secondary": "#026e56",
  "--bg-tertiary": "#049372",
  "--bg-quaternary": "#066d53",
  "--bg-quinary": "#013629",

  "--text-primary": "#e6f2f1",
  "--text-secondary": "#a2d5c6",
  "--text-accent": "#00ffbc",

  "--button-primary": "#00c896",
  "--button-secondary": "#02b589",
  "--button-text": "#013629",
  "--button-shadow": "rgba(0, 200, 150, 0.4)",
  "--button-shadow-hover": "rgba(0, 200, 150, 0.7)",
  "--button-shadow-inner-1": "rgba(0, 150, 110, 0.5)",
  "--button-shadow-inner-2": "rgba(0, 100, 70, 0.3)",
  "--button-shadow-hover-inner-1": "rgba(0, 150, 110, 0.7)",
  "--button-shadow-hover-inner-2": "rgba(0, 100, 70, 0.5)",

  "--accent-orange-light": "#026e56",
  "--accent-orange-dark": "rgb(6, 87, 69)",
  "--line-one": "#049372",
  "--scroll-text-active": "#00ffbc",

  "--body-bg": "#121212",
  "--body-bg-two": "#181818",
  "--body-text-color": "white",
  "--scroll-text-default": "white",
  "--box-bg": "#444",
  "--line-two": "#888",
};

green.addEventListener("click", () => {
  for (const [key, value] of Object.entries(greenTheme)) {
    root.style.setProperty(key, value);
  }
  bg.setAttribute("src", "./Assests/VID/green.mp4");
  img.setAttribute("src", "./Assests/IMG/green-logo.png");
});

// Theme save in local Stroage

function saveTheme(themeColors, videoSrc, logoSrc) {
  localStorage.setItem("themeColors", JSON.stringify(themeColors));
  localStorage.setItem("videoSrc", videoSrc);
  localStorage.setItem("logoSrc", logoSrc);
}

function loadTheme() {
  const savedColors = localStorage.getItem("themeColors");
  const savedVideo = localStorage.getItem("videoSrc");
  const savedLogo = localStorage.getItem("logoSrc");

  if (savedColors && savedVideo && savedLogo) {
    const colors = JSON.parse(savedColors);
    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(key, value);
    }
    bg.setAttribute("src", savedVideo);
    img.setAttribute("src", savedLogo);
  }
}

loadTheme();

orange.addEventListener("click", function () {
  for (const [key, value] of Object.entries(orangeColors)) {
    root.style.setProperty(key, value);
  }
  const videoPath = "./Assests/VID/orange.mp4";
  const logoPath = "./Assests/IMG/orange-logo.png";
  bg.setAttribute("src", videoPath);
  img.setAttribute("src", logoPath);

  saveTheme(orangeColors, videoPath, logoPath);
});

blue.addEventListener("click", () => {
  for (const [key, value] of Object.entries(blueColors)) {
    root.style.setProperty(key, value);
  }
  const videoPath = "./Assests/VID/blue.mp4";
  const logoPath = "./Assests/IMG/blue-logo.png";
  bg.setAttribute("src", videoPath);
  img.setAttribute("src", logoPath);

  saveTheme(blueColors, videoPath, logoPath);
});

purple.addEventListener("click", () => {
  for (const [key, value] of Object.entries(purpleColors)) {
    root.style.setProperty(key, value);
  }
  const videoPath = "./Assests/VID/purple.mp4";
  const logoPath = "./Assests/IMG/purple-logo.png";
  bg.setAttribute("src", videoPath);
  img.setAttribute("src", logoPath);

  saveTheme(purpleColors, videoPath, logoPath);
});

green.addEventListener("click", () => {
  for (const [key, value] of Object.entries(greenTheme)) {
    root.style.setProperty(key, value);
  }
  const videoPath = "./Assests/VID/green.mp4";
  const logoPath = "./Assests/IMG/green-logo.png";
  bg.setAttribute("src", videoPath);
  img.setAttribute("src", logoPath);

  saveTheme(greenTheme, videoPath, logoPath);
});

// AOS Turn on
AOS.init({
  duration: 1000,
  once: false,
});

// Animated Title
document.addEventListener("DOMContentLoaded", function () {
  function animateText() {
    const title = document.getElementById("animatedTitle");
    if (!title) return;

    const rect = title.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let percentage = 0;

    if (rect.top < windowHeight && rect.bottom > 0) {
      if (rect.top <= windowHeight * 0.7) {
        percentage = Math.min(
          100,
          Math.max(
            0,
            ((windowHeight * 0.7 - rect.top) / (windowHeight * 0.5)) * 100
          )
        );
      }
    } else if (rect.bottom < 0) {
      percentage = 100;
    }

    title.style.background = `linear-gradient(90deg, var(--scroll-text-active, #ff8c00) ${percentage}%, var(--scroll-text-default, white) ${percentage}%)`;
    title.style.webkitBackgroundClip = "text";
    title.style.backgroundClip = "text";
    title.style.webkitTextFillColor = "transparent";
    title.style.color = "transparent";
  }

  window.addEventListener("scroll", animateText);
  animateText();
});

// TimeLine Line Animated

gsap.to(".line", {
  height: "90%",
  duration: 6.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".line",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// 3D Testimonials
const cards = document.querySelectorAll(".test");
const totalCards = cards.length;

let activeIndex = 0;
let angle = 360 / totalCards;
let rotation = 0;
let autoRotate = null;

function rotateCards(targetIndex) {
  const currentIndex = activeIndex;
  let diff = targetIndex - currentIndex;

  if (Math.abs(diff) > totalCards / 2) {
    diff = diff > 0 ? diff - totalCards : diff + totalCards;
  }

  rotation -= angle * diff;
  activeIndex = targetIndex;

  cards.forEach((card, i) => {
    const cardAngle = angle * i + rotation;
    card.style.transform = `rotateY(${cardAngle}deg) translateZ(300px)`;
  });
}

function nextCard() {
  const nextIndex = (activeIndex + 1) % totalCards;
  rotateCards(nextIndex);
}

function startAutoRotate() {
  clearInterval(autoRotate);
  autoRotate = setInterval(() => {
    nextCard();
  }, 5000);
}

function resetAutoRotate() {
  startAutoRotate();
}

cards.forEach((card, i) => {
  card.addEventListener("click", () => {
    rotateCards(i);
    resetAutoRotate();
  });
});

rotateCards(activeIndex);
startAutoRotate();

(() => {
  const section = document.getElementById("testimonials");
  let hasTriggered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasTriggered) {
        hasTriggered = true;

        clearInterval(autoRotate);

        let fastCount = 0;
        const fastInterval = setInterval(() => {
          nextCard();
          fastCount++;
          if (fastCount * 100 >= 400) {
            clearInterval(fastInterval);

            startAutoRotate();
          }
        }, 100);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
})();

// Border Progress Bar

let inputs = document.querySelectorAll(".input");

inputs.forEach((inp) => {
  let prog = inp.nextElementSibling;
  let length = inp.getAttribute("maxlength");

  inp.addEventListener("input", () => {
    let percent = (inp.value.length * 100) / length;
    prog.style.width = `${percent}%`;
  });
});

// dots Show or Hide
let show = document.querySelector(".yes");
let hide = document.querySelector(".hide");
let dots = document.querySelector(".dots");

hide.addEventListener("click", function () {
  dots.style.display = "none";
  show.classList.remove("active");
  hide.classList.add("active");
});
show.addEventListener("click", function () {
  dots.style.display = "block";
  hide.classList.remove("active");
  show.classList.add("active");
});

// Responsive Header
const toggleMenu = document.querySelector(".toggle-menu");
const menuIcon = toggleMenu.querySelector("i");
const escIcon = document.querySelector(".esc");
const buttons = document.querySelectorAll(".toggle-menu .header-btns li");
let btnsArr = Array.from(buttons);

menuIcon.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  escIcon.style.display = "flex";
});
escIcon.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  escIcon.style.display = "none";
});
btnsArr.forEach((li) => {
  li.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
  });
});
