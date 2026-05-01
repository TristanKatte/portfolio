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

    gsap.utils.toArray(".category-block").forEach((block, i) => {
      const fromX = i % 2 === 0 ? -100 : 100;

      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
        },
        opacity: 0,
        x: fromX,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.from(block.querySelectorAll(".skill-card"), {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });
    });
  });
</script>

<section id="skills" class="skills-section">
  <div class="skills-header">
    <span class="skills-label">02 / What I Know</span>
    <h2 class="skills-heading">
      What I bring to<br />
      <span class="skills-heading-accent">the table.</span>
    </h2>
  </div>

  <div class="skills-content">
    {#each Object.entries(skills) as [category, items]}
      <SkillCategory {category} {items} />
    {/each}
  </div>
</section>

<style>
  .skills-section {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem;
    color: var(--text);
    overflow: hidden;
  }

  .skills-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    z-index: 1;
  }

  .skills-header {
    max-width: 900px;
    margin: 0 auto 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 1;
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
</style>
