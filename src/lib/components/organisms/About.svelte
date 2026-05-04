<script>
  import AboutIntro from "../molecules/AboutIntro.svelte";
  import Timeline from "../molecules/Timeline.svelte";
  import ProfileImage from "../molecules/ProfileImage.svelte";
  import FocusCard from "../molecules/FocusCard.svelte";
  import AboutStats from "../molecules/AboutStats.svelte";
  import HexagonCanvas from "../molecules/HexagonCanvas.svelte";

  export let profileImage = "/images/profielfoto-zw.avif";

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
  ];

  const educationTimeline = {
    title: "My Education",
    items: [
      {
        title: "2016-2018",
        text: "Desktop publisher at the Grafisch Lyceum Utrecht.",
        color: "#00ffea",
      },
      {
        title: "2018-2022",
        text: "Web Designer at the Grafisch Lyceum Utrecht.",
        color: "#1affd5",
      },
      {
        title: "2022",
        text: "Communication and Multimedia design, before switching to Frontend.",
        color: "#00ccaa",
      },
      {
        title: "2023",
        text: "Gap year working, travelling, and starting at FDND.",
        color: "#00ffea",
      },
      {
        title: "2023-2026",
        text: "Frontend development at FDND. Graduated in January 2026.",
        color: "#1affd5",
      },
    ],
  };

  const workTimeline = {
    title: "Work Experience",
    items: [
      {
        title: "Feb–Apr 2025: VRU",
        text: "Internship building reports for the VRU.",
        color: "#ff6b6b",
      },
      {
        title: "Aug 2021–Jan 2022: ArtDcom",
        text: "Building and optimizing websites.",
        color: "#ff8b8b",
      },
      {
        title: "Feb–Jun 2021: Centix",
        text: "Optimizing the Wordpress website for Centix.",
        color: "#ff4c4c",
      },
      {
        title: "2018–Present: VersAlert",
        text: "Seasonal warehouse work — sorting, packing, cleaning.",
        color: "#ff6b6b",
      },
    ],
  };
</script>

<section id="about" class="about-me">
<!-- <HexagonCanvas /> -->
  <div class="about-content">
    <div class="about-header">
      <span class="about-label">01 / Who I Am</span>
      <h2 class="about-heading">
        Building the web<br />
        <span class="about-heading-accent">one pixel at a time.</span>
      </h2>
    </div>

    <div class="about-main">
      <div class="about-left">
        <ProfileImage {profileImage} />
        <FocusCard areas={focusAreas} />
      </div>

      <div class="about-right">
        <AboutIntro {introText} />
        <AboutStats {stats} />
      </div>
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
</section>

<style>
  .about-me {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem;
    color: var(--text);
    background-color: #0E151B;
    overflow: hidden;
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
    grid-template-columns: 325px 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 75ch;
  }

  .about-timelines-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    width: 100%;
  }

  .timeline-col {
    width: 100%;
  }

  @media (max-width: 768px) {
    .about-main {
      grid-template-columns: 1fr;
    }

    .about-timelines-row {
      grid-template-columns: 1fr;
      gap: 2rem;
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
