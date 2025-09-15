<script>
  import ScrollIndicator from "../atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";

  const projects = [
    {
      slug: "we-love-web",
      title: "✨ We Love Web blog",
      description: "A blog about guest speakers, insights at FDND.",
      image: "/images/we-love-web.png",
      LiveUrl: "https://we-love-web-blog-one.vercel.app",
      size: "large",
    },
    {
      slug: "bieb-in-bloei",
      title: "🧠 Bieb in Bloei",
      description: "A concept for a green Library, where people can learn about green.",
      image: "/images/bieb-in-bloei.png",
      LiveUrl: "https://biebinbloei.nl",
      size: "small",
    },
    {
      slug: "Redpers",
      title: "🗞️ Redpers",
      description: "A newswebsite that i made in a group project in my 3rd semester at the study Frontend Design & Development. Made with Sveltekit, WPAPI Redpers.",
      image: "/images/redpers.png",
      LiveUrl: "https://redpers.agency.fdnd.nl",
      size: "large",
    },
    {
      slug: "B-rain",
      title: "🧠 B-rain",
      description: "A website made voor B-rain for an actual client.",
      image: "/images/b-rain.png",
      LiveUrl: "https://tristankatte.github.io/Brain-website/",
      size: "small",
    },
    {
      slug: "squadpage",
      title: "🧠 Squad page",
      description: "A fun squadpage I made in my 1st sprint at FDND.",
      image: "/images/squadpage.png",
      LiveUrl: "https://ebok1.github.io/your-tribe-squad-page/",
      size: "small",
    },
    {
      slug: "visitekaartje",
      title: "🧠 Digital businesscard",
      description: "A digital businesscard, where I introduce myself and what my skills are.",
      image: "/images/visitekaartje.png",
      LiveUrl: "https://your-tribe-for-life-profile-card-liart.vercel.app/",
      size: "small",
    },
    {
      slug: "I-Love-Web",
      title: "🧠 I Love Web",
      description: "A digital garden.",
      image: "/images/digital-garden.png",
      LiveUrl: "https://i-love-web-amber.vercel.app/",
      size: "medium",
    },
  ];

onMount(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".project").forEach((project) => {
    gsap.fromTo(
      project,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: project,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
</script>

<section id="work" class="work" aria-labelledby="work-heading">
  <div class="work-content">
    <h2 id="work-heading">My best work</h2>
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

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--brand);
  }

  /* Mobile-first: single column stacked */
  .projects {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    margin-top: 2rem;
    width: 100%;
    max-width: 1000px;
  }

  /* Small tablets and up: 2 columns */
  @media (min-width: 600px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 200px;
      grid-auto-flow: dense;
    }
  }

  /* Larger screens: your original grid with bento effect */
  @media (min-width: 900px) {
    .projects {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: 200px;
      grid-auto-flow: dense;
    }
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
    opacity: 0;
    transform: translateY(50px);
  }

  .project:hover {
    transform: scale(1.03);
  }

  /* Grid sizing for bento effect on larger screens */
  @media (min-width: 900px) {
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
