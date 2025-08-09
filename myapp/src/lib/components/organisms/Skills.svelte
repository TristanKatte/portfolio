<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  const skills = [
    { name: 'HTML', icon: '/images/html.svg', description: 'Semantic HTML and accessibility best practices.' },
    { name: 'CSS', icon: '/images/css.svg', description: 'Responsive layouts, animations, and modern CSS features.' },
    { name: 'JavaScript', icon: '/images/javascript.svg', description: 'ES6+, DOM manipulation, APIs, and interactivity.' },
    { name: 'SvelteKit', icon: '/images/svelte.svg', description: 'Building reactive, fast, and modern web apps.' },
    { name: 'GSAP', icon: '/images/gsap-black.svg', description: 'Smooth, performant animations and scroll effects.' },
    { name: 'Directus', icon: '/images/directus.svg', description: 'Headless CMS for managing and delivering content.' },
  ];

  onMount(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }
  });
</script>

<section class="skills-section">
  <h2 class="skills-title">Skills</h2>
  <div class="skills-grid">
    {#each skills as skill}
      <div class="skill-card">
        <img src={skill.icon} alt={skill.name} class="skill-icon" />
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
.skills-section {
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skills-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.skill-card {
  background: var(--surface);
  color: var(--text);
  border: 8px ridge var(--highlight);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.skill-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 2.85rem;
  margin: 0 auto;
}

.skill-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.skill-card p {
  font-size: 1rem;
  line-height: 1.4;
  color: var(--text, #555);
}
</style>
