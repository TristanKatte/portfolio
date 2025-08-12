<script>
  import ScrollIndicator from "$lib/components/atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollIndicator fade & bounce
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

    // Overlay animatie
    gsap.fromTo(
      ".overlay",
      {
        opacity: 0,
        scale: 1.2,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
      },
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

    // 3D hover tilt + shine effect for profile image
    const img = document.querySelector(".image-card img");
    const shine = document.createElement("div");
    shine.className = "shine";
    img.parentElement.style.position = "relative";
    img.parentElement.appendChild(shine);

    const rotateCard = (e) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateY = (x / width - 0.5) * 20; // max 20deg
      const rotateX = (y / height - 0.5) * -20;

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      img.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 20px var(--brand-soft)`;

      // Shine position and rotation
      const posX = (x / width) * 100;
      const posY = (y / height) * 100;
      shine.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255 255 255 / 0.4), transparent 60%)`;
    };

    const resetCard = () => {
      img.style.transform = "rotateX(0) rotateY(0) scale(1)";
      img.style.boxShadow = `0 0 20px var(--brand-soft)`;
      shine.style.background = "transparent";
    };

    img.parentElement.addEventListener("mousemove", rotateCard);
    img.parentElement.addEventListener("mouseleave", resetCard);
  });
</script>

<section class="hero">
  <div class="hero-content">
    <div class="text">
      <h1 class="hero-title">Hi, I’m Tristan</h1>
      <p class="hero-sub">
        I'm a <span class="rotating-text highlight"></span> who loves to create beautiful
        and functional web applications.
      </p>
    </div>

    <div class="hero-image">
      <div class="image-card">
        <picture>
          <source srcset="/images/profielfoto-zw.avif" type="image/avif" />
          <source srcset="/images/profielfoto-zw.webp" type="image/webp" />
          <img
            src="/images/profielfoto-zw.jpg"
            alt="Tristan"
            width="400"
            height="400"
          />
        </picture>
      </div>
    </div>
  </div>

  <div class="scroll-indicator">
    <ScrollIndicator ariaLabel="Scroll to about section" />
  </div>
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

  .hero-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    z-index: 1;
  }

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

  .rotating-text {
    font-weight: 700;
    color: var(--highlight);
    text-shadow: 0 0 8px var(--highlight);
  }

  .hero-image {
    flex: 1 1 300px;
    display: flex;
    justify-content: center;
  }

  .image-card {
    perspective: 1000px;
    position: relative;
  }

  .image-card img {
    display: block;
    border-radius: 1rem;
    object-fit: cover;
    border: 8px solid var(--border);
    box-shadow: 0 0 20px var(--brand-soft);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
    transform-style: preserve-3d;
    max-width: 100%;
    height: auto;
  }
  
  .scroll-indicator {
    margin-top: 2rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
    }
    .text {
      text-align: center;
    }
  }
</style>
