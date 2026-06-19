<script>
  import SiteNav from "$lib/components/molecules/SiteNav.svelte";
  import { onMount } from "svelte";

  let isOpen = false;
  let theme = "dark";

  const storageKey = "theme";

  function applyTheme(nextTheme) {
    if (typeof document === "undefined") return;

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }

  function setTheme(nextTheme) {
    theme = nextTheme;
    applyTheme(nextTheme);

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Ignore storage failures in private mode or restricted environments.
    }
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  onMount(() => {
    let storedTheme = null;

    try {
      storedTheme = localStorage.getItem(storageKey);
    } catch {
      storedTheme = null;
    }

    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme ?? (prefersLight ? "light" : "dark");

    setTheme(initialTheme);
  });
</script>

<header class="site-header">
  <div class="container">
    <a href="/" class="logo-link">
      <picture>
        <source srcset="/images/logo_groen.webp" type="image/webp" />
        <img src="/images/logo_groen.png" alt="Logo" class="logo-image" width="359" height="317" />
      </picture>
    </a>
    <div class="actions">
      <button
        class="theme-toggle"
        type="button"
        aria-label={theme === "dark" ? "Schakel naar licht thema" : "Schakel naar donker thema"}
        aria-pressed={theme === "light"}
        on:click={toggleTheme}
      >
        {#if theme === "dark"}
          <span class="theme-toggle__icon" aria-hidden="true">☀</span>
          <span>Light mode</span>
        {:else}
          <span class="theme-toggle__icon" aria-hidden="true">☾</span>
          <span>Dark mode</span>
        {/if}
      </button>

      <SiteNav {isOpen} />

      <button
        class="nav-toggle"
        type="button"
        aria-label={isOpen ? "Sluit menu" : "Open menu"}
        aria-expanded={isOpen}
        on:click={() => (isOpen = !isOpen)}
      >
        {#if isOpen}✕{:else}☰{/if}
      </button>
    </div>
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
    background: var(--header-bg);
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

  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
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

  .logo-link:focus-visible {
    outline: 2px solid var(--highlight);
    outline-offset: 4px;
    border-radius: 4px;
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

  .nav-toggle:focus-visible {
    outline: 2px solid var(--highlight);
    outline-offset: 2px;
  }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    min-height: 2.75rem;
    padding: 0.5rem 0.9rem;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--text);
    cursor: pointer;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .theme-toggle__icon {
    font-size: 1rem;
    line-height: 1;
  }

  .theme-toggle:hover {
    border-color: var(--highlight);
    transform: translateY(-1px);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--highlight);
    outline-offset: 2px;
  }

  /* Hide toggle on desktop */
  @media (min-width: 768px) {
    .nav-toggle {
      display: none;
    }
  }
</style>
