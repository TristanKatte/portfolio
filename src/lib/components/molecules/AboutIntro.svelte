<script>
  import { onMount } from "svelte";

  export let introText = [];

  let container;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).default;
    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

    // Scoped heading scramble
    const heading = container.querySelector(".about-heading");
    ScrollTrigger.create({
      trigger: heading,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(heading, {
          duration: 2,
          scrambleText: {
            text: "About Me",
            chars: "01アイウエOカキクケCO!@#$%",
            revealDelay: 0.2,
            speed: 0.6,
          },
          ease: "none",
        });
      },
    });

    // Scoped paragraph word reveal
    const paragraphs = container.querySelectorAll(".about-text");
    paragraphs.forEach((el, i) => {
      const text = introText[i];
      if (!text) return;

      el.innerHTML = text
        .split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      gsap.fromTo(
        el.querySelectorAll(".word"),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  });
</script>

<div class="about-intro" bind:this={container}>
  <h3 class="about-heading">About Me</h3>
  {#each introText as _}
    <p class="about-text"></p>
  {/each}
</div>

<style>
  .about-heading {
    font-size: 1.5rem;
    margin: 0 0 1.5rem 0;
    text-align: left;
    color: var(--highlight);
    font-family: "Azonix", sans-serif;
    letter-spacing: 3px;
    min-height: 1.2em;
  }

  .about-text {
    font-size: 1.25rem;
    letter-spacing: 2px;
    line-height: 1.6;
    max-width: 100%;
    margin: 0 0 1rem 0;
    text-align: left;
    color: rgba(245, 245, 240, 0.9);
    font-family: "Titillium Web", sans-serif;
    min-height: 1.2em;
  }

  .about-text:last-child {
    margin-bottom: 0;
  }

  :global(.word) {
    display: inline;
  }
</style>