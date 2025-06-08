<script>
  import { onMount } from 'svelte';

onMount(async () => {
  const { default: gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('.home').forEach((item, index) => {

    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.2
    });
  });
});
</script>


<main>

<article class="home">
  <section>
    <figure>
      <enhanced:img class="pic img" alt="Foto van mij" src="$lib/assets/profielfoto-zw.jpg" />
    </figure>
  </section>
<section class="home-content">
  <h2>About me</h2>
  <p>Hi! I'm Tristan Katte. I am a passionate developer and designer who loves to create beautiful and functional web applications.
     I am currently in my 2nd and last year at the study Frontend Design & Development at the Amsterdam University of Applied Sciences.
  </p>
    <a class="button"  href="/about" aria-label="More about me">
      Read more
    </a>
</section>

</article>
</main>


