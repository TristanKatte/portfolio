<script>
  export let skill;

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
</script>

<div
  class="skill-card"
  role="button"
  tabindex="0"
  aria-label="Skill: {skill.name}"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <div class="card-inner">
    <img src={skill.image} alt={skill.name} />
    <p>{skill.name}</p>
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
    max-width: 64px;
    margin-bottom: 0.75rem;
    filter: drop-shadow(0 0 6px #00fff7);
  }

  .card-inner p {
    color: #00fff7;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
    text-shadow: 0 0 6px rgba(0, 255, 247, 0.3);
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