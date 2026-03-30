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
          duration: 5,
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
  <h3 class="about-heading">About Me</h3>
  <p class="about-text"></p>
</div>

<style>

.about-intro {
    position: relative;
    z-index: 1;
    padding: 0 1rem;
    max-width: 1200px;
    margin: -3.5rem auto 0 auto;
}
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
    line-height: 1.6;
    max-width: 75ch;
    margin: 0 auto 2rem auto;
    text-align: left;
    color: var(--text);
    font-family: 'Titillium Web', sans-serif;
    
  }

  /* Scramble chars get a dimmer color while resolving */
  :global(.scramble-char) {
    color: rgba(245, 245, 240, 0.65);
  }

  @media (max-width: 22.5rem) {
    .about-heading {
      font-size: 2.5rem;
      text-align: left;
    }

    .about-text {
      font-size: 1.15rem;
      line-height: 1.5;
      margin: 0 auto 1rem auto;
      max-width: 100%;
      text-align: left;
    }

    .about-intro {
      margin: -3rem auto 0 auto;
    }
  }
</style>