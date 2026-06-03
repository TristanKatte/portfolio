<script>
  import ScrollIndicator from "../atoms/ScrollIndicator.svelte";
  import { onMount } from "svelte";

  const projects = [
    {
      number: "01",
      slug: "we-love-web",
      title: "WE LOVE WEB",
      description: "A blog made with SvelteKit, Markdown and MDsveX",
      image: "/images/we-love-web.png",
      liveUrl: "https://we-love-web-blog-one.vercel.app",
      tags: ["SVELTEKIT", "MARKDOWN", "MDSVEX"],
    },
    {
      number: "02",
      slug: "B-rain",
      title: "B-RAIN",
      description: "A website made for B-rain, an actual client",
      image: "/images/b-rain.png",
      liveUrl: "https://tristankatte.github.io/Brain-website/",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      number: "03",
      slug: "bieb-in-bloei",
      title: "BIEB IN BLOEI",
      description: "A concept for a green Library, where people learn about nature",
      image: "/images/bieb-in-bloei.png",
      liveUrl: "https://biebinbloei.nl",
      tags: ["SVELTEKIT", "WPAPI", "CSS"],
    },
    {
      number: "04",
      slug: "Redpers",
      title: "REDPERS",
      description: "A newswebsite built in a group project at FDND",
      image: "/images/redpers.png",
      liveUrl: "https://redpers.agency.fdnd.nl",
      tags: ["SVELTEKIT", "WPAPI"],
    },
    {
      number: "05",
      slug: "squadpage",
      title: "SQUADPAGE",
      description: "A fun squad page built in my 1st sprint at FDND",
      image: "/images/squadpage.png",
      liveUrl: "https://ebok1.github.io/your-tribe-squad-page/",
      tags: ["HTML", "CSS"],
    },
    {
      number: "06",
      slug: "visitekaartje",
      title: "DIGITAL BUSINESS CARD",
      description: "A digital business card introducing my skills and personality",
      image: "/images/visitekaartje.png",
      liveUrl: "https://your-tribe-for-life-profile-card-liart.vercel.app/",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      number: "07",
      slug: "I-Love-Web",
      title: "I LOVE WEB",
      description: "A digital garden full of web development notes",
      image: "/images/digital-garden.png",
      liveUrl: "https://i-love-web-amber.vercel.app/",
      tags: ["SVELTEKIT", "MARKDOWN"],
    },
  ];

  let previewImage = projects[0].image;
  let previewEl;
  let headingEl;
  let gsapInstance;

  const chars = "01アイウエOカキクケCO!@#$%";

  onMount(async () => {
    gsapInstance = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).default;
    gsapInstance.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

    gsapInstance.set(previewEl, { opacity: 0, scale: 0.88, xPercent: -50, yPercent: -50 });

    // Scramble heading on scroll enter
    ScrollTrigger.create({
      trigger: headingEl,
      start: "top 80%",
      once: true,
      onEnter() {
        const [plain, accent] = headingEl.querySelectorAll("span");
        gsapInstance.to(plain, {
          duration: 1.5,
          scrambleText: { text: "PROJECTS", chars, revealDelay: 0.2, speed: 0.5 },
          ease: "none",
        });
        gsapInstance.to(accent, {
          duration: 1.5,
          delay: 0.4,
          scrambleText: { text: "& CASE STUDIES", chars, revealDelay: 0.2, speed: 0.5 },
          ease: "none",
        });
      },
    });

    // Row entrance animations
    ScrollTrigger.batch(".project-row", {
      start: "top 92%",
      onEnter: (batch) => {
        gsapInstance.fromTo(
          batch,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", stagger: 0.08 }
        );
      },
      onLeaveBack: (batch) => {
        gsapInstance.to(batch, { opacity: 0, y: 28, duration: 0.35, ease: "power2.in" });
      },
    });
  });

  function handleMouseEnter(project, e) {
    previewImage = project.image;
    if (gsapInstance && previewEl) {
      gsapInstance.set(previewEl, { x: e.clientX + 16, y: e.clientY + 16 });
      gsapInstance.to(previewEl, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  }

  function handleMouseLeave() {
    if (gsapInstance && previewEl) {
      gsapInstance.to(previewEl, { opacity: 0, scale: 0.88, duration: 0.22, ease: "power2.in" });
    }
  }

  function handleMouseMove(e) {
    if (gsapInstance && previewEl) {
      gsapInstance.to(previewEl, {
        x: e.clientX + 16,
        y: e.clientY + 16,
        duration: 0.12,
        ease: "power1.out",
      });
    }
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section id="work" class="work" aria-labelledby="work-heading">
  <div class="work-content">

    <div class="work-header">
      <span class="work-label">02 / Selected Work</span>
      <h2 id="work-heading" class="work-heading" bind:this={headingEl}>
        <span>PROJECTS</span><br />
        <span class="work-heading-accent">& CASE STUDIES</span>
      </h2>
    </div>

    <ul class="projects-list">
      {#each projects as project}
        <li class="project-row">
          <span class="project-number">{project.number}</span>
          <div
            class="project-text"
            role="group"
            on:mouseenter={(e) => handleMouseEnter(project, e)}
            on:mouseleave={handleMouseLeave}
          >
            <h3 class="project-title">{project.title}</h3>
            <p class="project-desc">{project.description}</p>
          </div>
          <div class="project-tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          <div class="project-actions">
            <a class="project-view" href={`/projects/${project.slug}`}>
              DETAILS <span class="arrow">↗</span>
            </a>
            <a class="project-view" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              VIEW <span class="arrow">↗</span>
            </a>
          </div>
        </li>
      {/each}
    </ul>

  </div>

  <div class="preview-image" bind:this={previewEl} aria-hidden="true">
    <img src={previewImage} alt="" />
  </div>

  <div class="scroll-indicator-wrap">
    <ScrollIndicator ariaLabel="Scroll to contact section" />
  </div>
</section>

<style>
  .work {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem 7rem;
    scroll-snap-align: start;
  }

  .scroll-indicator-wrap {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
  }

  .work::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--main-bg-color);
    z-index: -1;
    pointer-events: none;
  }

  .work-content {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    overflow: clip;
  }

  /* ── Header ── */
  .work-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .work-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #00fff1;
    font-family: "Azonix", monospace;
  }

  .work-heading {
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-family: "Neofolia", sans-serif;
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -1px;
    color: var(--text);
    margin: 0;
  }

  .work-heading-accent {
    background: linear-gradient(90deg, #00fff1, #0984e3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ── List ── */
  .projects-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid var(--border);
  }

  .project-row {
    border-bottom: 1px solid var(--border);
    max-inline-size: unset;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
    cursor: default;
  }

  .project-row:hover .project-title {
    background: linear-gradient(90deg, #00fff1, #0984e3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }


  .project-number {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.35);
    font-family: "Azonix", monospace;
    min-width: 2rem;
    flex-shrink: 0;
  }

  .project-text {
    flex: 1;
    min-width: 0;
  }

  .project-title {
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.5px;
    font-family: "Space Grotesk", sans-serif;
    margin: 0 0 0.2rem;
  }

  .project-desc {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    margin: 0;
    letter-spacing: 0.02em;
    font-family: "Titillium Web", sans-serif;
  }

  .project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex-shrink: 0;
  }

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    font-family: "Azonix", monospace;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.65rem;
    border-radius: 4px;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.3);
  }

  .project-actions {
    display: flex;
    gap: 1.5rem;
    flex-shrink: 0;
    align-items: center;
  }

  .project-view {
    font-size: 0.75rem;
    font-family: "Azonix", monospace;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.2s ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .project-view:hover {
    color: #00fff1;
  }

  .arrow {
    font-size: 1rem;
  }

  /* ── Cursor preview ── */
  .preview-image {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 100;
    width: 280px;
    aspect-ratio: 16 / 10;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    will-change: transform, opacity;
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    display: block;
  }

  @media (max-width: 600px) {
    .project-tags { display: none; }
    .project-row { gap: 1rem; }
  }

  @media (max-width: 400px) {
    .work-content { padding: 1rem; }
    .project-row { gap: 0.5rem; padding: 1.25rem 0; }
    .project-title { font-size: 1.1rem; }
    .project-number { display: none; }
    .project-actions { gap: 0.75rem; }
    .project-view { font-size: 0.6rem; letter-spacing: 1px; }
  }
</style>
