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
    { title: "2023", text: "Gap year working, travelling, and starting studies at FDND.", color: "#00ffea" }
  ];

  const jobItems = [
    { title: "Internship at the VRU", text: "Helped building reports for the VRU.", color: "#ff6b6b" },
    { title: "Internship at ArtDcom", text: "Helped building websites and optimizing them.", color: "#ff8b8b" },
    { title: "Internship at Centix", text: "Helped building and optimizing the Wordpress website for Centix.", color: "#ff4c4c" },
    { title: "Warehouse worker", text: "Seasonal job at VersAlert, handling sorting, packing and cleaning.", color: "#ff6b6b" }
  ];

  const timelines = [
    { title: "My Education", items: educationItems },
    { title: "Work Experience", items: jobItems }
  ];

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    // Split-text + gradient animation
    const aboutTextEl = document.querySelector(".about-text");
    const words = aboutTextEl.textContent.trim().split(" ");
    aboutTextEl.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

    gsap.from(".about-text", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutTextEl,
        start: "top 85%",
      }
    });

    gsap.fromTo(
      ".about-text .word",
      { opacity: 0, y: 20, rotationZ: 5, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        rotationZ: 0,
        scale: 1,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 0.6,
        scrollTrigger: {
          trigger: aboutTextEl,
          start: "top 80%",
        }
      }
    );

    // Animate gradient shift
    gsap.to(".about-text", {
      backgroundPosition: "200% center",
      ease: "linear",
      duration: 8,
      repeat: -1
    });

    // Timelines animations
    const allTimelines = document.querySelectorAll(".timeline");

    allTimelines.forEach((timeline) => {
      const nodes = gsap.utils.toArray(timeline.querySelectorAll(".timeline-node"));
      const items = gsap.utils.toArray(timeline.querySelectorAll(".timeline-item"));
      const progressLine = timeline.querySelector(".timeline-progress");

      gsap.fromTo(
        progressLine,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );

      nodes.forEach((node, i) => {
        const item = items[i].querySelector(".timeline-content");
        const color = node.style.getPropertyValue("--color");

        ScrollTrigger.create({
          trigger: node,
          start: "top center",
          onEnter: () => {
            gsap.to(node, {
              scale: 1.2,
              opacity: 1,
              boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`,
              duration: 0.5,
            });
            gsap.to(item, {
              boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(node, { scale: 1, opacity: 1, boxShadow: "none", duration: 0.3 });
            gsap.to(item, { boxShadow: "none", duration: 0.3 });
          },
        });
      });

      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    });
  });
</script>

<section class="about-me">
  <p class="about-text">{introText}</p>

  {#each timelines as timeline}
    <h2 class="timeline-heading">{timeline.title}</h2>
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-progress" style="--color: {timeline.items[0].color}"></div>

      {#each timeline.items as item, i}
        <div class="timeline-item {i % 2 === 0 ? 'left' : 'right'}">
          <div class="timeline-content" style="--color: {item.color}">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <div class="timeline-node" style="--color: {item.color}"></div>
        </div>
      {/each}
    </div>
  {/each}
</section>

<style>
  section.about-me {
    max-width: 900px;
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

  .timeline-heading {
    font-size: 2rem;
    margin: 3rem 0 2rem;
    color: var(--brand);
    text-align: center;
  }

  .timeline {
    position: relative;
    margin-bottom: 6rem;
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
    justify-content: flex-start;
    align-items: flex-start;
  }

  .timeline-item.left {
    justify-content: flex-start;
    text-align: left;
    padding-right: 70px;
  }

  .timeline-item.right {
    justify-content: flex-end;
    text-align: right;
    padding-left: 70px;
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    max-width: 350px;
    z-index: 3;
    transition: box-shadow 0.3s ease;
  }

  .timeline-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
    color: white;
  }

  .timeline-content p {
    font-size: 1rem;
    color: white;
    opacity: 0.85;
  }

  .timeline-node {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: var(--color);
    border-radius: 50%;
    opacity: 0.2;
    z-index: 4;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  @media (max-width: 767px) {
    .timeline-line,
    .timeline-progress {
      left: 20px;
      transform: none;
    }

    .timeline-item {
      flex-direction: row;
      justify-content: flex-start !important;
      margin: 3rem 0;
    }

    .timeline-item.left,
    .timeline-item.right {
      padding-left: 50px;
      padding-right: 0;
      text-align: left;
    }

    .timeline-node {
      left: 20px;
    }
  }
</style>
