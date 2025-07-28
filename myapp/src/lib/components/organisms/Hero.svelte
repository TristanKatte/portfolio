<script>
  import ScrollIndicator from '$lib/components/atoms/ScrollIndicator.svelte';
  import { onMount } from 'svelte';

onMount(async () => {
  const gsap = (await import('gsap')).default;
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  gsap.registerPlugin(ScrollTrigger);

  // Intro animaties
  gsap.from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.hero-buttons', {
    y: 20,
    opacity: 0,
    delay: 0.6,
    duration: 1,
    ease: 'power2.out',
  });

  // Rotating phrases
  const phrases = [
    "Frontend Developer",
    "Web Designer",
    "Fulltime Nerd",
    "SvelteKit Enthusiast"
  ];
  const el = document.querySelector('.rotating-text');
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
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(el, {
            opacity: 0,
            y: -20,
            delay: 2,
            duration: 0.8,
            ease: 'power2.in',
            onComplete: () => {
              i = (i + 1) % phrases.length;
              animatePhrase();
            }
          });
        }
      }
    );
  }

  animatePhrase();
});
</script>

<section class="hero" aria-label="Introductie">
  <div class="container with-image">
    <div class="hero-text">
      <h1 class="hero-title">
        Hi!, I'm <span class="highlight">Tristan</span>
      </h1>
      <p class="hero-sub">
        I'm a
        <span class="rotating-text highlight"></span>
      </p>

      <div class="hero-buttons">
        <a href="#work" class="btn primary">View my projects</a>
        <a href="/curriculum_vitae-1.pdf" class="btn secondary" download>Download my Resume</a>
      </div>
    </div>

    <!-- <div class="hero-image">
      <img src="/images/profielfoto-zw.jpg" alt="Tristan" />
    </div> -->

    <ScrollIndicator href="#about" ariaLabel="Scroll to the about me section" />
  </div>
</section>




<style>
  .hero {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--size-7);
    color: var(--fg, white);
    scroll-snap-align: start;
    text-align: center;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    font-family: "Nunito", sans-serif;
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
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  

  .btn {
    padding: 0.8rem 1.6rem;
    font-weight: 600;
    border-radius: 0.4rem;
    transition: all 0.3s ease;
    text-decoration: none;
    border: 2px solid transparent;
  }

  .btn.primary {
    background: var(--brand, #64ffda);
    color: #000;
  }

  .btn.primary:hover {
    filter: brightness(0.9);
  }

  .btn.secondary {
    background: transparent;
    border-color: var(--brand, #64ffda);
    color: var(--brand, #64ffda);
  }

  .btn.secondary:hover {
    background: var(--brand);
    color: #000;
  }


  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
</style>
