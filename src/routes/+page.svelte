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
<svelte:head>
  <!-- Basic SEO -->
  <title>Tristan Katte | Portfolio</title>
  <meta name="description" content="Portfolio of Tristan Katte, a frontend developer specializing in SvelteKit, modern web animations, and accessible UI design." />
  <meta name="keywords" content="Frontend Developer, SvelteKit, GSAP, Portfolio, Web Design, Tristan Katte" />
  <meta name="author" content="Tristan Katte" />
  <link rel="canonical" href="https://tristankatte.com" />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="Tristan Katte | Portfolio" />
  <meta property="og:description" content="Portfolio of Tristan Katte, a frontend developer specializing in SvelteKit, modern web animations, and accessible UI design." />
  <meta property="og:image" content="https://tristankatte.com/images/og-image.jpg" width = "1200" height = "630" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tristankatte.com" />

  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Tristan Katte",
      "url": "https://tristankatte.com",
      "sameAs": [
        "https://github.com/yourusername",
        "https://www.linkedin.com/in/yourusername",
        "https://twitter.com/yourusername"
      ],
      "jobTitle": "Frontend Developer"
    })}
  </script>
</svelte:head>

  <Hero />



  <About />


  <Skills />



  <Work />



  <Contact />

