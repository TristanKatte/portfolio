<script>
  import { onMount } from "svelte";

  export let introText = "";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const el = document.querySelector(".about-text");
    const words = el.textContent.trim().split(" ");
    el.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    gsap.fromTo(
      ".about-text .word",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "bounce.out",
        stagger: { each: 0.1, from: "start" },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

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
  <p class="about-text">{introText}</p>
</div>

<style>
  .about-heading {
    font-size: 2rem;
    margin: 3rem 0 2rem;
    text-align: left;
    color: var(--highlight);
  }

  .about-text {
    font-size: 1.25rem;
    letter-spacing: 2px;
    line-height: 1.7;
    max-width: 750px;
    margin: 0 auto 3rem auto;
    text-align: left;
    background: linear-gradient(
      270deg,
      #00ffe5, #29ffd3, #7df9ff,
      #ff4fe2, #ff00c8, #ff5bbd, #00ffe5
    );
    background-size: 400% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>