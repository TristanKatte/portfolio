<script>
  import { page } from "$app/stores";
  import { marked } from "marked";
  import Button from "../../../lib/components/atoms/Button.svelte";

  const projectData = {
    "bieb-in-bloei": {
      title: "🌱 Bieb in Bloei",
      description: `
### Project goal  
To design a concept for a sustainable, eco-friendly library where the physical and digital space both inspire learning about green living, urban gardening, and environmental responsibility.

### My role  
- Making weather animations from an API based on actual conditions  
- Creating variants of the mascotte  
- Slight back-end work  

### Tools used  
SvelteKit · SCSS · GSAP · Accessibility best practices  

### Description  
We were commissioned to optimize and enhance the current live library-in-bloei website. Previously, several CMD minor students developed their own version of the library-in-bloei website. They experimented with a weather API. They also developed concepts such as a seasonal theme and the mascot Harry. Our task was to integrate these concepts into the live library-in-bloei website.
      `,
      LiveUrl: "https://biebinbloei.nl",
      image: "/images/bieb-in-bloei.png",
    },
    Redpers: {
      title: "🗞️ Redpers",
      description: `
### Project goal  
To create a modern, responsive news website for *Redpers*, an independent journalism initiative, as part of a group project during my third semester at FDND.

### My role  
- Front-end development in SvelteKit  
- cleaning up files using the boy scout rule  
- Styling and layout for responsive reading experiences  

### Tools used  
SvelteKit · WPAPI · CSS Grid & Flexbox · Git Collaboration  

### Description  
We were commissioned to create a modern, responsive news website for *Redpers*, an independent journalism initiative.  
The goal of this project was to make the website more user-friendly and accessible. The site was not yet fully responsive and doesn’t work perfectly on all devices. We worked to change that. We focused on frontend design and development principles, standards, and best practices to create a solution for the client that follows RAP/PE. This includes responsiveness, accessibility, performance, and progressive enhancement.
      `,
      LiveUrl: "https://redpers.agency.fdnd.nl",
      image: "/images/redpers.png",
    },

    "I-Love-Web": {
      title: "🌐 I-Love-Web",
      description: `
### Project goal  
To create a “digital garden” — a personal, ever-growing collection of ideas, experiments, and inspirations about web development and design. Kinda like having my own space on the internet.

### My role   
- Creating a modular card layout for content snippets  
- Writing original content for the site  

### Tools used  
SvelteKit · Markdown · View Transitions API · GSAP for micro-animations  

### Description  
The I Love Web blog is a digital garden where I share my thoughts, experiments, and inspirations about web development and design. This was a small project I made before my internship started. It was a great way to experiment with SvelteKit and build a personal website. 
      `,
      LiveUrl: "https://i-love-web-amber.vercel.app/",
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

### Description  
I wanted my notes to be more than just a page on a Github wiki, so I used a simple card-based layout for the overview and generous spacing + large typography on article pages to improve readability. This was a small project I made during my summer vacation.
      `,
      LiveUrl: "https://we-love-web-blog-one.vercel.app",
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

### Description  
This was an assignment for both the first and second sprint of the study. The goal was to design an interactive, web-based alternative to a printed business card, allowing people to learn about me and access my work instantly online.
      `,
      LiveUrl: "https://your-tribe-for-life-profile-card-liart.vercel.app/",
      image: "/images/visitekaartje.png",
    },
    squadpage: {
      title: "👥 Squad Page",
      description: `
### Project goal  
To introduce our project group in semester 1 of FDND and showcase our work in a fun, collaborative way.

### My role  
- Brainstorming and ideating a page layout 
- Collaborating on global styles and layout consistency  
- Integrating each member’s content into the final page  

### Tools used  
HTML5 · CSS3 · Vanilla JavaScript · GitHub for collaboration  

### Challenges & solutions  
Since this was our first team project, merging different coding styles into one codebase was tricky. We solved this by setting a basic style guide early on, which ensured the final site felt consistent despite multiple contributors.
      `,
      LiveUrl: "https://ebok1.github.io/your-tribe-squad-page/",
      image: "/images/squadpage.png",
    },
    "B-rain": {
      title: "🌧️ B-rain",
      description: `
### Project goal  
To design a website for Spatwater, a local business that helps people to use the rainwater efficiency of their home.

### My role  
- Designing a website layout    
- Adding animations and interactive elements  
- Linking to social media and contact methods  

### Tools used  
Html5 · CSS3 · JavaScript

### Description 
This was an assignment from the 2nd to 5th sprint in my 1st semester at the study Frontend Design & Development. The goal was to design a website for Spatwater, a local business that helps people to use the rainwater efficiency of their home.
      `,
      LiveUrl: "https://tristankatte.github.io/Brain-website/",
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
  <section class="buttons">
    <Button label="back to projects" href="/#projects" />
    {#if project.LiveUrl}
      <Button label="view live site" href={project.LiveUrl} target="_blank" />
    {/if}
  </section>
{:else}
  <p>Project niet gevonden.</p>
{/if}

<style>
  .project-detail {
    min-height: 100dvh;
    max-width: 75ch;
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
    font-family: "Azonix", sans-serif;
    color: var(--brand);
  }

  :global(ul) {
    list-style-type: '☑️';
  }

  :global(.description h2),
  :global(.description h3),
  :global(.description h4),
  :global(.description h5),
  :global(.description h6) {
    font-family: "Azonix", sans-serif;
    font-weight: 300;
    margin-top: 1.5rem;
    font-style: italic;
    color: var(--brand);
    letter-spacing: 1px;
  }

  .project-detail .description {
    font-size: 1.2rem;
    line-height: 1.9;
    margin-bottom: 1em;
    font-family: "Titillium Web", sans-serif;
    letter-spacing: 1.5px;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .buttons :global(.cta-button) {
    flex: 1 1 200px;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    .buttons {
      flex-direction: row; /* don't stack vertically */
      gap: 0.5rem; /* space between */
      justify-content: center;
    }

    .buttons :global(.cta-button) {
      width: auto; /* shrink to content */
      max-width: none; /* no force max-width */
      padding: 0.5rem 1rem; /* smaller padding */
      font-size: 0.9rem; /* slightly smaller text */
    }
  }
</style>
