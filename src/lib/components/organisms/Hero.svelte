<script>
  import ScrollIndicator from "$lib/components/atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";

  // Grid config — lives here since it's hero-only
  const columns = [
  [{ height: '3.5em', delay: '150ms' }, { height: '5em', delay: '274ms' }, { height: '3.5em', delay: '350ms' }],
  [{ height: '4em', delay: '150ms' }, { height: '9em', delay: '274ms' }, { height: '4em', delay: '350ms' }],
  [{ height: '3.5em', delay: '280ms' }, { height: '5em', delay: '95ms'  }, { height: '3.5em', delay: '350ms' }],
];

  const phrases = [
    "Frontend Developer",
    "Web Designer",
    "Fulltime Nerd",
    "SvelteKit Enthusiast",
  ];

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    // Entrance animations
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-sub", {
      y: 20,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".image-grid", {
      x: 40,
      opacity: 0,
      delay: 0.4,
      duration: 1,
      ease: "power2.out",
    });

    // Scroll indicator
    gsap.fromTo(
      ".scroll-indicator",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 },
    );
    gsap.to(".scroll-indicator", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    });

    // Rotating text
    const el = document.querySelector(".rotating-text");
    let i = 0;

    function animatePhrase() {
      el.textContent = phrases[i];
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(el, {
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
</script>

<section class="hero">
  <div class="hero-content">
    <div class="text">
      <h1 class="hero-title">Hi, I'm Tristan</h1>
      <p class="hero-sub">
        I'm a <span class="rotating-text highlight"></span> who loves to create beautiful
        and functional web applications.
      </p>
    </div>

    <div class="image-grid">
      {#each columns as column}
        <div class="grid-column">
          {#each column as item}
            <div
              class="grid-item"
              style="height: {item.height}; animation-delay: {item.delay};"
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
  }

  .hero-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: var(--size-9);
    gap: var(--size-9, 4rem);
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 1350px;
    width: 100%;
  }

  /* Text side */
  .text {
    flex: 1 1 300px;
    text-align: left;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 6rem);
    font-weight: 800;
    margin-bottom: 1rem;
    font-family: "Azonix", sans-serif;
    letter-spacing: 5px;
    color: var(--brand);
  }

  .hero-sub {
    font-size: clamp(1.2rem, 2vw, 2.2rem);
    opacity: 0.85;
    margin-bottom: 2rem;
    color: var(--text);
  }

  .highlight,
  .rotating-text {
    font-weight: 700;
    color: var(--highlight);
    text-shadow: 0 0 8px var(--highlight);
  }

  /* Grid side */
  .image-grid {
    --grid-scale: 2;
    font-size: calc(1rem * var(--grid-scale));
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min(80%, 20.5em);
    max-width: 22.5em;
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
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
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
  }

  /* Responsive */
  @media (max-width: 768px) {
    .text {
      text-align: center;
    }

    .image-grid {
      width: min(100%, 22.5rem);
    }
  }
</style>
