<script>
  import AboutIntro from "../molecules/AboutIntro.svelte";
  import Timeline from "../molecules/Timeline.svelte";
 

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
  <div class="about-content">
    <!-- Header -->
    <div class="about-header">
      <span class="about-label">01 / Who I Am</span>
      <h2 class="about-heading">
        Building the web<br />
        <span class="about-heading-accent">one pixel at a time.</span>
      </h2>
    </div>

    <!-- Main row: image-col left, content-col right -->
    <div class="about-main">
      <!-- Left column: image + focus card -->
      <div class="about-left">
        <div class="profile-image-corners">
          <span class="corner corner-tr"></span>
          <span class="corner corner-bl"></span>
          <div class="profile-image-outer">
            <div class="profile-image-wrap">
              <img src={profileImage} alt="Tristan" class="profile-image" />
              <div class="profile-fade"></div>
              <div class="profile-hud">
                <span class="hud-status">
                  <span class="hud-dot"></span>STATUS: ONLINE
                </span>
                <span class="hud-clearance">CLEARANCE: LVL 3</span>
                <span class="hud-id">ID: TRS-001 // FDND</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Focus areas card -->
        <div class="focus-card">
          <span class="focus-card-label">Focus Areas</span>
          <ul class="focus-list">
            {#each focusAreas as area}
              <li class="focus-item">
                <span class="focus-dot"></span>
                {area}
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Right column: text + stats + timelines -->
      <div class="about-right">
        <div class="profile-text">
          <AboutIntro {introText} />
        </div>

        <div class="about-stats">
          {#each stats as stat}
            <div class="about-stat">
              <span class="about-stat-value">{stat.value}</span>
              <span class="about-stat-label">{stat.label}</span>
            </div>
          {/each}
        </div>
      </div>
      <!-- Timelines in their own always-aligned row -->
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
    background: var(--main-bg-color);
    color: var(--text);
    overflow: hidden;
  }

  .about-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    background-color: rgba(5, 212, 212, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(0, 255, 241, 0.2);
    border: 2px solid rgba(0, 255, 241, 0.2);
  }

  /* Header */
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

  /* Main two-column layout */
  .about-main {
    display: grid;
    grid-template-columns: 325px 1fr;
    grid-template-rows: auto auto 1fr; /* row 1: top content, row 2: stats/focus, row 3: timelines */
    gap: 1.5rem 4rem;
    align-items: start;
  }

  /* Left column */
  .about-left {
    grid-column: 1;
    grid-row: 1 / 4; /* spans all rows */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
  }

  /* Focus card */
  .focus-card {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 206, 201, 0.2);
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .focus-card-label {
    font-family: "Azonix", monospace;
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #00fff1;
    opacity: 0.7;
  }

  .focus-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .focus-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: rgba(245, 245, 240, 0.75);
    font-family: "Titillium Web", sans-serif;
  }

  .focus-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00fff1;
    box-shadow: 0 0 6px #00fff1;
    flex-shrink: 0;
  }

  /* Right column */
  .about-right {
    grid-column: 2;
    grid-row: 1 / 4;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }

  /* Stats */
  .about-stats {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .about-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 206, 201, 0.15);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    text-align: center;
    min-width: 100px;
    transition: border-color 0.3s ease;
  }

  .about-stat:hover {
    border-color: rgba(0, 206, 201, 0.4);
  }

  .about-stat-value {
    font-family: "Azonix", sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #00fff1;
    line-height: 1;
    text-shadow: 0 0 12px rgba(0, 255, 241, 0.4);
  }

  .about-stat-label {
    font-size: 0.7rem;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text);
  }

  /* Image */
  .profile-image-corners {
    position: relative;
    width: 325px;
    height: 485px;
    flex-shrink: 0;
  }

  .profile-image-corners::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border-top: 2px solid #00fff1;
    border-left: 2px solid #00fff1;
    box-shadow: -2px -2px 8px rgba(0, 255, 241, 0.4);
    z-index: 10;
  }

  .profile-image-corners::after {
    content: "";
    position: absolute;
    bottom: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #00fff1;
    border-right: 2px solid #00fff1;
    box-shadow: 2px 2px 8px rgba(0, 255, 241, 0.4);
    z-index: 10;
  }

  .corner-tr {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-top: 2px solid #0984e3;
    border-right: 2px solid #0984e3;
    box-shadow: 2px -2px 8px rgba(9, 132, 227, 0.4);
    z-index: 10;
  }

  .corner-bl {
    position: absolute;
    bottom: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #0984e3;
    border-left: 2px solid #0984e3;
    box-shadow: -2px 2px 8px rgba(9, 132, 227, 0.4);
    z-index: 10;
  }

  .profile-image-outer {
    width: 325px;
    height: 485px;
    position: relative;
    animation: holo-shift 6s ease-in-out infinite;
  }

  .profile-image-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 1;
    border-radius: 0.5rem;
  }

  .profile-image-wrap::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 255, 241, 0.08) 0%,
      rgba(9, 132, 227, 0.12) 25%,
      rgba(255, 0, 170, 0.06) 50%,
      rgba(0, 255, 241, 0.1) 75%,
      rgba(9, 132, 227, 0.08) 100%
    );
    background-size: 300% 300%;
    animation: holo-gloss 4s ease-in-out infinite;
    z-index: 2;
    pointer-events: none;
    mix-blend-mode: screen;
  }

  .profile-image-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 204, 201, 0.03) 3px,
      rgba(0, 204, 201, 0.03) 4px
    );
    z-index: 3;
    pointer-events: none;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .profile-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(12, 16, 22, 0.6) 50%,
      rgba(12, 16, 22, 0.95) 100%
    );
    z-index: 4;
    pointer-events: none;
  }

  .profile-hud {
    position: absolute;
    bottom: 1.25rem;
    left: 1rem;
    right: 1rem;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .hud-status,
  .hud-clearance,
  .hud-id {
    font-family: "Azonix", monospace;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
  }

  .hud-status {
    color: #00fff1;
    text-shadow: 0 0 8px rgba(0, 255, 241, 0.6);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .hud-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00fff1;
    box-shadow: 0 0 6px #00fff1;
    animation: dot-blink 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .hud-clearance {
    color: #0984e3;
    text-shadow: 0 0 8px rgba(9, 132, 227, 0.5);
  }

  .hud-id {
    color: rgba(245, 245, 240, 0.5);
    font-size: 0.65rem;
  }

  .about-timelines-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  width: 100%;
  margin-top: 2rem;
  padding: 0 1rem;
}


  .timeline-col {
    width: 100%;
  }

  /* Desktop */
  @media (min-width: 768px) {
    .about-main {
      flex-direction: row;
      gap: 4rem;
      align-items: stretch;
    }
  }

  @keyframes dot-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }

  @keyframes holo-gloss {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes holo-shift {
    0%,
    100% {
      filter: drop-shadow(0 0 12px rgba(0, 206, 201, 0.5));
    }
    33% {
      filter: drop-shadow(0 0 16px rgba(9, 132, 227, 0.6));
    }
    66% {
      filter: drop-shadow(0 0 14px rgba(255, 0, 170, 0.4));
    }
  }

  @media (max-width: 22.5rem) {
    .about-content {
      padding: 1rem;
      gap: 2rem;
    }

    .about-heading {
      font-size: 2rem;
      text-align: left;
      letter-spacing: 2px;
    }

    .about-main {
      gap: 2rem;
    }

    .about-left {
      width: 100%;
    }

    .about-right {
      width: 100%;
    }

    .profile-text {
      font-size: 0.9rem;
      text-align: center;
    }

    .profile-image-wrap {
      width: 100%;
      height: 260px;
    }

    .profile-image-corners,
    .profile-image-outer {
      width: 100%;
      height: 260px;
    }

    .focus-card {
      padding: 1rem;
    }

    .about-stats {
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }

    .about-stat {
      padding: 0.75rem 1rem;
      min-width: 180px;
      gap: 0.5rem;
    }

    .about-stat-value {
      font-size: 1.5rem;
    }
  }
</style>
