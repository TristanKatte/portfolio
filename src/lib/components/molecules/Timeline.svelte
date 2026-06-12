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

    const itemEls = gsap.utils.toArray(
      timelineEl.querySelectorAll(".timeline-item"),
    );

    itemEls.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        },
      );
    });
  });
</script>

<section aria-labelledby={title} class="timeline-section">
  <h2 id={title} class="timeline-heading">{title}</h2>
  <div class="timeline" bind:this={timelineEl}>
    {#each items as item}
      <TimelineItem {item} />
    {/each}
  </div>
</section>

<style>
  .timeline-heading {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: var(--highlight);
    font-family: "Azonix", monospace;
    margin: 0 0 0.5rem 0;
  }

  .timeline {
    width: 100%;
  }
</style>
