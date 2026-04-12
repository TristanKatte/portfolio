<script>
  export let stats = [];
</script>

<div class="about-stats">
  {#each stats as stat}
    <div class="about-stat">
      <span class="about-stat-value">{stat.value}</span>
      <span class="about-stat-label">{stat.label}</span>
    </div>
  {/each}
</div>

<style>
  .about-stats {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .about-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 206, 201, 0.15);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    text-align: center;
    min-width: 100px;
    transition: border-color 0.3s ease;
  }

  .about-stat:hover {
    border-color: rgba(0, 206, 201, 0.4);
  }

  .about-stat-value {
    font-family: "Azonix", sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #00fff1;
    line-height: 1;
    text-shadow: 0 0 12px rgba(0, 255, 241, 0.4);
  }

  .about-stat-label {
    font-size: 0.7rem;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text);
  }

  @media (max-width: 22.5rem) {
    .about-stats {
      gap: 1rem;
      justify-content: center;
    }

    .about-stat {
      padding: 0.75rem 1rem;
      min-width: 180px;
    }

    .about-stat-value {
      font-size: 1.5rem;
    }
  }
</style>