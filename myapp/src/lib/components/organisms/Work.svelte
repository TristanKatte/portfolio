<script>
  import ScrollIndicator from '../atoms/ScrollIndicator.svelte';
  import { onMount } from 'svelte';

  onMount(async () => {
    const gsap = (await import('gsap')).default;
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.project', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 85%',
      },
    });
  });
</script>

<section id="work" class="work" aria-labelledby="work-heading">
  <div class="work-content">
    <h2 id="work-heading">Mijn Werk</h2>
    <div class="projects">
      <div class="project">✨ We Love Web blog</div>
      <div class="project">🧠 Bieb in Bloei</div>
      <div class="project">📱 I Love Web blog</div>
    </div>
  </div>
  <ScrollIndicator href="#contact" ariaLabel="Scroll to the contact section" />
</section>

<style>
.work {
  min-height: 100dvh;
  padding: var(--size-7);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: var(--gradient-12);
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.project {
  background: white;
  color: black;
  padding: 2rem;
  border-radius: 1rem;
  min-width: 220px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}
</style>
