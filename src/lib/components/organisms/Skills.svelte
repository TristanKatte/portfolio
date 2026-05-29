<script>
  import { onMount } from "svelte";
  import SkillCategory from "../molecules/SkillCategory.svelte";

  const skills = {
    Frontend: [
      { name: "HTML",       image: "/images/html.svg",       percentage: 95 },
      { name: "CSS",        image: "/images/css.svg",        percentage: 90 },
      { name: "JavaScript", image: "/images/javascript.svg", percentage: 80 },
      { name: "Svelte",     image: "/images/svelte.svg",     percentage: 85 },
      { name: "Tailwind",   image: "/images/tailwind.svg",   percentage: 75 },
      { name: "Bootstrap",  image: "/images/bootstrap.svg",  percentage: 70 },
      { name: "GSAP",       image: "/images/greensock.svg",  percentage: 65 },
      { name: "Next.js",    image: "/images/next-js.svg",    percentage: 60 },
      { name: "React.js",   image: "/images/reactjs.svg",    percentage: 60 },
    ],
    Backend: [
      { name: "Express.js", image: "/images/express-js.svg", percentage: 55 },
      { name: "Node.js",    image: "/images/nodejs.svg",     percentage: 55 },
    ],
    Design: [
      { name: "Figma",             image: "/images/figma.svg",        percentage: 85 },
      { name: "Adobe Illustrator", image: "/images/illustrator.svg",  percentage: 75 },
      { name: "Photoshop",         image: "/images/photoshop.svg",    percentage: 70 },
    ],
    Tools: [
      { name: "Git",     image: "/images/github.svg", percentage: 75 },
      { name: "VS Code", image: "/images/vscode.svg", percentage: 90 },
      { name: "NPM",     image: "/images/npm.svg",    percentage: 80 },
    ],
  };

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".category-block").forEach((block) => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
        },
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });
</script>

<section id="skills" class="skills-section">
  <div class="skills-content">
    <div class="skills-header">
      <span class="skills-label">02 / What I Know</span>
      <h2 class="skills-heading">
        What I bring to<br />
        <span class="skills-heading-accent">the table.</span>
      </h2>
    </div>

    <div class="skills-bento">
      {#each Object.entries(skills) as [category, items]}
        <SkillCategory {category} {items} />
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-section {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem;
    color: var(--text);
  }

  .skills-section::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--main-bg-color);
    z-index: -1;
    pointer-events: none;
  }

  .skills-content {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .skills-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skills-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #00fff1;
    font-family: "Azonix", monospace;
  }

  .skills-heading {
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-family: "Neofolia", sans-serif;
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -1px;
    color: var(--text);
    margin: 0;
  }

  .skills-heading-accent {
    background: linear-gradient(90deg, #00fff1, #0984e3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Mobile-first: single column */
  .skills-bento {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  /* Tablet: 2 equal columns */
  @media (min-width: 640px) {
    .skills-bento {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Desktop: 3-column bento
     Row 1: Frontend (span 2) | Backend
     Row 2: Design             | Tools (span 2) */
  @media (min-width: 1024px) {
    .skills-bento {
      grid-template-columns: repeat(3, 1fr);
    }

    .skills-bento :global(.category-block:nth-child(1)) {
      grid-column: span 2;
    }

    .skills-bento :global(.category-block:nth-child(4)) {
      grid-column: span 2;
    }
  }
</style>
