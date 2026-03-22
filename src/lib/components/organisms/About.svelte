<!-- AboutSection.svelte -->
<script>
  import AboutIntro from "../molecules/AboutIntro.svelte";
  import Timeline from "../molecules/Timeline.svelte";

  const introText = `I'm a passionate frontend developer...`;

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
  
  <div class="about-content">
    <AboutIntro {introText} />
    {#each timelines as timeline}
      <Timeline title={timeline.title} items={timeline.items} />
    {/each}
  </div>
</section>

<style>
  .about-me {
    width: 100%;
    min-height: 100dvh;
    position: relative;
    padding: 4rem 1rem;
    text-align: center;
    background-color: var(--main-bg-color);
    color: var(--text);
    overflow: hidden;
  }

  .about-content {
    max-width: 90ch;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
</style>
