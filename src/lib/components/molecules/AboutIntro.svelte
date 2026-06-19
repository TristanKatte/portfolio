<script>
  import { onDestroy, onMount } from "svelte";

  export let introText = [];

  let container;
  let cleanupAnimations = () => {};

  function getThemeColors() {
    if (typeof document === "undefined") {
      return {
        highlight: "#00fff1",
        text: "#e0ffff",
        mutedText: "rgba(224, 255, 255, 0.1)",
      };
    }

    const styles = getComputedStyle(document.documentElement);
    const text = styles.getPropertyValue("--text").trim() || "#e0ffff";
    const highlight = styles.getPropertyValue("--highlight").trim() || "#00fff1";

    return {
      highlight,
      text,
      mutedText: `${text}1a`,
    };
  }

  function setupAnimations(gsap, ScrollTrigger) {
    cleanupAnimations();

    const cleanups = [];
    const { highlight, text, mutedText } = getThemeColors();

    const heading = container.querySelector(".about-heading");
    const headingInner = heading.querySelector(".about-heading-inner");
    headingInner.innerHTML = "About Me"
      .split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    const textBlock = container.querySelector(".about-text-block");
    const paragraphs = textBlock.querySelectorAll(".about-text");
    paragraphs.forEach((el, i) => {
      const textValue = introText[i];
      if (!textValue) return;

      const inner = el.querySelector(".about-text-inner");
      inner.innerHTML = textValue
        .split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      headingInner.querySelectorAll(".word").forEach(w => { w.style.color = highlight; });
      textBlock.querySelectorAll(".word").forEach(w => { w.style.color = text; });
      return;
    }

    const headingTween = gsap.fromTo(
      headingInner.querySelectorAll(".word"),
      { color: mutedText },
      {
        color: highlight,
        duration: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
    );
    cleanups.push(() => headingTween.kill());
    cleanups.push(() => headingTween.scrollTrigger?.kill());

    const words = textBlock.querySelectorAll(".word");
    const textTween = gsap.fromTo(
      words,
      { color: mutedText },
      {
        color: text,
        duration: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: textBlock,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
    );

    cleanups.push(() => textTween.kill());
    cleanups.push(() => textTween.scrollTrigger?.kill());

    cleanupAnimations = () => {
      cleanups.forEach((cleanup) => cleanup());
      cleanupAnimations = () => {};
    };
  }

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    setupAnimations(gsap, ScrollTrigger);

    const themeObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.attributeName === "data-theme")) {
        setupAnimations(gsap, ScrollTrigger);
        ScrollTrigger.refresh();
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    cleanups.push(() => themeObserver.disconnect());

    onDestroy(() => {
      cleanupAnimations();
      themeObserver.disconnect();
    });
  });
</script>

<div class="about-intro" bind:this={container}>
  <h3 class="about-heading" aria-label="About Me"><span class="about-heading-inner" aria-hidden="true">About Me</span></h3>
  <div class="about-text-block">
    {#each introText as text}
      <p class="about-text" aria-label={text}><span class="about-text-inner" aria-hidden="true">{text}</span></p>
    {/each}
  </div>
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
    color: var(--text);
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