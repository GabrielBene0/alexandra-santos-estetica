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

function splitHeroTitle() {
  const title = document.querySelector(".hero h1");
  if (!title || title.dataset.motionSplit === "true") return [];

  const accessibleLabel = title.innerText.replace(/\s+/g, " ").trim();
  const fragment = document.createDocumentFragment();
  const words = [];

  Array.from(title.childNodes).forEach((node) => {
    if (node.nodeName === "BR") {
      const breakNode = document.createElement("br");
      breakNode.setAttribute("aria-hidden", "true");
      fragment.append(breakNode);
      return;
    }

    node.textContent.split(/\s+/).filter(Boolean).forEach((word, index, list) => {
      const span = document.createElement("span");
      span.className = "motion-word";
      span.setAttribute("aria-hidden", "true");
      span.textContent = word;
      fragment.append(span);
      words.push(span);
      if (index < list.length - 1) fragment.append(" ");
    });
  });

  title.replaceChildren(fragment);
  title.setAttribute("aria-label", accessibleLabel);
  title.dataset.motionSplit = "true";
  return words;
}

const heroWords = splitHeroTitle();

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
    .from(".hero-copy .kicker", { y: 22, autoAlpha: 0, duration: 0.65 }, "-=0.35")
    .from(heroWords, { yPercent: 110, rotate: 2, autoAlpha: 0, duration: 0.8, stagger: 0.045 }, "-=0.35")
    .from(".hero-lead", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.45")
    .from(".hero-actions", { y: 20, autoAlpha: 0, duration: 0.65 }, "-=0.42")
    .from(".hero-facts li", { y: 15, autoAlpha: 0, duration: 0.55, stagger: 0.08 }, "-=0.25")
    .from("[data-hero-image]", { clipPath: "inset(100% 0 0 0)", autoAlpha: 0, duration: 1.15 }, "-=1.25")
    .from("[data-hero-image] img", { scale: 1.065, duration: 1.45 }, "<")
    .from(".hero-glow", { scale: 0.62, autoAlpha: 0, duration: 1.2 }, "-=1.2")
    .from(".hero-orbit", { scale: 0.72, autoAlpha: 0, duration: 1.1, stagger: 0.12 }, "-=1.05");

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

  gsap.utils.toArray("[data-reveal-group]:not(.mosaic)").forEach((group) => {
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

  gsap.from(".mosaic figure", {
    clipPath: "inset(0 0 100% 0 round 16px)",
    duration: 1.05,
    ease: "power3.inOut",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".mosaic",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".mosaic figure img", {
    scale: 1.12,
    duration: 1.35,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".mosaic",
      start: "top 80%",
      once: true,
    },
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

  gsap.utils.toArray(".image-card img").forEach((image) => {
    gsap.fromTo(
      image,
      { yPercent: -3, scale: 1.06 },
      {
        yPercent: 3,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: image.closest(".image-card"),
          start: "top bottom",
          end: "bottom top",
          scrub: 0.9,
        },
      },
    );
  });

  gsap.fromTo(
    ".safety-banner img",
    { scale: 1.04, xPercent: 2 },
    {
      scale: 1.04,
      xPercent: -1.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".safety-banner",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    },
  );

  gsap.from(".cta-main-image", {
    clipPath: "inset(0 0 100% 0 round 43% 43% 18px 18px)",
    scale: 1.06,
    duration: 1.15,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".cta-visual",
      start: "top 78%",
      once: true,
    },
  });

  gsap.from(".cta-small-image", {
    y: 50,
    rotate: -7,
    autoAlpha: 0,
    duration: 0.85,
    ease: "back.out(1.25)",
    scrollTrigger: {
      trigger: ".cta-visual",
      start: "top 70%",
      once: true,
    },
  });

  gsap.fromTo(
    ".final-cta .button",
    { boxShadow: "0 0 0 rgba(200, 79, 112, 0)" },
    {
      boxShadow: "0 18px 52px rgba(200, 79, 112, 0.38)",
      duration: 0.75,
      repeat: 1,
      yoyo: true,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".final-cta .button",
        start: "top 88%",
        once: true,
      },
    },
  );

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
