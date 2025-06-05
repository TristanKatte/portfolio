<script>
  import { onMount } from 'svelte';
  import Home from '../components/Home.svelte';
  import About from '../components/About.svelte';
  import Projects from '../components/Projects.svelte';
  import Contact from '../components/Contact.svelte';

  onMount(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  });
</script>

<svelte:head>
  <title>Tristan Katte - Portfolio</title>
</svelte:head>

<main>
  <section id="home"><Home /></section>
  <section id="about"><About /></section>
  <section id="projects"><Projects /></section>
  <section id="contact"><Contact /></section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 2rem;
    background-color: var(--main-bg-color);
    color: var(--txt-color);
  }

  section {
    padding: 4rem 2rem;
    border-radius: 8px;
    background-color: var(--project-card-color);
  }

  h1, h2, h3 {
    color: var(--heading-color);
  }

  a {
    color: var(--btn-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
  main {
    padding: 1rem;
  }

  section {
    padding: 2rem 1rem;
  }
}
</style>
