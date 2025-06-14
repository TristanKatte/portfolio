<script>
  import { onMount } from 'svelte';
    import ScrollIndicator from '../atoms/ScrollIndicator.svelte';

  onMount(async () => {
    const gsap = (await import('gsap')).default;
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.about-content', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      },
    });
  });
</script>

<section id="about" class="about" aria-labelledby="about-heading">
  <div class="about-content">
    <h2 id="about-heading">Over Mij</h2>
    <p>
      Ik ben een frontend developer met passie voor animatie, toegankelijkheid en performance.
      Mijn focus ligt op creatieve user interfaces en progressieve webontwikkeling.
    </p>
  </div>
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
  text-align: center;
  background-image: var(--gradient-16);
}

.about-content {
  max-width: 60ch;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1.125rem;
  line-height: 1.7;
  opacity: 0.85;
}
</style>
