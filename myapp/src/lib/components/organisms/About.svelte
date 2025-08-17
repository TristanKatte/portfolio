<script>
  import { onMount } from "svelte";

  const introText = `I’m a passionate frontend developer with a background in both design and development.
  My journey started in graphic design, evolved through web design, and finally led me to frontend development.
  I love building creative, accessible, and performant experiences that bring ideas to life.
  Beyond coding, I enjoy exploring new design trends, experimenting with animations, and learning the latest technologies
  that help me craft engaging digital experiences.`;

  const educationItems = [
    { title: "2016-2018", text: "Completed my 1st study as a Desktop publisher at the Grafisch Lyceum Utrecht.", color: "#00ffea" },
    { title: "2018-2022", text: "Completed my 2nd study as a Web Designer at the Grafisch Lyceum Utrecht.", color: "#1affd5" },
    { title: "2022", text: "Studied Communication and Multimedia design for a while, before switching to Frontend development.", color: "#00ccaa" },
    { title: "2023", text: "Gap year working, travelling, and starting my studies at FDND.", color: "#00ffea" }
  ];

  const jobItems = [
    { title: "Feb 2025 - Apr 2025: Internship at the VRU", text: "Helped building reports for the VRU.", color: "#ff6b6b" },
    { title: "Aug 2021 - Jan 2022: Internship at ArtDcom", text: "Helped building websites and optimizing them.", color: "#ff8b8b" },
    { title: "Feb 2021 - Jun 2021: Internship at Centix", text: "Helped building and optimizing the Wordpress website for Centix.", color: "#ff4c4c" },
    { title: "2018 - Present: Warehouse worker", text: "Seasonal job at VersAlert, handling sorting, packing and cleaning.", color: "#ff6b6b" }
  ];

  const timelines = [
    { title: "My Education", items: educationItems },
    { title: "Work Experience", items: jobItems }
  ];

onMount(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);

  // ----------------------------
  // Animate about text
  // ----------------------------
  const aboutTextEl = document.querySelector(".about-text");
  const words = aboutTextEl.textContent.trim().split(" ");
  aboutTextEl.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

  gsap.fromTo(".about-text .word", 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: aboutTextEl, start: "top 80%" } 
    }
  );

  // ----------------------------
  // Timeline animations
  // ----------------------------
  document.querySelectorAll(".timeline").forEach((timeline) => {
    const nodes = gsap.utils.toArray(timeline.querySelectorAll(".timeline-node"));
    const items = gsap.utils.toArray(timeline.querySelectorAll(".timeline-content"));
    const progressLine = timeline.querySelector(".timeline-progress");

    // Animate progress line
    gsap.fromTo(progressLine, { scaleY: 0 }, { 
      scaleY: 1, 
      transformOrigin: "top",
      scrollTrigger: { trigger: timeline, start: "top center", end: "bottom center", scrub: 0.5 }
    });

    // Animate nodes and items individually
    nodes.forEach((node, i) => {
      const color = node.style.getPropertyValue("--color");

      ScrollTrigger.create({
        trigger: node,
        start: "top center",
        onEnter: () => {
          gsap.to(node, { scale: 1.2, opacity: 1, boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`, duration: 0.5 });
          gsap.to(items[i], { boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(node, { scale: 1, opacity: 1, boxShadow: "none", duration: 0.3 });
          gsap.to(items[i], { boxShadow: "none", duration: 0.3 });
        }
      });

      // Curved slide & fade for items
      const desktopX = i % 2 === 0 ? -60 : 60;
      const desktopY = -30 + Math.random() * 20;
      const mobileX = 0;
      const mobileY = 30;

      gsap.fromTo(items[i],
        {
          autoAlpha: 0,
          x: window.innerWidth > 768 ? desktopX : mobileX,
          y: window.innerWidth > 768 ? desktopY : mobileY
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: items[i],
            start: "top 90%",
            end: "bottom 60%",
            scrub: 0.5
          }
        }
      );
    });
  });

  // ----------------------------
  // Optional: continuous gradient shift on about text
  // ----------------------------
  gsap.to(".about-text", { 
    backgroundPosition: "200% 0", 
    duration: 10, 
    ease: "linear", 
    repeat: -1 
  });
});
</script>

<section id="about" class="about-me">
  <h2 class="about-heading">About Me</h2>
  <p class="about-text">{introText}</p>

  {#each timelines as timeline}
    <section aria-labelledby={timeline.title} class="timeline-section">
      <header>
        <h2 id={timeline.title} class="timeline-heading" style="color: {timeline.items[0].color}">
          {timeline.title}
        </h2>
      </header>

      <div class="timeline">
        <div class="timeline-line"></div>
        <div class="timeline-progress" style="--color: {timeline.items[0].color}"></div>

        {#each timeline.items as item, i}
          <div class="timeline-item {i % 2 === 0 ? 'left' : 'right'}">
            <span class="timeline-node" style="--color: {item.color}"></span>
            <article class="timeline-content" style="--color: {item.color}; color: {item.color}">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</section>

<style>
  section.about-me {
    max-width: 90ch;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .about-text {
    font-size: 1.25rem;
    line-height: 1.7;
    max-width: 750px;
    margin: 0 auto 3rem auto;
    text-align: left;
    background: linear-gradient(
      270deg,
      #00ffea,
      #1affd5,
      #00ccaa,
      #ff6b6b,
      #ff8b8b,
      #ff4c4c,
      #00ffea
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-heading,
  .timeline-heading {
    font-size: 2rem;
    margin: 3rem 0 2rem;
    text-align: left;
    color: var(--highlight);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  /* p {
    font-size: 1.35rem;
    line-height: 1.7;
    font-family: Titillium Web, sans-serif;
    font-weight: 100;
  } */

  .timeline {
    position: relative;
    margin-bottom: 6rem;
    font-weight: 100;
  }

  .timeline-line {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    z-index: 1;
  }

  .timeline-progress {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scaleY(0);
    width: 4px;
    height: 100%;
    background: var(--color);
    box-shadow: 0 0 10px var(--color), 0 0 20px var(--color), 0 0 30px var(--color);
    transform-origin: top;
    z-index: 2;
  }

  .timeline-item {
    position: relative;
    width: 100%;
    margin: 4rem 0;
    display: flex;
    align-items: flex-start;
  }

  .timeline-item.left {
    justify-content: flex-end;
  }

  .timeline-item.right {
    justify-content: flex-start;
  }

  .timeline-node {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color);
    border: 4px solid #222;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .timeline-content {
    max-width: 300px;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color);
    color: var(--color);
    position: relative;
    z-index: 2;
  }

  .timeline-item.left .timeline-content {
    margin-right: 3rem;
    text-align: right;
  }

  .timeline-item.right .timeline-content {
    margin-left: 3rem;
    text-align: left;
  }

  /* Mobile layout */
  @media (max-width: 768px) {
    .timeline-line,
    .timeline-progress {
      left: 20px;
      transform: translateX(0);
    }

    .timeline-item {
      flex-direction: row;
      justify-content: flex-start !important;
      margin: 2rem 0;
    }

    .timeline-item.left .timeline-content,
    .timeline-item.right .timeline-content {
      margin: 0 0 0 3rem;
      text-align: left;
    }

    .timeline-node {
      left: 20px;
    }
  }
</style>
