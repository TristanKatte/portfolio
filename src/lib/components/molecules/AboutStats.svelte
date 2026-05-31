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
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid rgba(0, 206, 201, 0.25);
    border-radius: 0.75rem;
    overflow: hidden;
    width: 100%;
  }

  .about-stat {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    text-align: left;
    border-right: 1px solid rgba(0, 206, 201, 0.25);
    border-bottom: 1px solid rgba(0, 206, 201, 0.25);
  }

  .about-stat:nth-child(even) {
    border-right: none;
  }

  .about-stat:nth-last-child(-n+2) {
    border-bottom: none;
  }

  .about-stat-value {
    font-family: "Azonix", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #00fff1;
    line-height: 1;
  }

  .about-stat-label {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Space Grotesk", sans-serif;
  }
</style>
