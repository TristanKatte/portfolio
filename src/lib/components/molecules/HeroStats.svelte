<script>
  import { onMount } from "svelte";

  export let stats = [];

  onMount(async () => {
    const gsap = (await import("gsap")).default;

    document.querySelectorAll(".stat-value").forEach((el) => {
      const target = +el.dataset.value;
      gsap.to(el, {
        innerText: target,
        duration: 1.2,
        delay: 1.5,
        snap: { innerText: 1 },
        ease: "power1.out",
      });
    });
  });
</script>

<section class="stats">
  {#each stats as stat}
    <div class="stat">
      <span class="stat-value" data-value={stat.value}>0</span>
      <span class="stat-label">{stat.label}</span>
    </div>
  {/each}
</section>

<style>
  .stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background-color: var(--surface);
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    border: 2px solid var(--border);
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
  }

  .stat-value {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 800;
    color: var(--brand);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.85rem;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text);
  }

  @media (min-width: 600px) {
    .stats {
      flex-direction: row;
      align-items: flex-start;
    }
  }
</style>