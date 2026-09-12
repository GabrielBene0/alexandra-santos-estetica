import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuButtonText = menuButton?.querySelector(".sr-only");
const faqItems = document.querySelectorAll(".faq-item");
let lenis = null;
let lenisTicker = null;

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButtonText) menuButtonText.textContent = "Abrir menu";
  navLinks?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  if (menuButtonText) menuButtonText.textContent = willOpen ? "Fechar menu" : "Abrir menu";
  navLinks?.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;

    event.preventDefault();
    closeMenu();

    if (lenis && !reduceMotion.matches) {
      lenis.scrollTo(target, { offset: -20, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
    }
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector("button");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  button?.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    faqItems.forEach((otherItem) => {
      const otherButton = otherItem.querySelector("button");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      const otherIcon = otherItem.querySelector(".faq-icon");
      otherButton?.setAttribute("aria-expanded", "false");
      otherItem.classList.remove("is-open");
      if (otherAnswer) otherAnswer.hidden = true;
      if (otherIcon) otherIcon.textContent = "+";
    });

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      item.classList.add("is-open");
      if (answer) answer.hidden = false;
      if (icon) icon.textContent = "−";
    }
  });
});

function setupMotion() {
  if (reduceMotion.matches) {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    lenis?.destroy();
    lenis = null;
    return;
  }

  lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
  });

  lenis.on("scroll", ScrollTrigger.update);
  lenisTicker = (time) => lenis?.raf(time * 1000);
  gsap.ticker.add(lenisTicker);
  gsap.ticker.lagSmoothing(0);

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .from(".nav", { autoAlpha: 0, duration: 0.75 })
    .from("[data-hero-item]", { y: 34, autoAlpha: 0, duration: 0.85, stagger: 0.1 }, "-=0.35")
    .from("[data-hero-image]", { x: 55, autoAlpha: 0, duration: 1.05 }, "-=0.85")
    .from(".hero-orbit", { scale: 0.72, autoAlpha: 0, duration: 1.1, stagger: 0.12 }, "-=0.9");

  gsap.utils.toArray("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      y: 48,
      autoAlpha: 0,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true,
      },
    });
  });

  gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
    const children = Array.from(group.children);
    gsap.from(children, {
      y: 42,
      autoAlpha: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: group,
        start: "top 82%",
        once: true,
      },
    });
  });

  gsap.to(".hero-media img", {
    yPercent: 4,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
    },
  });

  gsap.to(".phone-frame", {
    rotate: 2,
    yPercent: -5,
    ease: "none",
    scrollTrigger: {
      trigger: ".consult",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  window.addEventListener(
    "load",
    () => {
      ScrollTrigger.refresh();
    },
    { once: true },
  );
}

function destroyMotion() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  if (lenisTicker) gsap.ticker.remove(lenisTicker);
  lenis?.destroy();
  lenis = null;
  lenisTicker = null;
}

setupMotion();

reduceMotion.addEventListener("change", () => {
  destroyMotion();
  setupMotion();
});

document.addEventListener("visibilitychange", () => {
  if (!lenis) return;
  if (document.hidden) lenis.stop();
  else lenis.start();
});

window.addEventListener("beforeunload", destroyMotion, { once: true });
