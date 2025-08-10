<script>
  let isOpen = false;
</script>

<header class="site-header">
  <div class="container">
    <a href="/" class="logo-link">
      <img src="/images/logo_groen.png" alt="Logo" class="logo-image" />
    </a>

    <nav class="nav" aria-label="Hoofdnavigatie">
      <ul class:open={isOpen}>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        class="nav-toggle"
        aria-label="Menu"
        on:click={() => (isOpen = !isOpen)}
      >
        ☰
      </button>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    padding: 1rem 2rem;
    background-color: var(--bg);
    color: var(--text);
    box-shadow: 0 4px 12px rgba(0, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .nav {
    position: relative;
  }

  .nav ul {
    display: none;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--surface);
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
    border: 1px solid var(--border);
    list-style-type: none;
  }

  .nav ul.open {
    display: flex;
  }

  .nav a {
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;
    font-family: "Orbitron Variable", sans-serif;
  }

  .nav a:hover {
    color: var(--highlight);
    text-shadow: 0 0 6px var(--highlight);
  }

  .nav-toggle {
    background: var(--surface);
    border: none;
    font-size: 1.75rem;
    padding: var(--size-5);
    color: var(--text);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .nav ul {
      display: flex !important;
      position: static;
      flex-direction: row;
      gap: 2rem;
      background: none;
      padding: 0;
      box-shadow: none;
      border: none;
    }

    .nav-toggle {
      display: none;
    }
  }
</style>
