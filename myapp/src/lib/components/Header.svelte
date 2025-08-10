<script>
  import Logo from '$lib/assets/logo_groen.png';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header>
  <img src={Logo} alt="Personal logo" class="logo" />

  <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
    &#9776;
  </button>

  <nav class:open={isMenuOpen}>
    <ul on:click={closeMenu}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: transparent;
    position: relative;
    z-index: 10;
  }

  .logo {
    height: 150px;
  }

  .hamburger {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Orbitron Variable', sans-serif;
    padding: 10px;
    position: relative;
  }

  nav a::before,
  nav a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0%;
    transition: all 0.5s ease;
    border: 2px solid transparent;
  }

  nav a::before {
    top: 0;
    left: 0;
    border-top-color: var(--btn-color);
    border-left-color: var(--btn-color);
  }

  nav a::after {
    bottom: 0;
    right: 0;
    border-bottom-color: var(--btn-color);
    border-right-color: var(--btn-color);
  }

  nav a:hover::before,
  nav a:hover::after {
    width: 100%;
    height: 100%;
  }

  /* --- Mobile styles --- */
  @media (max-width: 48em) {
    .logo {
      height: 100px;
    }

    .hamburger {
      display: block;
    }

    nav {
      position: absolute;
      top: 100%;
      right: 0;
      background: rgba(0, 0, 0, 0.9);
      display: none;
      width: 250px;
      flex-direction: column;
      padding: 1rem;
    }

    nav.open {
      display: flex;
    }

    nav ul {
      flex-direction: column;
      gap: 1rem;
    }

    nav a {
      display: block;
      padding: 10px;
    }
  }
</style>