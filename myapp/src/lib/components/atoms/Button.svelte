<script>
  export let label = '';
  export let href = '#';
  export let download = false;
  export let target = null;
</script>

<a
  href={href}
  class="cta-button"
  target={target}
  rel={target === '_blank' ? 'noopener noreferrer' : null}
  {...(download ? { download: '' } : {})}
>
  {label}
</a>


<style>
  .cta-button {
    position: relative;
    display: inline-block;
    padding: 0.75rem 2.5rem;
    max-width: 320px;
    width: 100%;
    background: transparent;
    border-radius: 0 1.5rem 0 1.5rem;
    border: 2px solid var(--brand);
    color: var(--text);
    font-family: 'Orbitron Variable', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: 
      background-color 250ms ease,
      color 250ms ease,
      box-shadow 400ms ease;
    outline-offset: 0;
  }

  .cta-button:hover,
  .cta-button:focus-visible {
    background-color: var(--brand);
    color: var(--surface);
    box-shadow:
      0 0 8px var(--highlight),
      0 0 12px var(--highlight),
      0 0 24px var(--brand);
    outline: none;
  }

  .cta-button:active {
    transform: scale(0.95);
  }

  /* Optional: subtle glowing border animation on hover */
  @keyframes glowPulse {
    0%, 100% {
      box-shadow:
        0 0 6px var(--highlight),
        0 0 10px var(--highlight),
        0 0 20px var(--brand);
    }
    50% {
      box-shadow:
        0 0 12px var(--highlight),
        0 0 20px var(--highlight),
        0 0 36px var(--brand);
    }
  }

  .cta-button:hover {
    animation: glowPulse 2.5s infinite alternate;
  }
</style>