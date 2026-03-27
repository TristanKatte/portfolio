<script>
  import { onMount } from "svelte";

  export let columns = [];
  export let images = {};

  onMount(async () => {
    const gsap = (await import("gsap")).default;

    gsap.fromTo(".grid-column",
      { opacity: 0, y: 20, filter: "brightness(4)" },
      {
        opacity: 1, y: 0, filter: "brightness(1)",
        duration: 0.4, stagger: 0.15, ease: "power2.out",
        delay: 1,
      }
    );
  });
</script>

<div
  class="image-grid"
  style="
    --image-1: url('{images[1]}');
    --image-2: url('{images[2]}');
    --image-3: url('{images[3]}');
  "
>
  {#each columns as column}
    <div class="grid-column">
      {#each column as item}
        <div class="grid-item-wrapper">
          <svg class="border-svg" aria-hidden="true">
            <rect class="border-rect" />
          </svg>
          <div
            class="grid-item"
            style="height: {item.height}; animation-delay: {item.delay}; background-position: {item.pos};"
          ></div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .image-grid {
    --grid-scale: 2;
    font-size: calc(1rem * var(--grid-scale));
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min(100%, 22.5rem);
    gap: 0.5em;
  }

  .grid-column {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
  }

  .grid-item-wrapper {
    position: relative;
    border-radius: 0.5em;
    width: 100%;
  }

  .border-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
    z-index: 2;
  }

  .border-rect {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    x: 1px;
    y: 1px;
    rx: 0.4em;
    fill: none;
    stroke: #00fff1;
    stroke-width: 4;
    stroke-dasharray: 0;
    animation: dash-pulse 2s linear infinite;
    filter: drop-shadow(0 0 4px #00fff1);
  }

  @keyframes dash-pulse {
    0%   { stroke-dashoffset: 0; opacity: 1; }
    50%  { opacity: 0.4; }
    100% { stroke-dashoffset: -28; opacity: 1; }
  }

  .grid-item {
    position: relative;
    width: 100%;
    border-radius: calc(0.5em - 2px);
    background-repeat: no-repeat;
    background-size: 300% 300%;
    animation: bg-cycle 5s infinite ease-in-out;
  }

  @keyframes bg-cycle {
    0%,  30% { background-image: var(--image-1); }
    33%, 63% { background-image: var(--image-2); }
    66%, 96% { background-image: var(--image-3); }
    100%      { background-image: var(--image-1); }
  }

  @media (min-width: 900px) {
    .image-grid {
      width: 35rem;
    }
  }
</style>