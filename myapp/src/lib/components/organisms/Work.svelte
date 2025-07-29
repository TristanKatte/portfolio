<script>
  import ScrollIndicator from "../atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";

  const projects = [
    {
      slug: "we-love-web",
      title: "✨ We Love Web blog",
      description: "Een technische blog met focus op HTML, CSS & UX.",
      image: "/images/we-love-web.png",
      size: "large",
    },
    {
      slug: "bieb-in-bloei",
      title: "🧠 Bieb in Bloei",
      description: "Concept voor een levendige bibliotheekervaring.",
      image: "/images/bieb-in-bloei.jpg",
      size: "small",
    },
    {
      slug: "Redpers",
      title: "🗞️ Redpers",
      description: "Een nieuwswebsite voor Redpers.",
      image: "/images/vogelpers.png",
      size: "large",
    },
    {
      slug: "Informaat",
      title: "🧠 Informaat",
      description: "Een desktop-first website voor Informaat.",
      image: "/images/informaat.png",
      size: "small",
    },
    {
      slug: "B-rain",
      title: "🧠 B-rain",
      description: "Een website voor B-rain.",
      image: "/images/b-rain.png",
      size: "small",
    },
    {
      slug: "squad-page",
      title: "🧠 Squad page",
      description: "Een squadpage voor Tribe for life.",
      image: "/images/squadpage.png",
      size: "small",
    },
    {
      slug: "visitekaartje",
      title: "🧠 Visitekaartje",
      description: "Een digitale business card voor Tribe for life.",
      image: "/images/visitekaartje.png",
      size: "small",
    },
        {
      slug: "I Love Web",
      title: "🧠 I Love Web",
      description: "A digital garden.",
      image: "/images/digital-garden.png",
      size: "small",
    },

  ];

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".project", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".projects",
        start: "top 85%",
      },
    });
  });
</script>

<section id="work" class="work" aria-labelledby="work-heading">
  <div class="work-content">
    <h2 id="work-heading">Mijn Werk</h2>
<div class="projects">
  {#each projects as project}
    <a class="project {project.size}" href={`/projects/${project.slug}`}>
      <img src={project.image} alt={project.title} />
      <div class="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  {/each}
</div>
  </div>
  <ScrollIndicator href="#contact" ariaLabel="Scroll to the contact section" />
</section>

<style>
  .work {
    min-height: 100dvh;
    padding: var(--size-7);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   
  }

  #work-heading {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--heading-color);
  }

  .projects {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    margin-top: 2rem;
    width: 100%;
    max-width: 1000px;
  }

  .project {
  position: relative;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  background: #111;
  text-decoration: none;
  transition: transform 0.3s ease;
}

  .project:hover {
    transform: scale(1.03);
  }

  /* Grid sizing for bento effect */
  .project.small {
    grid-column: span 1;
    grid-row: span 1;
  }

  .project.medium {
    grid-column: span 2;
    grid-row: span 1;
  }

  .project.large {
    grid-column: span 2;
    grid-row: span 2;
  }

.project img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.project:hover img {
  opacity: 0.5;
}

.project-info {
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.5rem;
}

.project-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

.project-info p {
  font-size: 0.95rem;
  opacity: 0.85;
}
</style>
