<script>
  import ScrollIndicator from "$lib/components/atoms/ScrollIndicator.svelte";
  import HeroText from "$lib/components/molecules/HeroText.svelte";
  import HeroStats from "$lib/components/molecules/HeroStats.svelte";
  import HeroButtons from "$lib/components/molecules/HeroButtons.svelte";
  import ImageGrid from "$lib/components/molecules/ImageGrid.svelte";
  import GridBackground from "$lib/components/molecules/GridBackground.svelte";
  import { onMount } from "svelte";

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

  const images = {
  1: "/images/tech-image-1.jpg",
  2: "/images/tech-image-2.jpg",
  3: "/images/tech-image-3.jpg",
  4: "/images/tech-image-4.jpg",
  5: "/images/tech-image-5.jpg",
  6: "/images/tech-image-6.jpg",
  7: "/images/tech-image-7.jpg",
  8: "/images/tech-image-8.jpg",
  9: "/images/tech-image-9.jpg",
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

    // 2. Flash on reveal
    tl.fromTo(
      ".boot-overlay",
      { opacity: 0.3 },
      { opacity: 0, duration: 0.2, ease: "power1.out" },
      "-=0.1",
    );

    // 3. Scroll indicator
    tl.fromTo(
      ".scroll-indicator",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4",
    );

    // Idle bounce
    tl.call(() => {
      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1.2,
      });
    });
  });
</script>

<div class="boot-overlay" aria-hidden="true"></div>

<section id="hero" class="hero">
 <GridBackground gridColor="rgba(0, 204, 201, 0.75)" />
  <div class="hero-fade" aria-hidden="true"></div>

  <div class="hero-content">
    <HeroText {phrases} />

    <div class="hero-right">
      <ImageGrid {images} profileImage="/images/profielfoto-zw.avif" />
    </div>
  </div>

  <div class="hero-bottom">
    <div class="stats-and-buttons">
      <HeroStats {stats} />
      <HeroButtons />
    </div>
  </div>

  <div class="scroll-indicator">
    <ScrollIndicator ariaLabel="Scroll to about section" />
  </div>
</section>

<style>
  .boot-overlay {
    position: fixed;
    inset: 0;
    background: #0c1016;
    transform-origin: top;
    z-index: 100;
    pointer-events: none;
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
    position: relative;
    overflow: hidden;
    gap: 2rem;
    z-index: 0;
  }

  .hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%; /* only covers the bottom 25% */
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--main-bg-color) 100%
  );
  pointer-events: none;
  z-index: 2;
}

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-9, 4rem);
    width: 100%;
    max-width: 1500px;
    padding-top: var(--size-9);
    position: relative;
    z-index: 3;
  }

  .hero-right {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .hero-bottom {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    max-width: 1500px;
    position: relative;
    z-index: 1;
  }

  .stats-and-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    z-index: 3;
  }

  .scroll-indicator {
    margin-top: 1rem;
    position: relative;
    z-index: 1;
  }

  /* Mobile */
  @media (min-width: 400px) {
    .hero {
      padding: var(--size-9);
    }
  }

  /* Tablet */
  @media (min-width: 600px) {
    .hero-bottom {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  /* Desktop */
  @media (min-width: 900px) {
    .hero {
      padding: var(--size-9);
      gap: 4rem;
      justify-content: center;
      width: 100%;
    }
    .hero-content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .hero-right {
      width: auto;
    }

    .hero-bottom {
      justify-content: flex-start;
    }

    .stats-and-buttons {
      align-items: flex-start;
    }
  }
</style>
