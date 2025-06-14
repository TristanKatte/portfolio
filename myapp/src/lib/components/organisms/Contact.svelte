<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const gsap = (await import('gsap')).default;
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.contact-content', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 85%',
      },
    });
  });
</script>

<section id="contact" class="contact" aria-labelledby="contact-heading">
  <div class="contact-content">
    <h2 id="contact-heading">Contact</h2>
    <p>Stuur me gerust een bericht of connect via LinkedIn.</p>
    <a href="mailto:jouw@email.com" class="btn primary">Mail mij</a>
  </div>
</section>

<style>
.contact {
  min-height: 100dvh;
  padding: var(--size-7);
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  text-align: center;
}

.contact-content {
  max-width: 60ch;
}

.btn.primary {
  margin-top: 2rem;
  background: var(--brand, #64ffda);
  color: black;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0.5rem;
  display: inline-block;
}
</style>
