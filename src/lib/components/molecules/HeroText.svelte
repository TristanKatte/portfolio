<script>
  import { onDestroy, onMount } from "svelte";

  export let phrases = [];

  const titleText = "Tristan Katte";
  const titleSub = "Creative Developer";

  let cleanupAnimations = () => {};

  function getAccentSoft() {
    if (typeof document === "undefined") {
      return "rgba(0, 204, 201, 0.3)";
    }

    const styles = getComputedStyle(document.documentElement);
    const highlight =
      styles.getPropertyValue("--highlight").trim() || "#00ccc9";

    return `${highlight}4d`;
  }

  function setupAnimations(gsap) {
    cleanupAnimations();

    const accentSoft = getAccentSoft();

    const titleEl = document.querySelector(".hero-title-inner");
    titleEl.innerHTML = titleText
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char" style="display:inline-block;">&nbsp;</span>`
          : `<span class="char" style="display:inline-block;">${char}</span>`,
      )
      .join("");

    const tl = gsap.timeline();

    // Title character reveal
    tl.staggerFromTo(
      ".hero-title-inner .char",
      0.5,
      {
        visibility: "hidden",
        background: accentSoft,
        textShadow: "0 0 0 var(--highlight)",
      },
      {
        visibility: "visible",
        background: "rgba(0, 204, 201, 0)",
        textShadow: "0 0 60px var(--highlight)",
        ease: "sine.out",
      },
      0.05,
      "+=0.8",
    );

    // Subtitle character reveal
    const subEl = document.querySelector(".hero-title-sub-inner");
    subEl.innerHTML = titleSub
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char" style="display:inline-block;">&nbsp;</span>`
          : `<span class="char" style="display:inline-block;">${char}</span>`,
      )
      .join("");

    tl.staggerFromTo(
      ".hero-title-sub .char",
      0.5,
      {
        visibility: "hidden",
        background: accentSoft,
        textShadow: "0 0 0 var(--brand)",
      },
      {
        visibility: "visible",
        background: "rgba(0, 204, 201, 0)",
        textShadow: "0 0 60px var(--brand)",
        ease: "sine.out",
      },
      0.05,
      "+=0.05",
    );

    // Subtitle flicker in
    tl.fromTo(
      ".hero-sub",
      { opacity: 0, filter: "blur(6px)" },
      { opacity: 0.85, filter: "blur(0px)", duration: 0.6, ease: "power2.out" },
      "+=0.05",
    );

    // Rotating text
    tl.call(() => {
      const rotEl = document.querySelector(".rotating-text");
      let i = 0;

      function animatePhrase() {
        rotEl.textContent = phrases[i];
        gsap.fromTo(
          rotEl,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(rotEl, {
                opacity: 0,
                y: -20,
                delay: 2,
                duration: 0.8,
                ease: "power2.in",
                onComplete: () => {
                  i = (i + 1) % phrases.length;
                  animatePhrase();
                },
              });
            },
          },
        );
      }

      animatePhrase();
    });

    cleanupAnimations = () => {
      tl.kill();
      cleanupAnimations = () => {};
    };
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
  <h1 class="hero-title" aria-label={titleText}><span class="hero-title-inner" aria-hidden="true"></span></h1>
  <h2 class="hero-title-sub" aria-label={titleSub}><span class="hero-title-sub-inner" aria-hidden="true"></span></h2>
  <p class="hero-sub">
    I'm a <span class="rotating-text highlight"></span> who combines design thinking
    and development to create accessible, performant and engaging web experiences.
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
