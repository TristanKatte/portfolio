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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background: var(--header-bg);
    color: var(--text);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.1rem;
    border-radius: 1rem;
    border: 2px solid var(--border);
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
    flex: 1 1 auto;
    min-width: 0;
    transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  }

  .stat-value {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 800;
    color: var(--brand);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.75rem;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text);
  }

  @media (min-width: 600px) {
    .stats {
      flex-wrap: nowrap;
      align-items: flex-start;
      gap: 1rem;
    }
    .stat {
      padding: 1rem 1.5rem;
      border-radius: 1.5rem;
    }
    .stat-value {
      font-size: clamp(2rem, 3vw, 3rem);
    }
    .stat-label {
      font-size: 0.85rem;
    }
  }
</style>