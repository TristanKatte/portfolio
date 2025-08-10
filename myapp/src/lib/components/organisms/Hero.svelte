<script>
  import ScrollIndicator from "$lib/components/atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    // Overlay animatie
    gsap.fromTo(
      ".overlay",
      {
        opacity: 0,
        scale: 1.2,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out"
      }
    );

    // Hero tekst animaties
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

    // Rotating text
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
        },
      );
    }

    animatePhrase();
  });
</script>

<section class="hero" aria-label="Introduction">
  <div class="overlay" aria-hidden="true"></div>

  <div class="hero-inner">
    <section class="hero-text">
      <h1 class="hero-title">
        Hi!, I'm <span class="highlight">Tristan</span>
      </h1>
      <p class="hero-sub">
        I'm a <span class="rotating-text highlight"></span> who loves to create beautiful
        and functional web applications.
      </p>
    </section>

    <section class="hero-image">
      <img src="/images/profielfoto-zw.jpg" alt="Tristan" />
    </section>
  </div>

  <ScrollIndicator
    href="#about"
    ariaLabel="Scroll to the about me section"
    class="scroll-indicator"
  />
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
    margin-top: 8rem; 
    scroll-snap-align: start;
    overflow: hidden;
    width: 100%;
    text-align: center;
    color: var(--text);
    z-index: 1;
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    width: 100%;
    max-width: 1200px;
    z-index: 1;
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
    border: 8px solid var(--border);
    box-shadow: 0 0 20px var(--brand-soft);
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 6rem);
    font-weight: 800;
    margin-bottom: 1rem;
    font-family: "Nirequa", sans-serif;
    letter-spacing: 5px;
    color: var(--brand);
  }

  .highlight {
    color: var(--highlight);
    text-shadow: 0 0 8px var(--highlight);
  }

  .hero-sub {
    font-size: 2.2rem;
    opacity: 0.85;
    margin-bottom: 2rem;
    color: var(--text);
  }

  /* Desktop layout */
  @media (min-width: 768px) {
    .hero-inner {
      flex-direction: row;
      justify-content: space-around;
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
