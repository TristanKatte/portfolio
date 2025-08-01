<script>
  let isOpen = false;
</script>

<header class="site-header">
  <div class="container">
    <a href="/" class="logo">Tristan</a>

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
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    padding: 1rem 2rem;
    background: var(--bg, #000);
    color: var(--fg, white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--fg, white);
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
    background: var(--bg, #000);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .nav ul.open {
    display: flex;
  }

  .nav a {
    text-decoration: none;
    color: var(--fg, white);
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .nav a:hover {
    color: var(--brand, #64ffda);
  }

  .nav-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--fg, white);
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
    }

    .nav-toggle {
      display: none;
    }
  }
</style>
