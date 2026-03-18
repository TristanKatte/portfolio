<script>
  import ScrollIndicator from "$lib/components/atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";
  import HexagonCanvas from "../molecules/HexagonCanvas.svelte";
  import Button from "../atoms/Button.svelte";

  const columns = [
    [
      { height: "3.5em", delay: "150ms", pos: "0% 0%" },
      { height: "5em", delay: "274ms", pos: "0% 50%" },
      { height: "3.5em", delay: "350ms", pos: "0% 100%" },
    ],
    [
      { height: "4em", delay: "150ms", pos: "50% 0%" },
      { height: "9em", delay: "274ms", pos: "50% 50%" },
      { height: "4em", delay: "350ms", pos: "50% 100%" },
    ],
    [
      { height: "3.5em", delay: "280ms", pos: "100% 0%" },
      { height: "5em", delay: "95ms", pos: "100% 50%" },
      { height: "3.5em", delay: "350ms", pos: "100% 100%" },
    ],
  ];

  const phrases = [
    "Creative Developer",
    "Frontend Developer",
    "Web Designer",
    "Fulltime Nerd",
    "SvelteKit Enthusiast",
  ];

  const stats = [
    { value: 3, label: "Years experience" },
    { value: 24, label: "Projects shipped" },
    { value: 8, label: "Technologies" },
  ];

  const titleText = "Hi, I'm Tristan";
  const titleSub = "Creative Developer";

  const images = {
    1: "/images/tech-image-1.jpg",
    2: "/images/tech-image-2.jpg",
    3: "/images/tech-image-3.jpg",
  };

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // 1. Boot overlay sweeps off screen
    tl.to(".boot-overlay", {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.3,
    });

    // 2. Scanline flicker on reveal
    tl.fromTo(
      ".scanline",
      { opacity: 0.6 },
      { opacity: 1, duration: 0.4, ease: "power1.out" },
      "-=0.1",
    );

    // 3. Character reveal — title
    const titleEl = document.querySelector(".hero-title");
    titleEl.innerHTML = titleText
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char" style="display:inline-block;">&nbsp;</span>`
          : `<span class="char" style="display:inline-block;">${char}</span>`,
      )
      .join("");

    tl.staggerFromTo(
      ".hero-title .char",
      0.5,
      {
        visibility: "hidden",
        background: "rgba(0, 204, 201, 0.3)",
        textShadow: "0 0 0 #00ccc9",
      },
      {
        visibility: "visible",
        background: "rgba(0, 204, 201, 0)",
        textShadow: "0 0 60px #00ccc9",
        ease: "sine.out",
      },
      0.05,
      "+=0.1",
    );

    // 3b. Character reveal — subtitle
    const subEl = document.querySelector(".hero-title-sub");
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
        background: "rgba(0, 204, 201, 0.3)",
        textShadow: "0 0 0 #00ccc9",
      },
      {
        visibility: "visible",
        background: "rgba(0, 204, 201, 0)",
        textShadow: "0 0 60px #00ccc9",
        ease: "sine.out",
      },
      0.05,
      "+=0.05",
    );

    // 4. Subtitle flicker in
    tl.fromTo(
      ".hero-sub",
      { opacity: 0, filter: "blur(6px)" },
      { opacity: 0.85, filter: "blur(0px)", duration: 0.6, ease: "power2.out" },
      "+=0.05",
    );

    // 5. Grid columns stagger in
    tl.fromTo(
      ".grid-column",
      { opacity: 0, y: 20, filter: "brightness(4)" },
      {
        opacity: 1,
        y: 0,
        filter: "brightness(1)",
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.3",
    );

    // 6. Stats count up
    document.querySelectorAll(".stat-value").forEach((stat) => {
      const target = +stat.dataset.value;
      tl.to(
        stat,
        {
          innerText: target,
          duration: 1.2,
          snap: { innerText: 1 },
          ease: "power1.out",
        },
        "-=0.8",
      );
    });

    // 7. Scroll indicator
    tl.fromTo(
      ".scroll-indicator",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4",
    );

    // Idle bounce after timeline
    tl.call(() => {
      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1.2,
      });
    });

    // 8. Rotating text starts after boot sequence
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
  });
</script>

<div class="boot-overlay" aria-hidden="true"></div>

<section class="hero">
  <HexagonCanvas />
  <div class="hero-content">
    <div class="text">
      <h1 class="hero-title">{titleText}</h1>
      <h2 class="hero-title-sub">{titleSub}</h2>
      <p class="hero-sub">
        I'm a <span class="rotating-text highlight"></span> who loves crafting beautiful,
        functional, and accessible web experiences, with a strong focus on performance
        and progressive enhancement.
      </p>

      

      <section class="stats">
        {#each stats as stat}
          <div class="stat">
            <span class="stat-value" data-value={stat.value}>0</span>
            <span class="stat-label">{stat.label}</span>
          </div>
        {/each}
      </section>

      <section class="buttons">
        <Button label="View projects" href="#work" />
        <Button label="Download CV" href="/curriculum_vitae-1.pdf" variant="secondary" />
      </section>
    </div>

    <div
      class="image-grid"
      style="
  --image-1: url('{images[1]}');
  --image-2: url('{images[2]}');
  --image-3: url('{images[3]}');
"
    >
      {#each columns as column}
        <div class="grid-column">
          {#each column as item}
            <div
              class="grid-item"
              style="height: {item.height}; animation-delay: {item.delay}; background-position: {item.pos};"
            ></div>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="scroll-indicator">
    <ScrollIndicator ariaLabel="Scroll to about section" />
  </div>
</section>

<style>
  :global(:root) {
    --image-1: url(https://assets.codepen.io/907368/slider-1.jpg?format=webp&quality=40);
    --image-2: url(https://assets.codepen.io/907368/slider-2.jpg?format=webp&quality=40);
    --image-3: url(https://assets.codepen.io/907368/slider-3.jpg?format=webp&quality=40);
  }

  /* Boot overlay */
  .boot-overlay {
    position: fixed;
    inset: 0;
    background: #0c1016;
    transform-origin: top;
    z-index: 100;
    pointer-events: none;
  }

  /* Hero */
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    padding: var(--size-7);
    scroll-snap-align: start;
    width: 100%;
    color: var(--text);
    background-color: var(--main-bg-color);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  /* Layout */
  .hero-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: var(--size-9);
    gap: var(--size-9, 4rem);
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  /* Text */
  .text {
    flex: 1 1 300px;
    text-align: left;
    font-family: "Inter", sans-serif;
  }

  .text p {
    font-family: "Inter", sans-serif;
    font-size: 2.2rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    color: var(--text);
  }

  .hero-title {
    font-size: clamp(3.5rem, 5vw, 6.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: "Neofolia", sans-serif;
    letter-spacing: 5px;
    color: var(--brand);
    min-height: 1.2em;
  }

  .hero-title-sub {
    font-size: clamp(1.8rem, 2.8vw, 2.5rem);
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
  }

  .highlight,
  .rotating-text {
    font-weight: 700;
    color: var(--highlight);
    text-shadow: 0 0 8px var(--highlight);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 4rem;
    flex-wrap: wrap;
    font-family: "Space Grotesk", sans-serif;
  }

  /* Stats */
  .stats {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 1rem;
    
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background-color: var(--surface);
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    border: 2px solid var(--border);
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
  }

  .stat-value {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 800;
    color: var(--brand);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.85rem;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text);
  }

  /* Grid */
  .image-grid {
    --grid-scale: 2;
    font-size: calc(1rem * var(--grid-scale));
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35rem;
    gap: 0.5em;
  }

  .grid-column {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
  }

  .grid-item {
    width: 100%;
    border-radius: 0.5em;
    border: 2px solid var(--border);
    background-repeat: no-repeat;
    background-size: 300% 300%;
    animation: bg-cycle 5s infinite ease-in-out;
  }

  @keyframes bg-cycle {
    0%,
    30% {
      background-image: var(--image-1);
    }
    33%,
    63% {
      background-image: var(--image-2);
    }
    66%,
    96% {
      background-image: var(--image-3);
    }
    100% {
      background-image: var(--image-1);
    }
  }

  /* Scroll indicator */
  .scroll-indicator {
    margin-top: 2rem;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 22.5rem) {
    .image-grid {
      display: none;
    }

    .hero {
      padding: var(--size-5);
    }

    .hero-title {
      font-size: clamp(2rem, 5vw, 5rem);
      text-align: center;
      margin-top: 5rem;
    }

    .hero-title-sub {
      font-size: clamp(1rem, 2.5vw, 2.5rem);
      text-align: center;
    }

    .hero-sub {
      text-align: center;
      font-size: clamp(1.25rem, 2vw, 2rem);
    }

    .buttons {
      flex-direction: column;
      align-items: center;
    }

    .text {
      text-align: center;
      margin-bottom: 2rem;
      font-size: clamp(1rem, 2vw, 2rem);
    }

    .stats {
      justify-content: center;
      flex-direction: column;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .text {
      text-align: center;
    }

    .stats {
      justify-content: center;
    }

    .image-grid {
      width: min(100%, 22.5rem);
    }
  }

  @media (max-width: 480px) {
    .hero {
      width: 100%;
      padding: var(--size-7);
    }

    .hero-content {
      flex-direction: column;
      gap: var(--size-9, 4rem);
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1500px;
      width: 100%;
      margin: 0 auto;
      padding-top: var(--size-9);
    }

    .hero-title {
      font-size: clamp(2rem, 5vw, 5rem);
      text-align: center;
      margin-top: 5rem;
    }

    .hero-title-sub {
      font-size: clamp(1.5rem, 2.5vw, 3.5rem);
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      line-height: 1.5;
      font-family: "Azonix", sans-serif;
      color: var(--brand);
      text-shadow: 0 0 8px var(--brand);
      letter-spacing: 4px;
    }

    .hero-sub {
      text-align: center;
      font-size: clamp(1.25rem, 2vw, 2rem);
    }

    .text {
      text-align: center;
      margin-bottom: 2rem;
      font-size: clamp(1rem, 2vw, 2rem);
    }

    .buttons {
      flex-direction: column;
      align-items: center;
    }

    .image-grid {
      width: min(100%, 22.5rem);
    }

    .stats {
      justify-content: center;
    }

    .scroll-indicator {
      margin-top: 2rem;
    }

    .buttons {
      flex-direction: column;
      align-items: center;
    }

    .stats {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
