<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger  from 'gsap/ScrollTrigger';
  
 gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power2.out"
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  });
</script>

<section class="hero" aria-label="Introductie">
  <div class="container">
    <h1 class="hero-title">Hi, ik ben <span class="highlight">[Jouw Naam]</span></h1>
    <p class="hero-sub">Frontend developer met passie voor animatie, performance & UX.</p>

    <div class="hero-buttons">
      <a href="#projects" class="btn primary">Bekijk mijn werk</a>
      <a href="/curriculum_vitae-1.pdf" class="btn secondary" download>Download CV</a>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--size-7);
    background: var(--bg);
    color: var(--fg);
  }

  .container {
    max-width: 60ch;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--brand, #64ffda);
  }

  .hero-sub {
    font-size: 1.2rem;
    line-height: 1.6;
    opacity: 0.8;
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
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    transition: all 0.3s ease;
    text-decoration: none;
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
    border: 2px solid var(--brand, #64ffda);
    color: var(--brand, #64ffda);
  }

  .btn.secondary:hover {
    background: var(--brand);
    color: #000;
  }
</style>
