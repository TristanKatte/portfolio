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
        { title: "2016-2018", text: "Completed my 1st study as a Desktop publisher at the Grafisch Lyceum Utrecht.", color: "#00ffea" },
        { title: "2018-2022", text: "Completed my 2nd study as a Web Designer at the Grafisch Lyceum Utrecht.", color: "#1affd5" },
        { title: "2022", text: "Studied Communication and Multimedia design for a while, before switching to Frontend development.", color: "#00ccaa" },
        { title: "2023", text: "Gap year working, travelling, and starting my studies at FDND.", color: "#00ffea" },
      ],
    },
    {
      title: "Work Experience",
      items: [
        { title: "Feb 2025 - Apr 2025: Internship at the VRU", text: "Helped building reports for the VRU.", color: "#ff6b6b" },
        { title: "Aug 2021 - Jan 2022: Internship at ArtDcom", text: "Helped building websites and optimizing them.", color: "#ff8b8b" },
        { title: "Feb 2021 - Jun 2021: Internship at Centix", text: "Helped building and optimizing the Wordpress website for Centix.", color: "#ff4c4c" },
        { title: "2018 - Present: Warehouse worker", text: "Seasonal job at VersAlert, handling sorting, packing and cleaning.", color: "#ff6b6b" },
      ],
    },
  ];
</script>

<section id="about" class="about-me">
  <CyberHexBackground />
  <div class="about-content">

    <!-- Profile row: image + text -->
    <div class="about-profile">
      <div class="profile-image-wrap">
        <img src={profileImage} alt="Tristan" class="profile-image" />
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
    background-color: transparent;
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
    align-items: stretch;
  }

  .profile-image-wrap {
    flex-shrink: 0;
    width: 100%;
    height: 350px;
    position: relative;
    border-radius: 1rem;
    background-color: #222;
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 206, 201, 0.2);
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .profile-text {
    flex: 1;
    max-width: 95ch;
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
    }

    .profile-image-wrap {
      width: 520px;
      height: 620px;
    }
  }
</style>