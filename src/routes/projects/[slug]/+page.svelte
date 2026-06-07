<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Button from "../../../lib/components/atoms/Button.svelte";

  const projectSlugs = [
    "we-love-web",
    "B-rain",
    "bieb-in-bloei",
    "Redpers",
    "squadpage",
    "visitekaartje",
    "I-Love-Web",
    "De-Koperen-Kat",
  ];

  const projectData = {
    "bieb-in-bloei": {
      title: "Bieb in Bloei",
      label: "Case Study",
      tagline: "Integrating weather animations, mascots & eco-design into a live library platform.",
      tags: ["SVELTEKIT", "SCSS", "GSAP"],
      image: "/images/bieb-in-bloei.png",
      LiveUrl: "https://biebinbloei.nl",
      year: "2024",
      duration: "8 weeks",
      role: "Front-end Developer",
      stack: "SvelteKit · SCSS · GSAP",
      summary: "Commissioned to optimise and enhance the live library-in-bloei website, our team unified concepts developed by previous CMD minor students — real-time weather animations, a seasonal theme, and the beloved mascot Harry — into a single, accessible, production-ready experience.",
      challenge: "Previous iterations of the site each explored different ideas in isolation: a weather API integration, seasonal colour themes, and a mascot character named Harry. The challenge was to merge these experiments into one cohesive product without losing the charm of each concept, while meeting accessibility and performance requirements for a live client site.",
      solution: "We adopted a component-based architecture in SvelteKit, isolating weather logic into a dedicated service consuming the real-time OpenWeather API. GSAP powered the mascot animations and seasonal transitions. Accessibility was woven into the workflow from day one — not bolted on at the end — and we ran continuous Lighthouse checks throughout development.",
      images: ["/images/bieb-in-bloei.png"],
      timeline: [
        { date: "Week 1–2", role: "Onboarding & Code Audit", text: "Reviewed prior student codebases, identified reusable patterns and areas of technical debt.", color: "#00fff1" },
        { date: "Week 3–4", role: "Weather Integration", text: "Built real-time weather animations driven by the OpenWeather API with smooth GSAP transitions.", color: "#0984e3" },
        { date: "Week 5–6", role: "Mascot & Seasonal Theme", text: "Animated Harry the mascot using GSAP; implemented conditional seasonal colour schemes.", color: "#00fff1" },
        { date: "Week 7–8", role: "Polish & Handover", text: "Accessibility audit, performance tuning, documentation, and final client handover.", color: "#0984e3" },
      ],
      reflection: "Inheriting someone else's codebase and building upon it respectfully was a new challenge for me. It sharpened my ability to read unfamiliar code quickly and communicate trade-offs clearly. If I were to do it again, I'd invest more time upfront writing documentation so the next team has an easier start.",
    },
    Redpers: {
      title: "Redpers",
      label: "Group Project",
      tagline: "A modern, responsive news platform for independent Dutch journalism.",
      tags: ["SVELTEKIT", "WPAPI", "CSS GRID"],
      image: "/images/redpers.png",
      LiveUrl: "https://redpers.agency.fdnd.nl",
      year: "2023",
      duration: "6 weeks",
      role: "Front-end Developer",
      stack: "SvelteKit · WordPress REST API · CSS Grid & Flexbox",
      summary: "As part of a group project during my third semester at FDND, we rebuilt the Redpers independent news website to be fully responsive, accessible, and performant — following RAP/PE principles throughout development.",
      challenge: "The existing Redpers website was not responsive, had performance issues, and fell short on accessibility. Articles were difficult to read on mobile and the layout broke on smaller viewports. The client also needed strong scores on accessibility and SEO to maintain credibility as a journalism platform.",
      solution: "We restructured content delivery using the WordPress REST API, pulling articles dynamically into SvelteKit pages. A custom CSS Grid layout ensured every article rendered beautifully across screen sizes. Lighthouse audits were run throughout development and every flagged issue was addressed before handover.",
      images: ["/images/redpers.png"],
      timeline: [
        { date: "Week 1", role: "Client Brief & Research", text: "Met the Redpers team, analysed the existing site, and wrote a feature specification together.", color: "#00fff1" },
        { date: "Week 2–3", role: "API Integration", text: "Connected the WordPress REST API and mapped content types to Svelte components.", color: "#0984e3" },
        { date: "Week 4", role: "Responsive Layout", text: "Built the responsive grid system and established the article typography scale.", color: "#00fff1" },
        { date: "Week 5–6", role: "Accessibility & Delivery", text: "Lighthouse audit, semantic HTML pass, cross-browser testing, and client presentation.", color: "#0984e3" },
      ],
      reflection: "Collaborating in a team taught me the importance of agreeing on conventions before writing a single line of code. Git conflicts were frequent at first — a branching strategy from day one would have saved hours. The project also deepened my appreciation for progressive enhancement as a design principle, not an afterthought.",
    },
    "I-Love-Web": {
      title: "I Love Web",
      label: "Personal Project",
      tagline: "A digital garden for web development thoughts, experiments, and inspiration.",
      tags: ["SVELTEKIT", "MARKDOWN", "GSAP"],
      image: "/images/digital-garden.png",
      LiveUrl: "https://i-love-web-amber.vercel.app/",
      year: "2024",
      duration: "2 weeks",
      role: "Designer & Developer",
      stack: "SvelteKit · Markdown · View Transitions API · GSAP",
      summary: "I Love Web is a personal digital garden where I document web development ideas, experiments, and inspirations. Built just before my internship started, it was a chance to explore SvelteKit freely without client constraints.",
      challenge: "Personal projects often sprawl without focus. The challenge was to create a structure that felt organic and ever-growing — true to the digital-garden concept — while remaining navigable and visually consistent enough to share publicly.",
      solution: "Each note is a standalone Markdown file rendered via a custom SvelteKit layout. The View Transitions API provides smooth page-to-page animations, and GSAP micro-animations on card hover reinforce the tactile feel of turning pages in a real garden journal. A tag system lets visitors navigate by theme rather than date.",
      images: ["/images/digital-garden.png"],
      timeline: [
        { date: "Day 1–3", role: "Concept & Structure", text: "Defined the digital garden metaphor, planned the content architecture and routing strategy.", color: "#00fff1" },
        { date: "Day 4–7", role: "Core Build", text: "Implemented Markdown rendering, layout system, and primary navigation.", color: "#0984e3" },
        { date: "Day 8–10", role: "Animations", text: "Added View Transitions API and GSAP card hover animations.", color: "#00fff1" },
        { date: "Day 11–14", role: "Content & Launch", text: "Wrote the initial batch of notes, ran a final review, and deployed to Vercel.", color: "#0984e3" },
      ],
      reflection: "Building something purely for myself, with no brief or deadline, was creatively liberating. I learned that the hardest part of a personal project is finishing it — without external accountability it's easy to keep tweaking forever. Shipping imperfect but real work is a skill in itself.",
    },
    "we-love-web": {
      title: "We Love Web",
      label: "Personal Project",
      tagline: "A readable, editorial blog for FDND guest lecture notes.",
      tags: ["SVELTEKIT", "MARKDOWN", "VIEW TRANSITIONS"],
      image: "/images/we-love-web.png",
      LiveUrl: "https://we-love-web-blog-one.vercel.app",
      year: "2024",
      duration: "1 week",
      role: "Designer & Developer",
      stack: "SvelteKit · Markdown · View Transitions API",
      summary: "A card-based blog built during summer vacation to transform raw FDND lecture notes into a polished, readable format. Designed for generous spacing, large editorial typography, and frictionless navigation.",
      challenge: "My notes existed as Markdown files in a GitHub wiki — functional but visually uninspiring. I wanted them to feel like proper articles worth reading and revisiting, not raw documentation buried in a repository.",
      solution: "A clean card overview leads into spacious article pages with a generous type scale and minimal decoration. The View Transitions API delivers native-feeling page changes. The style system is template-based so every future article requires zero additional CSS.",
      images: ["/images/we-love-web.png"],
      timeline: [
        { date: "Day 1–2", role: "Design", text: "Sketched card and article layouts; selected a spacious, editorial type scale.", color: "#00fff1" },
        { date: "Day 3–5", role: "Development", text: "Built the SvelteKit routing, Markdown rendering pipeline, and card component.", color: "#0984e3" },
        { date: "Day 6–7", role: "Launch", text: "Added View Transitions, final typography refinements, and deployed to Vercel.", color: "#00fff1" },
      ],
      reflection: "A fast, focused build proved that constraints breed creativity. Limiting myself to one week forced every decision to count. The result is leaner and more focused than if I'd had unlimited time to second-guess every choice.",
    },
    visitekaartje: {
      title: "Business Card",
      label: "Study Project",
      tagline: "An interactive, web-based alternative to the printed business card.",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/visitekaartje.png",
      LiveUrl: "https://your-tribe-for-life-profile-card-liart.vercel.app/",
      year: "2023",
      duration: "1 sprint",
      role: "Designer & Developer",
      stack: "SvelteKit · Tailwind CSS · GSAP",
      summary: "Designed and built during the first sprint of my FDND study, this interactive business card lets visitors learn about me and access my work instantly — from any device, at any time.",
      challenge: "Traditional business cards are static and disposable. The challenge was to translate the personal, immediate quality of a physical card into a digital experience that is actually more useful: linkable, animated, and always up to date.",
      solution: "A single-page layout with smooth GSAP entrance animations introduces my name, skills, and social links. Tailwind CSS ensured rapid and consistent styling. Every interactive element is a first-class action — not buried in navigation — so the experience mirrors the directness of handing someone a card.",
      images: ["/images/visitekaartje.png"],
      timeline: [
        { date: "Sprint 1", role: "Design & Prototype", text: "Sketched the layout, chose a colour palette, and built the static HTML/CSS structure.", color: "#00fff1" },
        { date: "Sprint 2", role: "Animation & Polish", text: "Added GSAP entrance animations, interactive link states, and mobile responsiveness.", color: "#0984e3" },
      ],
      reflection: "My first real shipped project. The code is rough in places, but shipping something real in two weeks as a beginner was an important confidence milestone. I'd now separate concerns more carefully and write semantic HTML from the start rather than refactoring it later.",
    },
    squadpage: {
      title: "Squad Page",
      label: "Study Project",
      tagline: "A collaborative team introduction page built in our very first sprint.",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/squadpage.png",
      LiveUrl: "https://ebok1.github.io/your-tribe-squad-page/",
      year: "2023",
      duration: "1 sprint",
      role: "Front-end Developer",
      stack: "HTML5 · CSS3 · Vanilla JavaScript",
      summary: "Our first team project at FDND: a squad page introducing each group member. The challenge was less about code and more about learning to collaborate in a shared codebase for the very first time.",
      challenge: "Merging code from five developers with different styles and experience levels into a single, consistent codebase was our biggest hurdle. Without an agreed style guide, the early draft was a patchwork of conflicting conventions and naming schemes.",
      solution: "We introduced a lightweight style guide early in the sprint — naming conventions, spacing tokens, and a shared colour palette — that unified the page without restricting each member's personal section. Regular short standups kept everyone aligned and minimised painful merge conflicts.",
      images: ["/images/squadpage.png"],
      timeline: [
        { date: "Day 1–2", role: "Team Kickoff", text: "Decided on roles, set up the shared repository, and sketched the layout collaboratively.", color: "#00fff1" },
        { date: "Day 3–5", role: "Individual Sections", text: "Each member built their personal section; the style guide kept the overall page cohesive.", color: "#0984e3" },
        { date: "Day 6–7", role: "Integration & Launch", text: "Merged all sections, resolved conflicts, and published on GitHub Pages.", color: "#00fff1" },
      ],
      reflection: "This sprint taught me that team coordination is a skill as important as coding. I learned to write cleaner, more readable code knowing someone else would have to merge it. It also sparked my appreciation for design systems — even a lightweight style guide transforms how a team collaborates.",
    },
    "B-rain": {
      title: "B-rain",
      label: "Client Project",
      tagline: "Turning rainwater efficiency into a compelling digital story for Spatwater.",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/b-rain.png",
      LiveUrl: "https://tristankatte.github.io/Brain-website/",
      year: "2023",
      duration: "5 sprints",
      role: "Designer & Developer",
      stack: "HTML5 · CSS3 · JavaScript",
      summary: "Built across sprints 2–5 of my first semester at FDND, this website for Spatwater communicates the benefits of rainwater collection to homeowners — combining clear information hierarchy with subtle interactive moments.",
      challenge: "Spatwater's offering — rainwater collection systems — is technically complex but needed to feel approachable and trustworthy to a general homeowner audience. Translating that expertise into a clear, persuasive, and honest website was the core design challenge.",
      solution: "A clear information hierarchy guides visitors from problem to solution to action. Subtle CSS animations draw attention to key benefits without overwhelming the reader. A mobile-first approach ensured the site works beautifully on any device a homeowner might use.",
      images: ["/images/b-rain.png"],
      timeline: [
        { date: "Sprint 2", role: "Client Brief", text: "Met the Spatwater team, understood their audience, and sketched the site structure.", color: "#00fff1" },
        { date: "Sprint 3", role: "Design", text: "Established the visual identity, colour scheme, and responsive layout system.", color: "#0984e3" },
        { date: "Sprint 4", role: "Development", text: "Built the HTML structure, CSS animations, and JavaScript micro-interactions.", color: "#00fff1" },
        { date: "Sprint 5", role: "Testing & Handover", text: "Cross-browser testing, copy review, and final client presentation.", color: "#0984e3" },
      ],
      reflection: "My first client project raised the stakes in a way no classroom assignment can. I learned to ask better questions upfront and to show work in progress early rather than revealing a finished product that misses the mark. Real clients need to be involved — not surprised.",
    },
    "De-Koperen-Kat": {
      title: "De Koperen Kat",
      label: "Client Project",
      tagline: "A website for a local brewery, made as a final project at FDND.",
      tags: ["SVELTEKIT", "GSAP", "Supabase"],
      image: "/images/de-koperen-kat.png",
      LiveUrl: "https://stadsbrouwerij-dekoperenkat.netlify.app/",
      year: "2025-2026",
      duration: "5 sprints",
      role: "Designer & Developer",
      stack: "SvelteKit · GSAP · JavaScript",
      summary: "Built across the final sprints of my retake of my fourth semester at FDND, this website for the Koperen Kat helps users find out more about the brewery and its offerings.",
      challenge: "The old website of the brewery had a difficult navigation, and the new website needed to be simple and easy to use.",
      solution: "A clear layout made it easy to find what the user was looking for. A mobile-first approach ensured the site works beautifully on any device a user might use.",
      images: ["/images/de-koperen-kat.png"],
      timeline: [
        { date: "Sprint 2", role: "Client Brief", text: "Met the owner of the brewery, understood their audience, and sketched the site structure.", color: "#00fff1" },
        { date: "Sprint 3", role: "Design", text: "Established the visual identity, colour scheme, and responsive layout system.", color: "#0984e3" },
        { date: "Sprint 4", role: "Development", text: "Built the HTML structure, CSS animations, and JavaScript micro-interactions.", color: "#00fff1" },
        { date: "Sprint 5", role: "Testing & Handover", text: "Cross-browser testing, user testing, copy review, and final client presentation.", color: "#0984e3" },
      ],
      reflection: "My final, individual project was a bit more complex, but I learned to ask better questions and to show work in progress early rather than revealing a finished product that misses the mark.",
    },
  };

  $: slug = $page.params.slug;
  $: project = projectData[slug];
  $: currentIndex = projectSlugs.indexOf(slug);
  $: prevSlug = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  $: nextSlug = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;
  $: prevProject = prevSlug ? projectData[prevSlug] : null;
  $: nextProject = nextSlug ? projectData[nextSlug] : null;

  let heroEl;

  onMount(async () => {
    const html = document.documentElement;
    html.style.scrollSnapType = "none";

    if (!project) return;

    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    if (heroEl) {
      gsap.from(heroEl.querySelectorAll(".anim"), {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
      });
    }

    document.querySelectorAll(".scroll-anim").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });

    return () => {
      html.style.scrollSnapType = "";
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });
</script>

{#if project}

  <!-- ─── HERO ─── -->
  <section class="hero" bind:this={heroEl}>
    <div class="hero-inner">
      <div class="hero-left">
        <span class="hero-label anim">{project.label}</span>
        <h1 class="hero-title anim">{project.title}</h1>
        <p class="hero-tagline anim">{project.tagline}</p>
        <div class="hero-tags anim">
          {#each project.tags as tag}
            <span class="chip">{tag}</span>
          {/each}
        </div>
        <div class="hero-actions anim">
          {#if project.LiveUrl}
            <Button label="View Live Site" href={project.LiveUrl} target="_blank" />
          {/if}
          <Button label="All Projects" href="/#work" />
        </div>
      </div>

      <div class="hero-right anim">
        <div class="screenshot-frame">
          <img src={project.image} alt="{project.title} screenshot" class="screenshot" />
          <div class="frame-corner frame-tl"></div>
          <div class="frame-corner frame-tr"></div>
          <div class="frame-corner frame-bl"></div>
          <div class="frame-corner frame-br"></div>
        </div>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>Scroll</span>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>

  <!-- ─── OVERVIEW ─── -->
  <section class="section">
    <div class="container">
      <span class="section-label scroll-anim">01 / Overview</span>
      <div class="overview-grid">
        <div class="overview-col scroll-anim">
          <h2 class="section-heading">Project Overview</h2>
          <p class="body-text">{project.summary}</p>
        </div>
        <div class="stats-grid scroll-anim">
          <div class="stat">
            <span class="stat-label">Year</span>
            <span class="stat-value">{project.year}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Duration</span>
            <span class="stat-value">{project.duration}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Role</span>
            <span class="stat-value">{project.role}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Stack</span>
            <span class="stat-value">{project.stack}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── CHALLENGE & SOLUTION ─── -->
  <section class="section">
    <div class="container">
      <span class="section-label scroll-anim">02 / Challenge & Solution</span>
      <div class="cs-grid">
        <div class="cs-card cs-card--challenge scroll-anim">
          <span class="cs-card-label">The Challenge</span>
          <p class="body-text">{project.challenge}</p>
        </div>
        <div class="cs-card cs-card--solution scroll-anim">
          <span class="cs-card-label">The Solution</span>
          <p class="body-text">{project.solution}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── VISUAL SHOWCASE ─── -->
  <section class="section showcase-section">
    <div class="container">
      <span class="section-label scroll-anim">03 / Visual Showcase</span>
      <div class="showcase-wrap scroll-anim">
        <div class="browser-frame">
          <div class="browser-bar">
            <span class="browser-dot browser-dot--red"></span>
            <span class="browser-dot browser-dot--yellow"></span>
            <span class="browser-dot browser-dot--green"></span>
            <span class="browser-url">{project.LiveUrl}</span>
          </div>
          <img src={project.image} alt="{project.title} full view" class="showcase-img" />
        </div>
      </div>
    </div>
  </section>

  <!-- ─── TIMELINE ─── -->
  <section class="section">
    <div class="container">
      <span class="section-label scroll-anim">04 / Timeline</span>
      <h2 class="section-heading scroll-anim">From Start to Finish</h2>
      <div class="timeline">
        {#each project.timeline as item, i}
          <div class="tl-entry scroll-anim">
            <div class="tl-date-col">
              <span class="tl-date">{item.date}</span>
            </div>
            <div class="tl-connector">
              <div class="tl-dot" style="background:{item.color}; box-shadow:0 0 8px {item.color}80"></div>
              {#if i < project.timeline.length - 1}
                <div class="tl-line"></div>
              {/if}
            </div>
            <div class="tl-content">
              <h4 class="tl-role" style="color:{item.color}">{item.role}</h4>
              <p class="tl-text">{item.text}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ─── REFLECTION ─── -->
  <section class="section">
    <div class="container">
      <span class="section-label scroll-anim">05 / Reflection</span>
      <div class="reflection scroll-anim">
        <div class="reflection-mark" aria-hidden="true">"</div>
        <p class="reflection-text">{project.reflection}</p>
      </div>
    </div>
  </section>

  <!-- ─── PREV / NEXT ─── -->
  <nav class="project-nav" aria-label="Browse other projects">
    <div class="nav-half">
      {#if prevProject}
        <a href={`/projects/${prevSlug}`} class="nav-item nav-item--prev">
          <span class="nav-dir">← Previous</span>
          <span class="nav-title">{prevProject.title}</span>
        </a>
      {/if}
    </div>
    <div class="nav-half nav-half--right">
      {#if nextProject}
        <a href={`/projects/${nextSlug}`} class="nav-item nav-item--next">
          <span class="nav-dir">Next →</span>
          <span class="nav-title">{nextProject.title}</span>
        </a>
      {/if}
    </div>
  </nav>

{:else}
  <p class="not-found">Project not found.</p>
{/if}

<style>
  /* ─── Primitives ─── */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: 5rem 0;
    min-height: unset;
    scroll-snap-align: none;
  }

  .section-label {
    display: block;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #00fff1;
    font-family: "Azonix", monospace;
    margin-bottom: 2rem;
  }

  .section-heading {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-family: "Azonix", sans-serif;
    font-weight: 300;
    color: var(--text);
    margin: 0 0 2rem;
    line-height: 1.1;
  }

  .body-text {
    font-size: 1rem;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.65);
    font-family: "Titillium Web", sans-serif;
    letter-spacing: 0.4px;
    margin: 0;
  }

  .chip {
    font-size: 0.6rem;
    font-weight: 700;
    font-family: "Azonix", monospace;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
  }

  /* ─── Hero ─── */
  .hero {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7rem 2rem 5rem;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    scroll-snap-align: none;
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-label {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #00fff1;
    font-family: "Azonix", monospace;
  }

  .hero-title {
    font-size: clamp(3rem, 5.5vw, 5rem);
    font-family: "Azonix", sans-serif;
    font-weight: 300;
    line-height: 1;
    margin: 0;
    background: linear-gradient(100deg, #fff 50%, #00fff1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-tagline {
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Titillium Web", sans-serif;
    letter-spacing: 0.4px;
    margin: 0;
    max-width: 42ch;
  }

  .hero-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hero-actions :global(.cta-button) {
    width: auto;
    min-width: 150px;
    max-width: none;
    padding: 0.75rem 1.75rem;
  }

  /* Screenshot frame */
  .hero-right {
    position: relative;
  }

  .screenshot-frame {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(0, 255, 241, 0.2);
    box-shadow:
      0 0 40px rgba(0, 255, 241, 0.07),
      0 0 80px rgba(9, 132, 227, 0.05),
      0 40px 80px rgba(0, 0, 0, 0.6);
  }

  .screenshot {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
    border-radius: 0;
  }

  .frame-corner {
    position: absolute;
    width: 18px;
    height: 18px;
    border-color: #00fff1;
    border-style: solid;
    pointer-events: none;
  }

  .frame-tl { top: -1px; left: -1px;   border-width: 2px 0 0 2px; }
  .frame-tr { top: -1px; right: -1px;  border-width: 2px 2px 0 0; }
  .frame-bl { bottom: -1px; left: -1px;  border-width: 0 0 2px 2px; }
  .frame-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

  /* Scroll hint */
  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.6rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
    font-family: "Azonix", monospace;
    animation: bounce 2.2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(7px); }
  }

  /* ─── Overview ─── */
  .overview-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5rem;
    align-items: start;
  }

  .overview-col {
    min-width: 0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    min-width: 260px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1rem 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.02);
  }

  .stat-label {
    font-size: 0.58rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #00fff1;
    font-family: "Azonix", monospace;
  }

  .stat-value {
    font-size: 0.9rem;
    font-family: "Space Grotesk", sans-serif;
    color: var(--text);
    font-weight: 600;
    line-height: 1.4;
  }

  /* ─── Challenge & Solution ─── */
  .cs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }

  .cs-card {
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;
    overflow: hidden;
  }

  .cs-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
  }

  .cs-card--challenge::before {
    background: linear-gradient(90deg, transparent, rgba(255, 100, 80, 0.6), transparent);
  }

  .cs-card--solution::before {
    background: linear-gradient(90deg, transparent, rgba(0, 255, 241, 0.6), transparent);
  }

  .cs-card-label {
    display: block;
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Azonix", monospace;
    margin-bottom: 1rem;
  }

  .cs-card--challenge .cs-card-label { color: rgba(255, 100, 80, 0.9); }
  .cs-card--solution  .cs-card-label { color: #00fff1; }

  /* ─── Visual Showcase ─── */
  .showcase-section {
    padding-bottom: 6rem;
  }

  .showcase-wrap {
    margin-top: 0.5rem;
  }

  .browser-frame {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      0 40px 100px rgba(0, 0, 0, 0.7),
      0 0 0 1px rgba(255, 255, 255, 0.04);
  }

  .browser-bar {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.7rem 1rem;
    background: rgba(255, 255, 255, 0.035);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .browser-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .browser-dot--red    { background: #ff5f57; }
  .browser-dot--yellow { background: #febc2e; }
  .browser-dot--green  { background: #28c840; }

  .browser-url {
    font-size: 0.62rem;
    font-family: "JetBrains Mono", monospace;
    color: rgba(255, 255, 255, 0.28);
    margin-left: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .showcase-img {
    width: 100%;
    display: block;
    border-radius: 0;
  }

  /* ─── Timeline ─── */
  .timeline {
    margin-top: 1.5rem;
  }

  .tl-entry {
    display: grid;
    grid-template-columns: 130px 36px 1fr;
  }

  .tl-date-col {
    padding-top: 0.1rem;
    text-align: right;
    padding-right: 1rem;
  }

  .tl-date {
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
    font-family: "Azonix", monospace;
  }

  .tl-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tl-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.05rem;
    z-index: 1;
  }

  .tl-line {
    flex: 1;
    width: 1px;
    background: rgba(255, 255, 255, 0.09);
    margin: 4px 0;
    min-height: 2rem;
  }

  .tl-content {
    padding-left: 1rem;
    padding-bottom: 2.5rem;
  }

  .tl-role {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    margin: 0 0 0.4rem;
    line-height: 1.4;
  }

  .tl-text {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.45);
    font-family: "Titillium Web", sans-serif;
    letter-spacing: 0.4px;
    line-height: 1.65;
    margin: 0;
  }

  /* ─── Reflection ─── */
  .reflection {
    max-width: 72ch;
    position: relative;
    padding: 1.5rem 2rem 1.5rem 3.5rem;
    border-left: 2px solid rgba(0, 255, 241, 0.25);
  }

  .reflection-mark {
    position: absolute;
    top: -1.5rem;
    left: 2rem;
    font-size: 7rem;
    line-height: 1;
    color: rgba(0, 255, 241, 0.1);
    font-family: Georgia, serif;
    pointer-events: none;
    user-select: none;
  }

  .reflection-text {
    font-size: 1.05rem;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Titillium Web", sans-serif;
    letter-spacing: 0.4px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  /* ─── Prev / Next ─── */
  .project-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  .nav-half {
    display: flex;
  }

  .nav-half--right {
    justify-content: flex-end;
    border-left: 1px solid rgba(255, 255, 255, 0.07);
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2.5rem 2rem;
    text-decoration: none;
    transition: background 0.2s ease;
    flex: 1;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.025);
  }

  .nav-item--next {
    text-align: right;
  }

  .nav-dir {
    font-size: 0.62rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #00fff1;
    font-family: "Azonix", monospace;
  }

  .nav-title {
    font-size: 1.4rem;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    color: var(--text);
    transition: color 0.2s ease;
  }

  .nav-item:hover .nav-title {
    background: linear-gradient(90deg, #00fff1, #0984e3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ─── Not found ─── */
  .not-found {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    font-family: "Azonix", sans-serif;
    color: rgba(255, 255, 255, 0.35);
    font-size: 1rem;
    letter-spacing: 2px;
  }

  /* ─── Responsive ─── */
  @media (max-width: 960px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .overview-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .stats-grid {
      min-width: unset;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 700px) {
    .cs-grid {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: 1fr 1fr;
    }

    .tl-entry {
      grid-template-columns: 90px 30px 1fr;
    }

    .tl-date {
      font-size: 0.52rem;
    }
  }

  @media (max-width: 600px) {
    .hero {
      padding: 6.5rem 1.25rem 4rem;
    }

    .container {
      padding: 0 1.25rem;
    }

    .section {
      padding: 4rem 0;
    }

    .project-nav {
      grid-template-columns: 1fr;
    }

    .nav-half--right {
      border-left: none;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .nav-item--next {
      text-align: left;
    }

    .reflection {
      padding: 1.25rem 1.25rem 1.25rem 2.5rem;
    }
  }
</style>
