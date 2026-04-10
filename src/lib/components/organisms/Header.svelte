<script>
  import SiteNav from "$lib/components/molecules/SiteNav.svelte";

  let isOpen = false;
</script>

<header class="site-header">
  <div class="container">
    <a href="/" class="logo-link">
      <img src="/images/logo_groen.png" alt="Logo" class="logo-image" />
    </a>
    <SiteNav {isOpen} />

    <button
      class="nav-toggle"
      aria-label={isOpen ? "Sluit menu" : "Open menu"}
      aria-expanded={isOpen}
      on:click={() => (isOpen = !isOpen)}
    >
      {#if isOpen}✕{:else}☰{/if}
    </button>
  </div>
</header>

<style>
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    background: rgba(12, 16, 22, 0.8);
    backdrop-filter: blur(5px);
    margin: 0 auto;
    border-bottom: 1px solid var(--border);
    transition: background 0.3s ease;
    gap: 1rem;
    width: 100%;
    padding: 4rem 3rem;
  }

  

  .container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  .logo-link {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .logo-link:hover {
    text-shadow: 0 0 10px var(--highlight);
    transform: scale(1.05);
  }

  .logo-image {
    max-width: 120px;
    height: auto;
    display: block;
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    font-size: 1.5rem;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    cursor: pointer;
    z-index: 60;
    transition: border-color 0.2s ease;
  }

  .nav-toggle:hover {
    border-color: var(--highlight);
  }

  /* Hide toggle on desktop */
  @media (min-width: 768px) {
    .nav-toggle {
      display: none;
    }
  }
</style>
