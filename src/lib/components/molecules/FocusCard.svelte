<script>
  export let areas = [];
</script>

<div class="focus-card">
  <span class="focus-card-label">Focus Areas</span>
  <ul class="focus-list">
    {#each areas as area}
      <li class="focus-item">
        <span class="focus-dot"></span>
        {area}
      </li>
    {/each}
  </ul>
</div>

<style>
  .focus-card {
    width: 100%;
    background: color-mix(in srgb, var(--surface) 35%, transparent);
    border: 1px solid color-mix(in srgb, var(--border) 35%, transparent);
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .focus-card-label {
    font-family: "Azonix", monospace;
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #00fff1;
    opacity: 0.7;
  }

  .focus-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .focus-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: var(--text);
    font-family: "Titillium Web", sans-serif;
  }

  .focus-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00fff1;
    box-shadow: 0 0 6px #00fff1;
    flex-shrink: 0;
  }
</style>