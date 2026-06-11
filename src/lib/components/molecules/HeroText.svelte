<script>
  import { onDestroy, onMount } from "svelte";

  export let phrases = [];

  const titleText = "Tristan Katte";
  const titleSub = "Creative Developer";

  let cleanupAnimations = () => {};

  function getThemeColors() {
    if (typeof document === "undefined") {
      return {
        accent: "#00ccc9",
        accentSoft: "rgba(0, 204, 201, 0.3)",
        accentGlow: "#00ccc9",
        titleGlow: "#00ccc9",
      };
    }

    const styles = getComputedStyle(document.documentElement);
    const highlight = styles.getPropertyValue("--highlight").trim() || "#00ccc9";
    const brand = styles.getPropertyValue("--brand").trim() || "#00c2cb";
    const headerBg = styles.getPropertyValue("--header-bg").trim() || "rgba(12, 16, 22, 0.8)";

    return {
      accent: highlight,
      accentSoft: `${highlight}4d`,
      accentGlow: brand,
      titleGlow: headerBg.includes("245") ? brand : highlight,
    };
  }

  function setupAnimations(gsap) {
    cleanupAnimations();

    const { accent, accentSoft, accentGlow, titleGlow } = getThemeColors();
    const cleanups = [];

    const titleEl = document.querySelector(".hero-title");
    titleEl.textContent = titleText;
    titleEl.innerHTML = titleText
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char" style="display:inline-block;">&nbsp;</span>`
          : `<span class="char" style="display:inline-block;">${char}</span>`
      )
      .join("");

    const tl = gsap.timeline();

    // Title character reveal
    tl.staggerFromTo(
      ".hero-title .char", 0.5,
      { visibility: "hidden", background: accentSoft, textShadow: `0 0 0 ${accentGlow}` },
      { visibility: "visible", background: "rgba(0, 204, 201, 0)", textShadow: `0 0 60px ${accentGlow}`, ease: "sine.out" },
      0.05, "+=0.8"
    );

    // Subtitle character reveal
    const subEl = document.querySelector(".hero-title-sub");
    subEl.innerHTML = titleSub
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char" style="display:inline-block;">&nbsp;</span>`
          : `<span class="char" style="display:inline-block;">${char}</span>`
      )
      .join("");

    tl.staggerFromTo(
      ".hero-title-sub .char", 0.5,
      { visibility: "hidden", background: accentSoft, textShadow: `0 0 0 ${accentGlow}` },
      { visibility: "visible", background: "rgba(0, 204, 201, 0)", textShadow: `0 0 60px ${accentGlow}`, ease: "sine.out" },
      0.05, "+=0.05"
    );

    // Subtitle flicker in
    tl.fromTo(".hero-sub",
      { opacity: 0, filter: "blur(6px)" },
      { opacity: 0.85, filter: "blur(0px)", duration: 0.6, ease: "power2.out" },
      "+=0.05"
    );

    // Rotating text
    tl.call(() => {
      const rotEl = document.querySelector(".rotating-text");
      let i = 0;

      function animatePhrase() {
        rotEl.textContent = phrases[i];
        gsap.fromTo(rotEl,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            onComplete: () => {
              gsap.to(rotEl, {
                opacity: 0, y: -20, delay: 2, duration: 0.8, ease: "power2.in",
                onComplete: () => {
                  i = (i + 1) % phrases.length;
                  animatePhrase();
                },
              });
            },
          }
        );
      }

      animatePhrase();
    });

    cleanupAnimations = () => {
      tl.kill();
      cleanups.forEach((cleanup) => cleanup());
      cleanupAnimations = () => {};
    };

    const themeObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.attributeName === "data-theme")) {
        setupAnimations(gsap);
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    cleanups.push(() => themeObserver.disconnect());
  }

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    setupAnimations(gsap);
  });

  onDestroy(() => {
    cleanupAnimations();
  });
</script>

<div class="text">
  <h1 class="hero-title"> {titleText} </h1>
  <h2 class="hero-title-sub"> {titleSub} </h2>
  <p class="hero-sub">
    I'm a <span class="rotating-text highlight"></span> who loves crafting
    beautiful, functional, and accessible web experiences, with a strong focus
    on performance and progressive enhancement.
  </p>
</div>

<style>
  .text {
    flex: 1 1 300px;
    text-align: center;
    
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 6.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: "Neofolia", sans-serif;
    letter-spacing: 5px;
    color: var(--brand);
    min-height: 1.2em;
  }

  .hero-title-sub {
    font-size: clamp(1rem, 2.8vw, 2.5rem);
    font-weight: 600;
    font-family: "Azonix", sans-serif;
    letter-spacing: 8px;
    color: var(--highlight);
    text-shadow: 0 0 8px var(--highlight);
    margin-bottom: 2rem;
    min-height: 1.2em;
  }

  .hero-sub {
    font-size: clamp(1.2rem, 2vw, 2.2rem);
    opacity: 0;
    margin-bottom: 2rem;
    color: var(--text);
    line-height: 1.5;
  }

  .highlight,
  .rotating-text {
    font-weight: 700;
    color: var(--highlight);
    text-shadow: 0 0 8px var(--highlight);
  }

  @media (min-width: 900px) {
    .text {
      text-align: left;
    }

    .hero-title {
      font-size: clamp(3.5rem, 5vw, 6.5rem);
    }

    .hero-title-sub {
      font-size: clamp(1.8rem, 2.8vw, 2.5rem);
    }
  }
</style>