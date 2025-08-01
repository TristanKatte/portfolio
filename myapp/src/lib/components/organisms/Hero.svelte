<script>
  import ScrollIndicator from "$lib/components/atoms/ScrollIndicator.svelte";
  import Button from "../atoms/Button.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    // Intro animaties
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-buttons", {
      y: 20,
      opacity: 0,
      delay: 0.6,
      duration: 1,
      ease: "power2.out",
    });

    // Rotating phrases
    const phrases = [
      "Frontend Developer",
      "Web Designer",
      "Fulltime Nerd",
      "SvelteKit Enthusiast",
    ];
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
        }
      );
    }

    animatePhrase();
  });
</script>

<section class="hero" aria-label="Introductie">
  <div class="hero-inner">
    <section class="hero-text">
      <h1 class="hero-title">
        Hi!, I'm <span class="highlight">Tristan</span>
      </h1>
      <p class="hero-sub">
        I'm a <span class="rotating-text highlight"></span>
      </p>

<div class="hero-buttons">
  <Button label="View my projects" href="#work" />
  <Button label="Download my Resume" href="/curriculum_vitae-1.pdf" />
</div>
    </section>

    <section class="hero-image">
      <img src="/images/profielfoto-zw.jpg" alt="Tristan" />
    </section>
  </div>

  <ScrollIndicator href="#about" ariaLabel="Scroll to the about me section" class="scroll-indicator" />
</section>

<style>
  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    padding: var(--size-7);
    color: var(--fg, white);
    scroll-snap-align: start;
    overflow: hidden;
    width: 100%;
    text-align: center;
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
  }

  .hero-text {
    flex: 1;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
    border: 12px ridge var(--heading-color);
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 6rem);
    font-weight: 800;
    margin-bottom: 1rem;
    font-family: "Nirequa", sans-serif;
    letter-spacing: 5px;
  }

  .highlight {
    color: var(--brand, #64ffda);
  }

  .hero-sub {
    font-size: 1.45rem;
    opacity: 0.85;
    margin-bottom: 2rem;
  }

  .hero-buttons {
    display: flex;
    gap: 3rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  

  /* Desktop layout */
  @media (min-width: 768px) {
    .hero-inner {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .hero-text {
      flex: 0 0 60%;
      text-align: left;
    }

    .hero-image {
      flex: 0 0 40%;
    }
  }
</style>