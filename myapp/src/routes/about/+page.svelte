

<script>
  import { onMount } from 'svelte';
  
  onMount(async () => {
    const { default: gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
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
  <article class="journey">
    <h2>My Journey</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>DTP at the Grafisch Lyceum Utrecht</h3>
          <p>Laid the foundation for my skills with Adobe Creative Cloud</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Webdesign at Grafisch Lyceum Utrecht</h3>
          <p>Graduated with a focus on web development and design principles.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Communication & Multimedia Design</h3>
          <p>Briefly attended to explore broader multimedia concepts.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Current Study</h3>
          <p>Currently pursuing advanced studies in web development and design.</p>
        </div>
      </div>
    </div>
  </article>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 90px 90px;
    font-family: 'Orbitron Variable', sans-serif;
  }

  h2 {
    color: var(--heading-color);
    font-weight: 400;
    margin-bottom: 10px;
    font-family: "Azonix";
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: var(--heading-color);
    transform: translateX(-50%);
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
  }

  .timeline-item:nth-child(even) {
    left: 50%;
  }

  .timeline-marker {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: var(--heading-color);
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .timeline-item:nth-child(odd) .timeline-marker {
    right: -10px;
  }

  .timeline-item:nth-child(even) .timeline-marker {
    left: -10px;
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
  }

  .timeline-content h3 {
    color: var(--heading-color);
    margin-bottom: 10px;
    font-family: "Azonix";
  }

  .timeline-content p {
    color: var(--txt-color);
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.5px;
  }
</style>
