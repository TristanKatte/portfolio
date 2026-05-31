<script>
  import { onMount } from "svelte";

  export let introText = [];

  let container;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    // Heading: same word-by-word color fill as paragraph
    const heading = container.querySelector(".about-heading");
    heading.innerHTML = "About Me"
      .split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    gsap.fromTo(
      heading.querySelectorAll(".word"),
      { color: "rgba(0, 255, 241, 0.1)" },
      {
        color: "#00fff1",
        duration: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Paragraph: fill color word-by-word as user scrolls
    const paragraphs = container.querySelectorAll(".about-text");
    paragraphs.forEach((el, i) => {
      const text = introText[i];
      if (!text) return;

      el.innerHTML = text
        .split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const words = el.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { color: "rgba(245, 245, 240, 0.1)" },
        {
          color: "rgba(245, 245, 240, 0.9)",
          duration: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
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