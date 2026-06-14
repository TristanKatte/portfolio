<script>
  export let item;
</script>

<div class="timeline-item">
  <div class="item-meta">
    <span class="dot" style="background: {item.color}; box-shadow: 0 0 6px {item.color}66"></span>
    <span class="date">{item.date}</span>
  </div>
  <h3 class="role">{item.role}</h3>
  {#if item.text}
    <p class="description">{item.text}</p>
  {/if}
  <hr class="separator" />
</div>

<style>
  .timeline-item {
    padding: 1.25rem 0;
  }

  .item-meta {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 0.6rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .date {
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted-text);
    font-family: "Azonix", monospace;
  }

  .role {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text, #fff);
    margin: 0 0 0.4rem 0;
    font-family: "Space Grotesk", sans-serif;
    line-height: 1.5;
  }

  .description {
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--muted-text);
    margin: 0;
    line-height: 1.6;
  }

  .separator {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 1.25rem;
    margin-bottom: 0;
  }
</style>
