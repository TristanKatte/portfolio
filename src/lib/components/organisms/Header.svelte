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
    height: 4rem;
    background: rgba(12, 16, 22, 0.8);
    backdrop-filter: blur(5px);
    margin: 0 auto;
    border-bottom: 1px solid var(--border);
    transition: background 0.3s ease;
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;
  }
  

  @media (min-width: 480px) {
    .site-header {
      height: 4.5rem;
      padding: 0 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .site-header {
      height: 5rem;
      padding: 0 2.5rem;
    }
  }

  

  .container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }

  .logo-link {
    display: flex;
    align-items: center;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .logo-link:hover {
    text-shadow: 0 0 10px var(--highlight);
    transform: scale(1.05);
  }

  .logo-image {
    height: 2rem;
    width: auto;
    display: block;
  }

  @media (min-width: 480px) {
    .logo-image { height: 2.25rem; }
  }

  @media (min-width: 768px) {
    .logo-image { height: 2.5rem; }
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
