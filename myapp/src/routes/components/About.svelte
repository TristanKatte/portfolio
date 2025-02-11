<section class="skillset">
  <button class="strength">My skills</button>
    <div class="skills">
      <svg xmlns="http://www.w3.org/2000/svg" width="744" height="423" viewBox="0 0 744 423" fill="none">
        <path d="M2 126.5V86H258V0M366.5 422.5V0M741.5 133V86H481.5V0" stroke="url(#paint0_linear_2101_768)" stroke-width="4"></path>
        <defs><linearGradient id="paint0_linear_2101_768" x1="371.963" y1="12" x2="359.62" y2="389.388" gradientUnits="userSpaceOnUse">
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
  </div>

  <div class="skills-graphic">
    <button class="skill">PHOTOSHOP</button>
    <button class="skill">ILLUSTRATOR</button>
    <button class="skill">INDESIGN</button>
    <button class="skill">FIGMA</button>
    <button class="skill">ADOBE XD</button>
    <button class="skill">AFTER EFFECTS</button>
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
    <button class="skill">WIREFRAME</button>
    <button class="skill">INDESIGN</button>
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
    color: teal;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    z-index: 10
  }
    .skillset {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 150px;
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
    align-items: flex-start;
    align-content: flex-start;
    gap: 20px 15px;
    flex-shrink: 0;
    flex-wrap: wrap;
    }

    .skills-other {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 5em;
    }

    .skills-additional, .skills-design {
      display: flex;
      flex-direction: row;
      gap: 20px
    }

    .all-skills {
    display: grid;
    grid-gap: 100px;
    gap: 100px;
    grid-template-columns: 1fr 1fr;
    margin-top: -200px;
    
    }
</style>
