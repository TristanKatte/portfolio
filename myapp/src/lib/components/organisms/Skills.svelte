<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  const skills = {
    frontend: [
      { name: 'HTML', image: '/images/html.svg' },
      { name: 'CSS', image: '/images/css.svg' },
      { name: 'JavaScript', image: '/images/javascript.svg' },
      { name: 'Svelte', image: '/images/svelte.svg' },
      { name: 'Tailwind', image: '/images/tailwind.svg' },
      { name: 'Bootstrap', image: '/images/bootstrap.svg' },
      { name: 'GSAP', image: '/images/greensock.svg' },
      { name: 'Next.js', image: '/images/next-js.svg' },
      { name: 'Power BI', image: '/images/power-bi.svg' }
    ],
    backend: [
      { name: 'Express.js', image: '/images/express-js.svg' },
      { name: 'Node.js', image: '/images/nodejs.svg' }
    ],
    design: [
      { name: 'Figma', image: '/images/figma.svg' },
      { name: 'Adobe Illustrator', image: '/images/illustrator.svg' },
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

    const rotateX = ((y / rect.height) - 0.5) * 15;
    const rotateY = ((x / rect.width) - 0.5) * 15;

    card.style.setProperty('--rotateX', `${-rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);

    // Update glow position
    card.style.setProperty('--glowX', `${x}px`);
    card.style.setProperty('--glowY', `${y}px`);
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.setProperty('--rotateX', `0deg`);
    card.style.setProperty('--rotateY', `0deg`);
    card.style.setProperty('--glowX', `50%`);
    card.style.setProperty('--glowY', `50%`);
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.category-block').forEach((block, i) => {
      const fromX = i % 2 === 0 ? -100 : 100;

      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: 'top 80%',
        },
        opacity: 0,
        x: fromX,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          gsap.from(block.querySelectorAll('.skill-card'), {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });
  });
</script>

<section id="skills" class="skills-section">
  <h2>Skills</h2>

  {#each Object.entries(skills) as [category, items], i}
    <div class="category-block">
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
          >
            <div class="card-inner">
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style>
:root {
  --main-bg-color: #040404;
  --surface: rgba(20, 20, 30, 0.4);
  --brand: #00c2cb;
  --highlight: #00fff7;
}

.skills-section {
  padding: 3rem 1rem;
  max-width: 700px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--brand);
}

.category-block {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: rgba(10,10,20,0.3);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0,255,247,0.1);
  text-align: center;
}

.category-block h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  color: var(--highlight);
  letter-spacing: 3px;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

/* Skill Card */
.skill-card {
  position: relative;
  width: 100%;
  max-width: 350px;
  border-radius: 1rem;
  padding: 2px;
  perspective: 1000px;
  cursor: pointer;
}

.skill-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(270deg, var(--highlight), var(--brand), #ff0066, var(--brand));
  background-size: 600% 600%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: glowing 6s linear infinite;
  z-index: 0;
}

/* Inner glass card */
.card-inner {
  position: relative;
  border-radius: inherit;
  background: var(--surface);
  backdrop-filter: blur(15px) saturate(180%);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  transition: transform 0.3s ease;
}

/* Cursor-follow glow */
.card-inner::before {
  content: '';
  position: absolute;
  top: var(--glowY, 50%);
  left: var(--glowX, 50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(circle closest-side, rgba(0,255,247,0.25), transparent);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  transition: top 0.1s, left 0.1s;
  z-index: 0;
}

/* 3D hover */
.skill-card:hover .card-inner {
  transform: rotateX(var(--rotateX,0deg)) rotateY(var(--rotateY,0deg)) scale(1.05);
}

/* Image and text */
.card-inner img {
  max-width: 64px;
  margin-bottom: 0.75rem;
  filter: drop-shadow(0 0 6px var(--highlight));
}

.card-inner p {
  color: var(--highlight);
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 0 0 6px rgba(0,255,247,0.3);
}

@keyframes glowing {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsive grid for tablets/desktops */
@media(min-width: 600px) {
  .skills-grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .skill-card {
    flex: 1 1 150px;
  }
}

@media(min-width: 900px) {
  .skills-grid {
    gap: 2.5rem;
  }
}
</style>
