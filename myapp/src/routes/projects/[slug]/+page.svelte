<script>
  import { page } from "$app/stores";
  import { marked } from "marked";

  const projectData = {
    "bieb-in-bloei": {
      title: "🌱 Bieb in Bloei",
      description: `
### Project goal  
To design a concept for a sustainable, eco-friendly library where the physical and digital space both inspire learning about green living, urban gardening, and environmental responsibility.

### My role  
- Concept development & branding  
- UI/UX design with a nature-inspired theme  
- Front-end implementation of the website prototype  

### Tools used  
SvelteKit · SCSS · GSAP · Accessibility best practices  

### Challenges & solutions  
One challenge was making the digital space feel as “alive” as the concept itself. I solved this by using soft motion design — small animations that mimic natural growth patterns — and a color palette inspired by foliage, soil, and sunlight. This kept the site engaging without becoming distracting.
      `,
      image: "/images/bieb-in-bloei.png",
    },
    Redpers: {
      title: "🗞️ Redpers",
      description: `
### Project goal  
To create a modern, responsive news website for *Redpers*, an independent journalism initiative, as part of a group project during my third semester at FDND.

### My role  
- Front-end development in SvelteKit  
- Integrating WPAPI to fetch live content from WordPress  
- Styling and layout for responsive reading experiences  

### Tools used  
SvelteKit · WPAPI · CSS Grid & Flexbox · Git Collaboration  

### Challenges & solutions  
The main challenge was ensuring smooth and fast article loading from the WordPress API without blocking the interface. I implemented efficient fetch requests and loading states, so users could start reading while other content continued to load in the background.
      `,
      image: "/images/redpers.png",
    },
    Informaat: {
      title: "💻 Informaat",
      description: `
### Project goal  
To design a **desktop-first** website for the design agency Informaat, prioritizing a pixel-perfect, professional layout that reflects the agency’s brand identity.
<br>
<br>
### My role  
- Layout design for large screens  
- Front-end coding with strict adherence to a design system  
- Implementing subtle, brand-aligned animations 
<br>
<br> 

### Tools used  
HTML5 · CSS3   
<br>
<br>
### Challenges & solutions  
Switching from my usual **mobile-first** mindset to desktop-first was an adjustment. I solved this by defining the desktop grid system first, then creating progressive CSS breakpoints that gracefully adapted to tablets and mobiles.
      `,
      image: "/images/informaat.png",
    },
    "I-Love-Web": {
      title: "🌐 I-Love-Web",
      description: `
### Project goal  
To create a “digital garden” — a personal, ever-growing collection of ideas, experiments, and inspirations about web development and design.

### My role  
- Designing a non-linear navigation system  
- Creating a modular card layout for content snippets  
- Writing original content for the site  

### Tools used  
SvelteKit · Markdown · Tailwind CSS · GSAP for micro-animations  

### Challenges & solutions  
The hardest part was designing a navigation that encouraged exploration rather than strict categorization. I solved this by linking related posts together and using visual tags so users could discover content through curiosity instead of menus.
      `,
      image: "/images/digital-garden.png",
    },
    "we-love-web": {
      title: "💬 We Love Web",
      description: `
### Project goal  
To document guest lectures and events at FDND in a blog format that is inviting, easy to read, and visually consistent.

### My role  
- Designing and coding the blog overview and article pages  
- Structuring content for accessibility and SEO  
- Creating a scalable style system for adding future articles  

### Tools used  
SvelteKit · Markdown · View Transitions API  

### Challenges & solutions  
The key challenge was making each article engaging without cluttering the reading experience. I used a simple card-based layout for the overview and generous spacing + large typography on article pages to improve readability.
      `,
      image: "/images/we-love-web.png",
    },
    visitekaartje: {
      title: "💼 Digital Business Card",
      description: `
### Project goal  
To design an interactive, web-based alternative to a printed business card, allowing people to learn about me and access my work instantly online.

### My role  
- Designing the single-page layout  
- Adding animations and interactive elements  
- Linking to portfolio work, social media, and contact methods  

### Tools used  
SvelteKit · Tailwind CSS · GSAP for animations  

### Challenges & solutions  
The main challenge was balancing information density with clarity. I solved this by using section-based navigation and reveal animations to keep the page minimal while still feeling dynamic.
      `,
      image: "/images/visitekaartje.png",
    },
    squadpage: {
      title: "👥 Squad Page",
      description: `
### Project goal  
To introduce our project group in semester 1 of FDND and showcase our work in a fun, collaborative way.

### My role  
- Creating my individual profile section  
- Collaborating on global styles and layout consistency  
- Integrating each member’s content into the final page  

### Tools used  
HTML5 · CSS3 · Vanilla JavaScript · GitHub for collaboration  

### Challenges & solutions  
Since this was our first team project, merging different coding styles into one codebase was tricky. We solved this by setting a basic style guide early on, which ensured the final site felt consistent despite multiple contributors.
      `,
      image: "/images/squadpage.png",
    },
    "B-rain": {
      title: "🌧️ B-rain",
      description: `
### Project goal  
To design a website for a local business that sells rain gear for outdoor activities.

### My role  
- Designing the website layout    
- Adding animations and interactive elements  
- Linking to social media and contact methods  

### Tools used  
SvelteKit · Tailwind CSS · GSAP for animations  

### Challenges & solutions  
The main challenge was balancing information density with clarity. I solved this by using section-based navigation and reveal animations to keep the page minimal while still feeling dynamic.
      `,
      image: "/images/b-rain.png",
    },
  };

  $: slug = $page.params.slug;
  $: project = projectData[slug];
  $: htmlDescription = project ? marked(project.description) : "";
</script>

{#if project}
  <section class="project-detail">
    <h1>{project.title}</h1>
    <img src={project.image} alt={project.title} />
    <div class="description">
      {@html htmlDescription}
    </div>
  </section>
{:else}
  <p>Project niet gevonden.</p>
{/if}

<style>
  .project-detail {
    min-height: 100dvh;
    max-width: 60ch;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    text-align: left;
    margin-top: 12em;
  }

  .project-detail img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  .project-detail h1 {
    font-size: 3.55rem;
    margin-bottom: 1rem;
    font-family: "Nunito", sans-serif;
    color: var(--brand);
  }


:global(.description h2),
:global(.description h3),
:global(.description h4),
:global(.description h5),
:global(.description h6) {
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  margin-top: 1.5rem;
  font-style: italic;
  color: var(--brand);
}

  .project-detail .description {
    font-size: 1.2rem;
    line-height: 1.9;
    margin-bottom: 1em;
    font-family: "Titillium Web", sans-serif;
  }
</style>
