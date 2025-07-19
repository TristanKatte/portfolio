<script>
  import { onMount } from "svelte";
  import ScrollIndicator from "../atoms/ScrollIndicator.svelte";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    const SplitText = (await import("gsap/SplitText")).default;

    gsap.registerPlugin(ScrollTrigger, SplitText);

const split = new SplitText(".about-content", {
  type: "lines",
  linesClass: "split-line"
});

gsap.from(split.lines, {
  duration: 1,
  y: 50,
  autoAlpha: 0,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%",
  },
});
  });
</script>

<section id="about" class="about" aria-labelledby="about-heading">
  <section class="about-content">
    <h2>About me</h2>
    <p>
      Hello! I'm Tristan, I'm 26 years old and a Frontend development student
      with a passion for creating visually stunning, accessible, progressively
      enhanced and user-friendly web experiences.
    </p>

    <p>
      I've always been drawn to technology, and after exploring different
      creative fields I found my passion in coding. I started with Html and CSS
      in a study back in 2016 and from 2018 to 2022, I dived into learning
      Webdesign.
    </p>

    <p>
      I specialize in accessibility, progressive enhancement and responsive
      design with experience in React, Vue.js, Nodejs Nextjs and Sveltekit. I'm
      also familiar with version control (Git), npm package managers (npm, pnpm,
      yarn), and building responsive designs that work on all screen sizes.
    </p>

    <p>
      I believe in writing clean, maintainable code and focusing on delivering a
      seamless user experience. I'm passionate about staying up-to-date with the
      latest web technologies and always looking for ways to improve the sites I
      build.
    </p>

    <p>
      As I continue growing as a developer, I’m excited to take on more complex
      projects and learn new technologies. My goal is to help create web
      applications that make a positive impact and are accessible to everyone.
    </p>

    <p>
      Outside of coding, you’ll find me in the gym, playing video games,
      experimenting with graphic design, or exploring the latest tech trends.
    </p>
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
    background-color: #1f1c2c ;
  }

  .about-content {
    max-width: 60ch;
  }

  .about h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--heading-color);
  }

  .about p {
    font-size: 1.125rem;
    line-height: 1.7;
    opacity: 1;
    color: #928dab;
  }
</style>
