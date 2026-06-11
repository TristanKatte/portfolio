<script>
  import { onMount } from "svelte";
  import ScrollIndicator from "../atoms/ScrollIndicator.svelte";
  import AboutIntro from "../molecules/AboutIntro.svelte";
  import Timeline from "../molecules/Timeline.svelte";
  import FocusCard from "../molecules/FocusCard.svelte";
  import AboutStats from "../molecules/AboutStats.svelte";

  let aboutHeadingEl;
  let expHeadingEl;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).default;
    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

    const chars = "01アイウエOカキクケCO!@#$%";

    function scrambleHeading(el, line1Text, line2Text) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter() {
          const [plain, accent] = el.querySelectorAll("span");
          gsap.to(plain, {
            duration: 1.5,
            scrambleText: { text: line1Text, chars, revealDelay: 0.2, speed: 0.5 },
            ease: "none",
          });
          gsap.to(accent, {
            duration: 1.5,
            delay: 0.4,
            scrambleText: { text: line2Text, chars, revealDelay: 0.2, speed: 0.5 },
            ease: "none",
          });
        },
      });
    }

    scrambleHeading(aboutHeadingEl, "Building the web", "one pixel at a time.");
    scrambleHeading(expHeadingEl, "Shaped by learning,", "refined through experience.");
  });

  

  const introText = [
    "I'm a recently graduated frontend developer with a strong foundation in both design and development. I focus on building accessible, performant, and visually engaging web experiences that feel intuitive and polished. With a background in web design, I have a keen eye for aesthetics and user experience, which I combine with my technical skills to create websites that not only look great but also function seamlessly. I'm passionate about pushing the boundaries of what's possible on the web and am always eager to learn new technologies and techniques.",
  ];

  const focusAreas = [
    "Accessible & inclusive design",
    "Progressive enhancement",
    "Performance & optimization",
    "Creative frontend development",
  ];

  const stats = [
    { value: "3+", label: "Years experience" },
    { value: "24", label: "Projects shipped" },
    { value: "8", label: "Technologies" },
    { value: "100%", label: "Accessible mindset" },
  ];

  const skillTags = {
    Frontend: ["HTML", "CSS", "JavaScript", "GSAP", "React", "SvelteKit", "Next.js", "Tailwind", "Bootstrap"],
    Backend: ["Node.js", "Express.js"],
    Design: ["Figma", "Adobe Illustrator", "Photoshop"],
    Tools: ["Git", "VS Code", "NPM"],
  };

  function handleTagMove(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--rotateX", `${-((y / rect.height) - 0.5) * 15}deg`);
    el.style.setProperty("--rotateY", `${((x / rect.width) - 0.5) * 15}deg`);
    el.style.setProperty("--glowX", `${x}px`);
    el.style.setProperty("--glowY", `${y}px`);
  }

  function handleTagLeave(e) {
    const el = e.currentTarget;
    el.style.setProperty("--rotateX", "0deg");
    el.style.setProperty("--rotateY", "0deg");
    el.style.setProperty("--glowX", "50%");
    el.style.setProperty("--glowY", "50%");
  }

  const workTimeline = {
    title: "Work Experience",
    items: [
      {
        date: "Feb 2025 — Apr 2025",
        role: "Internship at the Veiligheidsregio Utrecht (VRU)",
        text: "Helped building reports for the VRU.",
        color: "#ff6b6b",
      },
      {
        date: "Aug 2021 — Jan 2022",
        role: "Internship at ArtDcom",
        text: "Helped building websites and optimizing them.",
        color: "#ff8b8b",
      },
      {
        date: "Feb 2021 — Jun 2021",
        role: "Internship at Centix",
        text: "Helped building and optimizing the WordPress website for Centix.",
        color: "#ff4c4c",
      },
      {
        date: "Jul 2018 — Present",
        role: "Warehouse Employee",
        text: "Seasonal job at VersAlert, handling sorting, packing and cleaning.",
        color: "#ff6b6b",
      },
    ],
  };

  const educationTimeline = {
    title: "Educations",
    items: [
      {
        date: "Sep 2023 — Jan 2026",
        role: "Frontend Design & Development at the Amsterdam University of Applied Sciences",
        text: "Associated degree program focused on frontend development, design, and user experience.",
        color: "#00ffea",
      },
      {
        date: "Sep 2022 — Dec 2022",
        role: "Communication & Multimedia Design at the Amsterdam University of Applied Sciences",
        text: "Program focused on communication and multimedia design principles.",
        color: "#1affd5",
      },
      {
        date: "Sep 2018 — Sep 2022",
        role: "Webdesign at the Grafisch Lyceum Utrecht",
        text: "Studies focused on web design and development.",
        color: "#00ccaa",
      },
      {
        date: "Aug 2016 — Jul 2018",
        role: "Allround Desktoppublisher Studies at the Grafisch Lyceum Utrecht",
        text: "Studies focused on desktop publishing and design.",
        color: "#00ffea",
      },
    ],
  };
</script>

<section id="about" class="about-me">

  <div class="about-content">
    <div class="about-header">
      <span class="about-label">01 / Who I Am</span>
      <h2 class="about-heading" bind:this={aboutHeadingEl}>
        <span>Building the web</span><br />
        <span class="about-heading-accent">one pixel at a time.</span>
      </h2>
    </div>

    <div class="about-main">
      <div class="about-left">
        <div class="profile-placeholder">
          <img class="profile-static" src="/images/profielfoto-zw.avif" alt="Tristan" />
        </div>
        <FocusCard areas={focusAreas} />
      </div>

      <div class="about-right">
        <AboutIntro {introText} />

        <div class="skill-tags">
          {#each Object.entries(skillTags) as [category, tags]}
            <div class="skill-group">
              <div class="skill-separator"></div>
              <span class="skill-category-label">{category}</span>
              <div class="tags-row">
                {#each tags as tag}
                  <span class="tag" role="img" aria-label={tag} on:mousemove={handleTagMove} on:mouseleave={handleTagLeave}>{tag}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <AboutStats {stats} />
      </div>
    </div>

    <div class="experience-header">
      <span class="experience-label">Experience</span>
      <h2 class="experience-heading" bind:this={expHeadingEl}>
        <span>Shaped by learning,</span><br />
        <span class="experience-heading-accent">refined through experience.</span>
      </h2>
    </div>

    <div class="about-timelines-row">
      <div class="timeline-col">
        <Timeline title={workTimeline.title} items={workTimeline.items} />
      </div>
      <div class="timeline-col">
        <Timeline
          title={educationTimeline.title}
          items={educationTimeline.items}
        />
      </div>
    </div>
  </div>

  <div class="scroll-indicator-wrap">
    <ScrollIndicator ariaLabel="Scroll to work section" />
  </div>
</section>

<style>
  .about-me {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem 7rem;
    color: var(--text);
  }

  .scroll-indicator-wrap {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
  }

  .about-me::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--main-bg-color);
  z-index: -1; /* behind everything in this section */
  pointer-events: none;
}

  .about-content {
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

  .about-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .about-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #00fff1;
    font-family: "Azonix", monospace;
  }

  .about-heading {
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-family: "Neofolia", sans-serif;
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -1px;
    color: var(--text);
    margin: 0;
  }

  .about-heading-accent {
    background: linear-gradient(90deg, #00fff1, #0984e3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
  }

  .about-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .profile-placeholder {
    width: min(325px, 100%);
    aspect-ratio: 325 / 485;
    height: auto;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 206, 201, 0.2);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .profile-static {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 768px) {
    .profile-static {
      display: none;
    }
  }

  .about-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 75ch;
  }

  .skill-tags {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .skill-group {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .skill-separator {
    width: 100%;
    height: 1px;
    background: #00fff1;
  }

  .skill-category-label {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--highlight);
    font-family: "Azonix", monospace;
    margin-bottom: 0.5rem;
  }

  .tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.75rem;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text, #fff);
    font-family: "Space Grotesk", sans-serif;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    cursor: default;
    transform: perspective(200px) rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg));
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .tag::before {
    content: "";
    position: absolute;
    top: var(--glowY, 50%);
    left: var(--glowX, 50%);
    width: 200%;
    height: 200%;
    background: radial-gradient(circle closest-side, rgba(0, 255, 247, 0.18), transparent);
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    transition: top 0.05s, left 0.05s;
  }

  .tag:hover {
    transform: perspective(200px) rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg)) scale(1.08);
    border-color: rgba(0, 255, 247, 0.3);
  }

  .experience-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .experience-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: var(--highlight);
    font-family: "Azonix", monospace;
  }

  .experience-heading {
    font-size: clamp(2rem, 4vw, 4rem);
    font-family: "Neofolia", sans-serif;
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -1px;
    color: var(--text);
    margin: 0;
  }

  .experience-heading-accent {
    background: linear-gradient(90deg, var(--highlight), var(--brand));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-timelines-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: start;
    width: 100%;
  }

  .timeline-col {
    width: 100%;
  }

  @media (min-width: 768px) {
    .about-main {
      grid-template-columns: 325px 1fr;
    }

    .about-timelines-row {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  @media (max-width: 22.5rem) {
    .about-content {
      padding: 1rem;
      gap: 2rem;
    }

    .about-heading {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }
</style>
