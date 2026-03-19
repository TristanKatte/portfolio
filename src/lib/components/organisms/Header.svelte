<script>
  import SiteNav from "$lib/components/molecules/SiteNav.svelte";
</script>

<header class="site-header">
  <div class="container">
    <a href="/" class="logo-link">
      <img src="/images/logo_groen.png" alt="Logo" class="logo-image" />
    </a>
    <SiteNav />
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
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 1rem;
    gap: 1rem;
    width: 100%;
    padding: 1rem 2rem;
  }

  .container {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30rem;
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
</style>
