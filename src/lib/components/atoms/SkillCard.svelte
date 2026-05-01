<script>
  import { onMount } from "svelte";

  export let skill;

  let cardEl;

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--rotateX', `${-((y / rect.height) - 0.5) * 15}deg`);
    card.style.setProperty('--rotateY', `${((x / rect.width) - 0.5) * 15}deg`);
    card.style.setProperty('--glowX', `${x}px`);
    card.style.setProperty('--glowY', `${y}px`);
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.style.setProperty('--glowX', '50%');
    card.style.setProperty('--glowY', '50%');
  }

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const bar = cardEl.querySelector(".skill-bar-fill");
    if (!bar) return;

    gsap.fromTo(bar,
      { width: "0%" },
      {
        width: `${skill.percentage}%`,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardEl,
          start: "top 85%",
          once: true,
        },
      }
    );
  });
</script>

<div
  class="skill-card"
  role="button"
  tabindex="0"
  aria-label="Skill: {skill.name}"
  bind:this={cardEl}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <div class="card-inner">
    <img src={skill.image} alt={skill.name} />
    <p>{skill.name}</p>

    <div class="skill-bar-wrap">
      <div class="skill-bar-fill" data-percentage={skill.percentage}></div>
    </div>
    <span class="skill-percentage">{skill.percentage}%</span>
  </div>
</div>

<style>
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
    background: linear-gradient(270deg, #00fff7, #00c2cb, #ff0066, #00c2cb);
    background-size: 600% 600%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: glowing 6s linear infinite;
    z-index: 0;
  }

  .card-inner {
    position: relative;
    border-radius: inherit;
    background: rgba(20, 20, 30, 0.4);
    backdrop-filter: blur(15px) saturate(180%);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    z-index: 1;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .card-inner::before {
    content: '';
    position: absolute;
    top: var(--glowY, 50%);
    left: var(--glowX, 50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(circle closest-side, rgba(0, 255, 247, 0.25), transparent);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    transition: top 0.1s, left 0.1s;
    z-index: 0;
  }

  .skill-card:hover .card-inner {
    transform: rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg)) scale(1.05);
  }

  .card-inner img {
    max-width: 48px;
    filter: drop-shadow(0 0 6px #00fff7);
    position: relative;
    z-index: 1;
  }

  .card-inner p {
    color: #00fff7;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
    text-shadow: 0 0 6px rgba(0, 255, 247, 0.3);
    position: relative;
    z-index: 1;
    margin: 0;
  }

  /* Bar */
  .skill-bar-wrap {
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .skill-bar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #00ccc9, #0984e3);
    border-radius: 999px;
    box-shadow: 0 0 6px #00ccc9;
  }

  .skill-percentage {
    font-family: "Azonix", monospace;
    font-size: 0.65rem;
    color: rgba(0, 255, 247, 0.5);
    letter-spacing: 2px;
    position: relative;
    z-index: 1;
  }

  @keyframes glowing {
    0%   { background-position: 0% 50%;   }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%;   }
  }

  @media (min-width: 600px) {
    .skill-card {
      flex: 1 1 150px;
    }
  }
</style>