<script>
  import { onMount } from "svelte";

  export let introText = "";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).default;
    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

    const el = document.querySelector(".about-text");

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          duration: 20,
          scrambleText: {
            text: introText,
            chars: "01アイウエOカキクケCO!@#$%",
            revealDelay: 0.3,
            speed: 0.5,
            newClass: "scramble-char",
          },
          ease: "none",
        });
      },
    });

    // Gradient shift animation
    gsap.to(".about-text", {
      backgroundPosition: "200% 0",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  });
</script>

<div class="about-intro">
  <h2 class="about-heading">About Me</h2>
  <p class="about-text"></p>
</div>

<style>
  .about-heading {
    font-size: 2rem;
    margin: 3rem 0 2rem;
    text-align: left;
    color: var(--highlight);
    font-family: "Neofolia", sans-serif;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 3rem;
  }

  .about-text {
    font-size: 1.25rem;
    letter-spacing: 2px;
    line-height: 1.7;
    max-width: 750px;
    margin: 0 auto 3rem auto;
    text-align: left;
    color: var(--text);
    min-height: 8rem; /* prevents layout shift while empty */
    font-family: 'Inter';
  }

  /* Scramble chars get a dimmer color while resolving */
  :global(.scramble-char) {
    color: rgba(245, 245, 240, 0.65);
  }
</style>