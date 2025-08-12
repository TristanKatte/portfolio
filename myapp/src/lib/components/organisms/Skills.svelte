<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  const skills = {
    frontend: [
      { name: 'HTML', image: '/images/html.svg'},
      { name: 'CSS', image: '/images/css.svg' },
      { name: 'JavaScript', image: '/images/javascript.svg' },
      { name: 'Svelte', image: '/images/svelte.svg' }
    ],
    design: [
      { name: 'Figma', image: '/images/figma.svg' },
      { name: 'Adobe XD', image: '/images/illustrator.svg' },
      { name: 'Photoshop', image: '/images/photoshop.svg' }
    ],
    tools: [
      { name: 'Git', image: '/images/github.svg' },
      { name: 'VS Code', image: '/images/vscode.svg' },
      { name: 'NPM', image: '/images/npm.svg' }
    ]
  };

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10; // tilt max 10deg
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    });
  });
</script>

<section class="skills-section">
  <h2>Skills</h2>

  {#each Object.entries(skills) as [category, items]}
    <h3>{category}</h3>
    <div class="skills-grid">
      {#each items as skill}
        <div 
          class="skill-card" 
          role="button"
          tabindex="0"
          aria-label={`Skill: ${skill.name}`}
          on:mousemove={handleMouseMove} 
          on:mouseleave={handleMouseLeave}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              // Optional: add keyboard interaction here
            }
          }}
        >
          <img src={skill.image} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      {/each}
    </div>
  {/each}
</section>

<style>
  :root {
    --main-bg-color: #040404ff;
    --surface: #313138ff;
    --brand: #00c2cb;
    --brand-soft: #004e50;
    --text: #e0ffff;
    --muted-text: #94a1b2;
    --border: #2c2c34;
    --highlight: #00fff7;
    --danger: #ff0066;
  }

  .skills-section {
    padding: 4rem 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--highlight);
    font-family: "Azonix";
  }

  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: var(--brand);
    text-transform: capitalize;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    position: relative;
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 1rem;
    text-align: center;
    overflow: hidden;
    z-index: 0;
    transition: transform 0.2s ease;
    transform-style: preserve-3d;
    will-change: transform;
    cursor: pointer;
    outline-offset: 3px;
  }

  .skill-card:focus-visible {
    outline: 3px solid var(--highlight);
  }

  .skill-card img {
    max-width: 64px;
    margin-bottom: 0.75rem;
    margin: auto;
  }

  .skill-card p {
    color: var(--text);
    font-size: 1rem;
    margin: 0;
  }

  /* Glowing border animation */
  .skill-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      270deg,
      var(--highlight),
      var(--brand),
      var(--danger),
      var(--brand)
    );
    background-size: 600% 600%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: glowing 6s linear infinite;
    z-index: -1;
  }

  .skill-card:hover::before,
  .skill-card:focus-visible::before {
    animation-duration: 2s; /* Speed up on hover/focus */
  }

  @keyframes glowing {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
