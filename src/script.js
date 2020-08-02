import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const arrowTL = gsap.timeline();
arrowTL
  .from(".downward-arrow", 0.5, {
    delay: 2,
    opacity: 0,
  })
  .to(".downward-arrow", 8, {
    opacity: 0.75,
    y: 2000,
  })
  .to(".downward-arrow", 2, {
    opacity: 0,
  });

const panelATL = gsap.timeline();
panelATL
  .from(".panel-a", {
    opacity: 0,
    duration: 0.5,
  })
  .from(".top-title", {
    opacity: 0,
    y: -200,
    duration: 1,
  })
  .from(".secondary-title", {
    opacity: 0,
    y: 100,
    ease: "Bounce.easeOut",
    duration: 1,
  })
  .to(".top-title", {
    xPercent: -90,
    yPercent: 30,
    rotate: 90,
    scale: 0.75,
    duration: 1,
    scrollTrigger: {
      trigger: "top-title",
      start: "top top",
      end: "+=100",
      pin: true,
      scrub: 1,
    },
    onComplete: function () {
      document.querySelector(".top-title").classList.toggle("sticky");
    },
  })
  .to(".secondary-title", {
    opacity: 0,
    duration: 2.5,
  });

const panelBTL = gsap.timeline();

panelBTL
  .from(".ep-art", {
    opacity: 0,
    xPercent: -100,
  })
  .to(".ep-art", {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".panel-b",
      scrub: true,
    },
  })
  .from(".ep-text", {
    opacity: 0,
    y: -500,
  });

gsap.to(".ep-text", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".panel-b",
    scrub: true,
    id: "ep text",
    pin: true,
    end: "+=700",
  },
});

gsap.from(".ep-art", {
  x: 0,
  opacity: 1,
  scale: 1,
});

gsap.to(".ep-art", {
  opacity: 0.25,
  scale: 4,
  scrollTrigger: {
    trigger: ".panel-b",
    start: "bottom bottom",
    scrub: true,
  },
});

gsap.from(".panel-d-artwork", {
  xPercent: -200,
  opacity: 0,
  scale: 0.25,
  duration: 1,
  scrollTrigger: {
    trigger: ".center-btns",
    start: "bottom bottom",
  },
});

const togglePopup = document.querySelector(".toggle-popup");
const playPopup = document.querySelector(".play-popup");
const openCloseImgPlay = document.querySelector(".open-close-btn--play");
const openCloseImgClose = document.querySelector(".open-close-btn--close");

togglePopup.addEventListener("click", function () {
  if (playPopup.classList.contains("open")) {
    playPopup.classList.remove("open");
    openCloseImgClose.classList.toggle("showing");
    openCloseImgPlay.classList.toggle("showing");
  } else {
    playPopup.classList.add("open");
    openCloseImgPlay.classList.toggle("showing");
    openCloseImgClose.classList.toggle("showing");
  }
});
