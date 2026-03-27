<script>
  import AboutIntro from "../molecules/AboutIntro.svelte";
  import Timeline from "../molecules/Timeline.svelte";
  import CyberHexBackground from "../molecules/CyberHexBackground.svelte";

  export let profileImage = "/images/profielfoto-zw.avif";

  const introText = `I’m a recently graduated frontend developer with a strong foundation in both design and development. My journey started in desktop publishing, where I developed an eye for layout and visual detail. From there, I moved into web design and eventually found my passion in frontend development.

Today, I focus on building accessible, performant, and visually engaging web experiences. I work with modern technologies and apply principles like progressive enhancement to ensure that my work is not only visually appealing, but also usable and reliable across different devices and environments.

I enjoy combining design and code to create interfaces that feel intuitive and polished. Whether it’s refining layouts, improving accessibility, or adding subtle animations, I care about the details that elevate a user experience.

Beyond development, I like exploring new design trends, experimenting with motion and interaction, and continuously improving my skills to stay up to date in the ever-evolving world of web development.`;

  const timelines = [
    {
      title: "My Education",
      items: [
        {
          title: "2016-2018",
          text: "Completed my 1st study as a Desktop publisher at the Grafisch Lyceum Utrecht.",
          color: "#00ffea",
        },
        {
          title: "2018-2022",
          text: "Completed my 2nd study as a Web Designer at the Grafisch Lyceum Utrecht.",
          color: "#1affd5",
        },
        {
          title: "2022",
          text: "Studied Communication and Multimedia design for a while, before switching to Frontend development.",
          color: "#00ccaa",
        },
        {
          title: "2023",
          text: "Gap year working, travelling, and starting my studies at FDND.",
          color: "#00ffea",
        },
      ],
    },
    {
      title: "Work Experience",
      items: [
        {
          title: "Feb 2025 - Apr 2025: Internship at the VRU",
          text: "Helped building reports for the VRU.",
          color: "#ff6b6b",
        },
        {
          title: "Aug 2021 - Jan 2022: Internship at ArtDcom",
          text: "Helped building websites and optimizing them.",
          color: "#ff8b8b",
        },
        {
          title: "Feb 2021 - Jun 2021: Internship at Centix",
          text: "Helped building and optimizing the Wordpress website for Centix.",
          color: "#ff4c4c",
        },
        {
          title: "2018 - Present: Warehouse worker",
          text: "Seasonal job at VersAlert, handling sorting, packing and cleaning.",
          color: "#ff6b6b",
        },
      ],
    },
  ];
</script>

<section id="about" class="about-me">
  <!-- <CyberHexBackground /> -->
  <div class="about-content">
    <!-- Profile row: image + text -->
    <div class="about-profile">
      <div class="profile-image-corners">
        <span class="corner corner-tr"></span>
        <span class="corner corner-bl"></span>

        <div class="profile-image-outer">
          <div class="profile-image-wrap">
            <img src={profileImage} alt="Tristan" class="profile-image" />
            <div class="profile-fade"></div>
            <div class="profile-hud">
              <span class="hud-status">
                <span class="hud-dot"></span>
                STATUS: ONLINE
              </span>
              <span class="hud-clearance">CLEARANCE: LVL 3</span>
              <span class="hud-id">ID: TRS-001 // FDND</span>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-text">
        <AboutIntro {introText} />
      </div>
    </div>

    <!-- Timelines below -->
    <div class="about-timeline">
      {#each timelines as timeline}
        <Timeline title={timeline.title} items={timeline.items} />
      {/each}
    </div>
  </div>
</section>

<style>
  .about-me {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem;
    background-color: var(--main-bg-color);
    color: var(--text);
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

  /* Profile row */
  .about-profile {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    align-items: flex-start;
  }

  .profile-image-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 1;
    border-radius: calc(0.5rem - 3px);
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

  /* Scanlines */
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

  .profile-image-corners {
    position: relative;
    width: 325px;
    height: 485px;
    flex-shrink: 0;
  }

  /* Top left corner */
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

  /* Bottom right corner */
  .profile-image-corners::after {
    content: "";
    position: absolute;
    bottom: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #00fff1;
    border-right: 2px solid #00fff1;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 8px rgba(0, 255, 241, 0.4);
    z-index: 10;
  }


  .profile-image-outer {
    width: 325px;
    height: 485px;
    position: relative;
    animation: holo-shift 6s ease-in-out infinite;
  }

  /* Fade out at bottom */
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

/* HUD text overlay */
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

@keyframes dot-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.2; }
}

@keyframes holo-gloss {
  0%   { background-position: 0% 50%;   }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%;   }
}

@keyframes holo-shift {
  0%, 100% { filter: drop-shadow(0 0 12px rgba(0, 206, 201, 0.5)); }
  33%       { filter: drop-shadow(0 0 16px rgba(9, 132, 227, 0.6)); }
  66%       { filter: drop-shadow(0 0 14px rgba(255, 0, 170, 0.4)); }
}

  .profile-text {
    flex: 1;
    min-width: 0;
  }

  /* Timeline row */
  .about-timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  /* Tablet+ */
  @media (min-width: 768px) {
    .about-profile {
      flex-direction: row;
      align-items: flex-start;
      gap: 4rem;
    }

    /* .profile-image-wrap {
      width: 325px;
      height: 485px;
    } */
  }
</style>
