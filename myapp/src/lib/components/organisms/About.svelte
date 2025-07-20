<script>
  import { onMount } from "svelte";
  import ScrollIndicator from "../atoms/ScrollIndicator.svelte";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    const SplitText = (await import("gsap/SplitText")).default;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    // SplitText voor "about-content"
    const split = new SplitText(".about-content", {
      type: "chars",
      charsClass: "split-char",
    });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        onComplete: () => split.revert(),
      },
    });

    // Timeline animatie voor education items
    gsap.utils
      .toArray(".timeline-item, .timeline-section")
      .forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
        });
      });
  });
</script>

<section id="about" class="about" aria-labelledby="about-heading">
  <header class="about-content">
    <h2 id="about-heading">About me</h2>
    <article>
      <p>
        Hi! I'm Tristan, a 26-year-old Frontend Development student passionate
        about creating visually engaging, accessible, and user-friendly web
        experiences.
      </p>
      <p>
        My journey started in 2016 with HTML & CSS, and I've since explored web
        design and frontend technologies in depth.
      </p>
      <p>
        I work with tools like React, Vue, SvelteKit, and Node.js, and I'm
        familiar with Git, npm, pnpm, and responsive design principles.
      </p>
      <p>
        I focus on writing clean, maintainable code using progressive
        enhancement and accessibility best practices.
      </p>
      <p>
        Outside of coding, I enjoy working out, gaming, experimenting with
        graphic design, and keeping up with tech trends.
      </p>
    </article>
  </header>

  <section class="timeline-section" aria-labelledby="education-heading">
    <header>
      <h2 id="education-heading">My education</h2>
    </header>
    <div class="timeline-items">
      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2016-2018">2016 - 2018</time>
        <div class="timeline-content">
          <h3>DTP at the Grafisch Lyceum Utrecht</h3>
          <p>
            Developed a strong foundation in design principles and software
            skills, particularly with Adobe Creative Cloud. Here, the interest
            of coding began with a subject in my study.
          </p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2018-2022">2018 - 2022</time>
        <div class="timeline-content">
          <h3>Webdesign at the Grafisch Lyceum Utrecht</h3>
          <p>
            Graduated with a specialization in web design, focusing on user
            experience and responsive design.
          </p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2022">2022</time>
        <div class="timeline-content">
          <h3>Communication & Multimedia Design</h3>
          <p>
            A study I briefly attended where I explored various multimedia
            concepts, enhancing my understanding of digital storytelling and
            interactive design.
          </p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2023">2023</time>
        <div class="timeline-content">
          <h3>Gap year</h3>
          <p>
            I took a gap year after realizing Communication & Multimedia Design
            wasn't the right fit. I used this time to work, travel, and begin my
            current Frontend development studies.
          </p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2023-09"
          >September 2023 - present</time
        >
        <div class="timeline-content">
          <h3>Frontend Design & Development</h3>
          <p>
            Currently enrolled in advanced studies focusing on frontend
            development, honing my skills in modern frameworks and design
            systems.
          </p>
        </div>
      </article>
    </div>
  </section>

  <section class="timeline-section" aria-labelledby="experience-heading">
    <header>
      <h2 id="experience-heading">My work experience</h2>
    </header>
    <div class="timeline-items">
      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2025-02">Feb 2025 - Apr 2025</time
        >
        <div class="timeline-content">
          <h3>Internship at VRU</h3>
          <p>First internship from my current study.</p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2021-08">Aug 2021 - Jan 2022</time
        >
        <div class="timeline-content">
          <h3>Internship at ArtDcom</h3>
          <p>
            Second internship from my previous study, focusing on web design,
            WordPress and Adobe Creative Cloud.
          </p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2021-02">Feb 2021 – Jun 2021</time
        >
        <div class="timeline-content">
          <h3>Internship at Centix</h3>
          <p>
            Assisted in developing Centix’s website using Elementor and
            WordPress.
          </p>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2018">2018 - present</time>
        <div class="timeline-content">
          <h3>Cleaner & Warehouse Worker</h3>
          <p>
            Seasonal job at a produce wholesaler, assisting with cleaning and
            stacking crates for deliveries across the Netherlands.
          </p>
        </div>
      </article>
    </div>
  </section>

  <ScrollIndicator href="#work" ariaLabel="Scroll to the projects section" />
</section>

<style>
  .about {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--size-7);
    scroll-snap-align: start;
    text-align: left;
    background-image: var(--gradient-16);
  }

  .about-content {
    max-width: 60ch;
  }

  .about h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--heading-color);
  }

  .about p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--txt-color);
  }

  /* === Mobile-first basisstijl === */
.timeline-section{
	  background-color: transparent;
	  min-height: 100vh;
	  padding: 100px 15px;
    z-index: 0;
}

  .timeline-items{
	  max-width: 1000px;
	  margin:auto;
	  display: flex;
	  flex-wrap: wrap;
	  position: relative;
}

.timeline-items::before{
	  content: '';
	  position: absolute;
	  width: 2px;
	  height: 100%;
	  background-color: #2f363e;
	  left: calc(50% - 1px);
}

.timeline-item{
	  margin-bottom: 40px;
	  width: 100%;
	  position: relative;
}

.timeline-item:last-child{
	  margin-bottom: 0;
}

.timeline-item:nth-child(odd){
    padding-right: calc(50% + 30px);
	  text-align: right;
}

.timeline-item:nth-child(even){
    padding-left: calc(50% + 30px);
}

.timeline-dot{
	  height: 16px;
	  width: 16px;
	  background-color: var(--btn-color);
	  position: absolute;
	  left: calc(50% - 8px);
	  border-radius: 50%;
	  top:10px;
}

.timeline-date{
	font-size: 18px;
	color: var(--txt-color);
	margin:6px 0 15px;
  font-family: "Azonix";
}

.timeline-content{
  background-color: #2f363e;
	padding: 30px;
	border-radius: 5px;
}

.timeline-content h3{
  font-size: 20px;
	color: #ffffff;
	margin:0 0 10px;
	text-transform: capitalize;
	font-weight: 500;
  font-family: "Azonix";
}

.timeline-content p{
  color: #c8c8c8;
	font-size: 16px;
	font-weight: 300;
	line-height: 22px;
  font-family: 'Orbitron Variable', sans-serif;
  letter-spacing: 3px;
}
  /* === Desktop-uitbreiding vanaf 768px (48em) === */
  @media(max-width: 48em){

  h2 {
    display: flex;
    justify-content: flex-start;
  }

  .timeline-section:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

	.timeline-items::before{
		left: 7px;
	}
	.timeline-item:nth-child(odd){
		padding-right: 0;
		text-align: left;
	}
	.timeline-item:nth-child(odd),
	.timeline-item:nth-child(even){
		padding-left: 37px;
	}
	.timeline-dot{
		left:0;
	}
}

@media (max-width: 64em) {

  .timeline-section:nth-child(1) {
    display: flex;
    flex-direction: row;
    max-width: 100%;
  }
}
</style>
