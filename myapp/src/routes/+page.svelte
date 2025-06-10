<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let duration = 300;
  // Dummy projecten (normaal fetch je ze via GitHub API)
  let projects = [
    {
      id: 1,
      name: "I Love Web Blog",
      description: "A nice project built with Svelte",
      url: "https://github.com/TristanKatte/I-Love-Web",
      image: "/images/visitekaartje.png",
    },
    {
      id: 2,
      name: "We Love Web Blog",
      description: "Another cool app",
      url: "https://github.com/username/another-project",
      image: "/images/visitekaartje.png",
    },
  ];

  let gsap;
  onMount(async () => {
    const gsapModule = await import("gsap");
    gsap = gsapModule.gsap;
    gsap.utils.toArray(".fade-in").forEach((el, i) => {
      gsap.from(el, { opacity: 0, y: 30, delay: i * 0.3, duration: 0.8 });
    });
  });

</script>

<main>
  <header>
    <h1>Tristan Katte</h1>
    <nav>
      <a
        href="#projects"
        style="color:#00c2cb; text-decoration:none; font-weight:500;"
        >Projects</a
      >
    </nav>
  </header>

  <section class="hero fade-in">
    <h2>Hi, I'm Tristan Katte, a Fontend Developer & Designer</h2>
    <p>Creating beautiful, functional web apps with passion and precision.</p>
  </section>

  <section id="projects" class="projects">
    {#each projects as project (project.id)}
      <a
        class="project-card fade-in"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="project-image"
          src={project.image}
          alt={`Screenshot of ${project.name}`}
        />
        <div class="project-info">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </a>
    {/each}
  </section>

  <section class="about">
    <h2 class="fade-in">About Me</h2>
  </section>

    <section class="featured-projects">
    <h2 class="fade-in">Featured projects</h2>
  </section>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: "Nunito", sans-serif;
    color: #eee;
    background-color: #121212;
    width: 100vw;
    overflow-y: scroll;
    height: 100vh;
    scroll-snap-type: y mandatory;

  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  header h1 {
    font-family: "Azonix", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00c2cb;
  }

  .hero {
    margin-bottom: 3rem;
  }

  .hero h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .hero p {
    font-size: 1.25rem;
    color: #bbb;
  }

  .projects {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    scroll-margin-top: 5rem; /* voor smooth scroll anchor navigatie */
  }

  .project-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .project-info {
    padding: 1.25rem;
    color: #333;
  }

  .project-info h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
  }

  .project-info p {
    margin: 0;
    font-size: 0.95rem;
    color: #666;
  }

  a.project-link {
    text-decoration: none;
    color: inherit;
  }

  .about {
    background-color: maroon;
  }

  .featured-projects {
    background-color: gold;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
    width: 100%;
  }

  @media (max-width: 480px) {
    .hero h2 {
      font-size: 2rem;
    }
  }
</style>
