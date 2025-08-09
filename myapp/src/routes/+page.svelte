<script>
  import Hero from '$lib/components/organisms/Hero.svelte';
  import About from '$lib/components/organisms/About.svelte';
  import Skills from '$lib/components/organisms/Skills.svelte';
  import Work from '$lib/components/organisms/Work.svelte';
  import Contact from '$lib/components/organisms/Contact.svelte';

  import { onMount } from 'svelte';
  import gsap from 'gsap';

  onMount(() => {
    gsap.from('#hero', { opacity: 0, y: -50, duration: 1 });
    gsap.from('#about', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('#skills', { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from('#work', { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from('#contact', { opacity: 0, y: 50, duration: 1, delay: 1.5 });
  });
</script>


  <Hero />



  <About />


  <Skills />



  <Work />



  <Contact />

