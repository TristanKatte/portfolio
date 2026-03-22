<script>
  import { onMount } from "svelte";
  import TimelineItem from "../atoms/TimelineItem.svelte";

  export let title = "";
  export let items = [];

  let timelineEl;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const nodes = gsap.utils.toArray(timelineEl.querySelectorAll(".timeline-node"));
    const cards = gsap.utils.toArray(timelineEl.querySelectorAll(".timeline-content"));
    const progressLine = timelineEl.querySelector(".timeline-progress");

    // Progress line
    gsap.fromTo(progressLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: timelineEl,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      }
    );

    // Nodes and cards
    nodes.forEach((node, i) => {
      const color = node.style.getPropertyValue("--color");

      ScrollTrigger.create({
        trigger: node,
        start: "top center",
        onEnter: () => {
          gsap.to(node, { scale: 1.2, opacity: 1, boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`, duration: 0.5 });
          gsap.to(cards[i], { boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(node, { scale: 1, opacity: 1, boxShadow: "none", duration: 0.3 });
          gsap.to(cards[i], { boxShadow: "none", duration: 0.3 });
        },
      });

      gsap.fromTo(cards[i],
        {
          autoAlpha: 0,
          x: window.innerWidth > 768 ? (i % 2 === 0 ? -60 : 60) : 0,
          y: window.innerWidth > 768 ? -30 + Math.random() * 20 : 30,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[i],
            start: "top 90%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        }
      );
    });
  });
</script>

<section aria-labelledby={title} class="timeline-section">
  <header>
    <h2 id={title} class="timeline-heading" style="color: {items[0].color}">
      {title}
    </h2>
  </header>

  <div class="timeline" bind:this={timelineEl}>
    <div class="timeline-line"></div>
    <div class="timeline-progress" style="--color: {items[0].color}"></div>

    {#each items as item, i}
      <TimelineItem {item} {i} />
    {/each}
  </div>
</section>

<style>
  .timeline-heading {
    font-size: 2rem;
    margin: 3rem 0 2rem;
    text-align: left;
  }

  .timeline {
    position: relative;
    margin-bottom: 6rem;
    font-weight: 100;
  }

  .timeline-line {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    z-index: 1;
  }

  .timeline-progress {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scaleY(0);
    width: 4px;
    height: 100%;
    background: var(--color);
    box-shadow: 0 0 10px var(--color), 0 0 20px var(--color), 0 0 30px var(--color);
    transform-origin: top;
    z-index: 2;
  }

  @media (max-width: 768px) {
    .timeline-line,
    .timeline-progress {
      left: 20px;
      transform: translateX(0);
    }
  }
</style>