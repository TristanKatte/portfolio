<script>


  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Dummy projecten (normaal fetch je ze via GitHub API)
  let projects = [
    {
      id: 1,
      name: "I Love Web Blog",
      description: "A nice project built with Svelte",
      url: "https://github.com/TristanKatte/I-Love-Web",
      image: "/images/visitekaartje.png"
    },
    {
      id: 2,
      name: "We Love Web Blog",
      description: "Another cool app",
      url: "https://github.com/username/another-project",
      image: "/images/visitekaartje.png"
    }
  ];

 
  let gsap;
  onMount(async () => {
    const gsapModule = await import('gsap');
    gsap = gsapModule.gsap;
    gsap.utils.toArray('.fade-in').forEach((el, i) => {
      gsap.from(el, { opacity: 0, y: 30, delay: i * 0.3, duration: 0.8 });
    });
  });
</script>


<main>
  <header class="fade-in">
    <h1>Tristan Katte</h1>
    <nav>
      <a href="#projects" style="color:#00c2cb; text-decoration:none; font-weight:500;">Projects</a>
    </nav>
  </header>

  <section class="hero fade-in">
    <h2>Frontend Developer & Designer</h2>
    <p>Creating beautiful, functional web apps with passion and precision.</p>
  </section>

  <section id="projects" class="projects">
    {#each projects as project (project.id)}
      <a class="project-card fade-in" href={project.url} target="_blank" rel="noopener noreferrer">
        <img class="project-image" src={project.image} alt={`Screenshot of ${project.name}`} />
        <div class="project-info">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </a>
    {/each}
  </section>
</main>

<style>
  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'Nunito', sans-serif;
    color: #eee;
    background-color: #121212;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  header h1 {
    font-family: 'Azonix', sans-serif;
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
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
    gap: 2rem;
  }

  .project-card {
    background: #222;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 12px rgba(0,194,203,0.5);
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .project-card:hover {
    transform: translateY(-8px);
  }

  .project-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .project-info {
    padding: 1rem;
  }

  .project-info h3 {
    margin: 0 0 0.5rem;
    color: #00c2cb;
    font-family: 'Azonix', sans-serif;
  }

  .project-info p {
    margin: 0;
    color: #ccc;
    font-size: 0.9rem;
  }

  a.project-link {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 480px) {
    .hero h2 {
      font-size: 2rem;
    }
  }
</style>