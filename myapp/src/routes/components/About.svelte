<script>
    import { onMount } from 'svelte';
  
  onMount(async () => {
    const { default: gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.skillset').forEach((item, index) => {

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
        delay: index * 0.8
      });
    });
  });
</script>

<section class="skillset">
  <button class="strength">My skills</button>
    <div class="skills">
      <svg class="svg-line-class" xmlns="http://www.w3.org/2000/svg" width="744" height="423" viewBox="0 0 744 423" fill="none">
        <path d="M2 126.5V86H258V0M366.5 422.5V-100M741.5 133V86H481.5V0" stroke="url(#paint0_linear_2101_768)" stroke-width="4"></path>
        <defs><linearGradient id="paint0_linear_2101_768" x1="371.963" y1="12" x2="359.62" y2="989.388" gradientUnits="userSpaceOnUse">
        <stop stop-color="#292929"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient></defs></svg>
    </div>
<div class="all-skills">
  <div class="skills-frontend">
    <button class="skill">HTML</button>
    <button class="skill">CSS</button>
    <button class="skill">Javascript</button>
    <button class="skill">EJS</button>
    <button class="skill">EXPRESS</button>
    <button class="skill">SVELTE</button>
    <button class="skill">SVELTEKIT</button>
    <button class="skill">NEXTJS</button>
    <button class="skill">GSAP</button>
    <button class="skill">VueJS</button>
    <button class="skill">React</button>
  </div>

  <div class="skills-graphic">
    <button class="skill">PHOTOSHOP</button>
    <button class="skill">ILLUSTRATOR</button>
    <button class="skill">INDESIGN</button>
    <button class="skill">FIGMA</button>
    <button class="skill">SKETCHNOTING</button>
  </div>


</div>
<div class="skills-other">
  <div class="skills-additional">
    <button class="skill">Github</button>
    <button class="skill">Wordpress</button>
    <button class="skill">Vercel</button>
  </div>
  <div class="skills-design">
    <button class="skill">UI & UX DESIGN</button>
    <button class="skill">WIREFRAMING</button>
    <button class="skill">Optimizing</button>
  </div>
</div>
  </section>
<style>

  .strength {
    border-radius: 6px;
    border: 4px solid var(--black_border,#292929);
    background: var(--black,#000);
    display: inline-block;
    padding: 20px 70px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    z-index: 10;
  }
  
  .skillset {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 1.5em;
    }

  .skill {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: start;
    padding: 7px 18px;
    border:2px solid var(--skills_stroke,#0f172a);
    background: var(--skills_gradient_bg,linear-gradient(261deg,#1f2739 5.73%,rgba(23,38,71,.98) 93.52%));
    color: var(--skills_text_color,#56b6d4);
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 5px;
    outline: 2px solid var(--primary_light_icon);
    outline-offset: 0;
    letter-spacing: 1.2px;
    }

    .skills-frontend, .skills-graphic {
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 20px 15px;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-top: -14em;
    }

    .skills-other {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center; 
    margin-top: 5em;
    }

    .skills-additional, .skills-design {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: center; 
    }

    .all-skills {
    display: grid;
    grid-gap: 100px;
    gap: 100px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    max-width: 75%;
    }

    @media (min-width:30em) {

      .svg-line-class { 
        height: 120%; 
        top: -10%; 
    }
      .all-skills {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 8em;
      }

      .skillset {
        width: 100%;
      }

      .all-skills {
        width: 100%;
        flex-flow: row;
      }

      .skill {
        width: 100%;
        font-size: .8em;
      }

      .skills-frontend {
        justify-content: flex-start;
        flex-flow: column;
      }

      .skills-graphic {
        justify-content: flex-end;
        flex-flow: column-reverse;
      }

      .skills-other {
        flex-flow: column;
        justify-content: flex-start;
      }
    }

    @media (min-width: 48em) {
      .svg-line-class { 
        height: 120%; 
        top: -10%; 
    }
      .all-skills {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 8em;
      }


      .skillset {
        width: 100%;
      }

      .skill {
        width: 100%;
        font-size: .8em;
      }

      .skills-frontend {
        display: flex;
        justify-content: flex-start;
        flex-flow: column;
      }

      .skills-graphic {
        justify-content: flex-end;
        flex-flow: column-reverse;
      }

      .skills-other {
        flex-flow: column;
        justify-content: flex-start;
      }


    }
</style>
