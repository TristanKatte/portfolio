<script>
      import { onMount } from 'svelte';

onMount(async () => {
  const { default: gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('.featured-projects').forEach((item, index) => {

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

<article class="featured-projects">
    
<section>
        <h2>My featured Projects</h2>
    <section class="projects-grid">
        <article class="project-card">
            <section class="project-image">
                <enhanced:img class="bright"  src="/static/images/fresk-digital.png" alt="" />
            </section>
            <section class="project-content">
                <h3>Fresk.Digital</h3>
                <p>Fresk.Digital was a project i did in the final sprint of my 1st year at the study Frontend Design & Development.
                   Here, I made a website with <strong>NodeJS, EJS and Express</strong> to build a dashboard for the employees of Fresk.digital.
                </p>
                <a class="project-button" href="https://sprint-12-proof-of-concept-p6cy.onrender.com/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                <enhanced:img class="bright" src="/static/images/digital-garden.png" alt="" />
            </section>
            <section class="project-content">
                <h3>Digital garden</h3>
                <p>A digital garden where i kept a journey from what i learned each sprint in my 3rd semester at the study Frontend Design & Development. Made with <strong>Sveltekit, Markdown</strong>
                </p>
                <a class="project-button" href="https://i-love-web-amber.vercel.app/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                <strong>(Only works on desktop)</strong>

                <enhanced:img class="bright" src="/static/images/visitekaartje.png" alt="">
            </section>
            <section class="project-content">
                <h3>Digital business card</h3>
                <p> A digital business card where i introduce myself and what my skills are. Made with <strong>Sveltekit, Directus</strong>
                </p>
                <a class="project-button" href="https://your-tribe-for-life-profile-card-liart.vercel.app/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                <enhanced:img class="bright" src="/static/images/b-rain.png" alt="">
            </section>
            <section class="project-content">
                <h3>B-rain website</h3>
                <p>This was a website i made in my 1st semester at the study Frontend Design & Development for an actual client. Made with <strong>Html, css, Javascript</strong>
                </p>
                <a class="project-button" href="https://tristankatte.github.io/Brain-website/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                
                <enhanced:img class="bright" src="/static/images/redpers.png" alt="">
            </section>
            <section class="project-content">
                <h3>Redpers website</h3>
                <p>A newswebsite that i made in a group project in my 3rd semester at the study Frontend Design & Development. Made with <strong>Sveltekit, WPAPI</strong>
                </p>
                <a class="project-button" href="https://redpers.agency.fdnd.nl/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                <enhanced:img class="bright" src="/static/images/informaat.png" alt="">
            </section>
            <section class="project-content">
                <h3>Informaat website</h3>
                <p>An assignment i got in the final sprint of my 1st semester. Here, I had to make a desktop-first website into a mobile-first design given from a design file. Made with <strong>Html, CSS</strong>
                </p>
                <a class="project-button" href="https://tristankatte.github.io/Informaat-opdracht/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                <enhanced:img class="bright" src="/static/images/squadpage.png" alt="">
            </section>
            <section class="project-content">
                <h3>Squad page</h3>
                <p>During the 1st sprint of the study, we got a group assignment to build a fun squadpage. My team had the idea to build a slot machine where you can actually run the machine and the students that you got, 
                    had also a link to their digital business card.. Made with <strong>Html, CSS, Javascript</strong>
                </p>
                <a class="project-button" href="https://ebok1.github.io/your-tribe-squad-page/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-image">
                <enhanced:img class="bright" src="/static/images/prototype-1.png" alt="">
            </section>
            <section class="project-content">
                <h3>Prototype website</h3>
                <p>During the 2nd attempt at my final exam for the study Webdesign at the Grafisch Lyceum Utrecht, I had to design and build a prototype website for Wable.
                    
                     Made with <strong>Wordpress, Elementor</strong>
                </p>
                <a class="project-button" href="https://tristankatte.nl/nieuw_portfolio/project-educatief-platform-wable/" target="_blank">View Live site</a>
            </section>
        </article>

        <article class="project-card">
            <section class="project-content">
                <h3>Want to see more of my works?</h3>
                <p>Click the button below to see more of my projects on Github.
                </p>
                <a class="project-button" href="https://github.com/TristanKatte" target="_blank">View all projects on Github</a>
            </section>
        </article>
        
    </section>
</article>

<article class="other-works">
    <h2>Some other work I made</h2>
    <section class="grid-wrapper">
    <div class="columns">
        <div class="column column-reverse">            
            <img src="/images/spiegel_1.jpg" alt="" />
            <img src="/images/vogelpers_2.jpg" alt="" />
            <img src="/images/texture_leaf.jpg" alt="" />
            <img src="/images/lp_hoes_3.jpg" alt="" />
            <img src="/images/vogelpers_4.jpg" alt="" />
            <img src="/images/texture_gold.jpg" alt="" /> 
            <img src="/images/hdr_2.jpg" alt="" />
            <img src="/images/kikvors_3.jpg" alt="" />
            <img src="/images/hdr_haventje.jpg" alt="" />
            <img src="/images/hdr_3.jpg" alt="" /></div>
        <div class="column">
            <img src="/images/kikvors_1.jpg" alt="" />
            <img src="/images/lp_hoes_1.jpg" alt="" />
            <img src="/images/penrose.jpg" alt="" />
            <img src="/images/perspectief_1.jpg" alt="" />
            <img src="/images/lp_hoes_2.jpg" alt="" />
            <img src="/images/planeet.jpg" alt="" />
            <img src="/images/kunst_1.jpg" alt="" />
            <img src="/images/esthetiek_1.jpg" alt="" />
            <img src="/images/web_banner.jpg" alt="" />
            <img src="/images/fingerprint.jpg" alt="" />  
        </div>
        <div class="column column-reverse">
            <img src="/images/kunst_3.jpg" alt="" />     
            <img src="/images/esthetiek_3.jpg" alt="" />
            <img src="/images/kikvors_2.jpg" alt="" />
            <img src="/images/kunst_2.jpg" alt="" />
            <img src="/images/texture_brick.jpg" alt="" />
            <img src="/images/perspectief_2.jpg" alt="" />
            <img src="/images/spiegel_2.jpg" alt="" />
            <img src="/images/perspectief_3.jpg" alt="" />
            <img src="/images/spiegel_3.jpg" alt="" />
        </div>
    </div> 
    </section>
</article>

<style>
h2 {
    display: flex;
    justify-content: space-evenly;
    color: var(--heading-color);
    font-family: "Azonix";
    text-align: left;
}

 h3 {
        color: var(--heading-color);
        font-family: "Azonix";
        text-align: left;
    }
    
article {
        width: 100%;
        padding: 2rem 1rem;
        font-family: 'Orbitron Variable', sans-serif;
        margin-bottom: 10em;
    }

.projects-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: normal;
        align-content: center;
        scroll-behavior: smooth;
        scrollbar-width: none;
        margin-bottom: 5em;
    }

.project-card {
        position: relative;
        background: var(--project-card-color);
        padding: 1.5rem;
        border-radius: 50px;
        border: 3px solid var(--btn-color);
        transition: transform 0.5s ease-in-out;
        flex: 1 1 700px;
        width: 500px;
        height: 750px;
        margin: 1.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

.project-card:hover {
        transform: translateY(-50px);
    }

.project-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        align-items: flex-start;
    }

.project-card a {
        text-decoration: none;
    }

.project-card:nth-child(1) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(2) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(3) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(4) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(5) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(6) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(7) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(8) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-card:nth-child(9) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

.project-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        margin-right: 2em;
    }

.bright {
        display: block;
        height: 12em;
        max-width: 100%;
    }

    .project-content p {
        max-width: 800px;
        margin-bottom: 1.5em;
        color: var(--txt-color);
    }

    strong {
        color: var(--strong-color);
        font-size: .95em;
        font-style: italic;
    }

    .project-button {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 15px 45px;
        width:70%;
        background: transparent;
        border-radius: 45px;
        border: 2px solid #00c2cb;
        outline: 2px solid #00c2cb;
        outline-offset: -2px;
        font-size: .95rem;
        font-family: 'Orbitron Variable', sans-serif;
        color: var(--txt-color);
        font-weight: 500;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        transition: outline-offset 200ms ease;
        display: flex;
        justify-content: center;
        align-content: center;
        margin-top: auto;
    }

    .project-button:hover {
        color: #e0ffff;
        background-color: var(--btn-color);
        outline-offset: 4px;
    }

.grid-wrapper {
    columns: 400px;
    padding: 1em;
    display: flex;
    justify-content: center;
    margin-bottom: .6em;
}

img {
    margin-bottom: 1.6em;
    border-radius: 12px;
}

.columns {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}

.column {
	display: flex;
	flex-direction: column;
    margin: .6em;
}

.column-reverse {
	transform: translateY(calc(-100% + 100vh));
}

.columns {
	overflow-y: hidden;
}

.column-reverse {
	flex-direction: column-reverse;
}

@keyframes adjust-position {
	/* Start position: shift entire column up, but not so that it goes out of view */
	from {
		transform: translateY(calc(-100% + 100vh));
	}

	/* End position: shift entire column down, but not so that it goes out of view */
	to {
		transform: translateY(calc(100% - 100vh));
	}
}

.column-reverse {
	animation: adjust-position linear forwards;
	animation-timeline: scroll(root block);
}

@media (max-width: 30em) {
    .columns {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 48em) {
    .columns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: normal;
        align-content: center;
        scroll-behavior: smooth;
        scrollbar-width: none;
        margin-bottom: 3em;
    }


}

@media (max-width: 64em) {
    .projects-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: normal;
        align-content: center;
        scroll-behavior: smooth;
        scrollbar-width: none;
        margin-bottom: 3em;
    }

    .project-card {
        position: relative;
        background: var(--project-card-color);
        padding: 1.5rem;
        border-radius: 50px;
        border: 3px solid var(--btn-color);
        transition: transform 0.5s ease-in-out;
        flex: 1 1 700px;
        width: 400px;
        height: 680px;
        margin: 1.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .grid-wrapper {
        columns: 300px;
        padding: 2em;
        display: flex;
        justify-content: flex-start;
        margin-bottom: .6em;
    }

    .columns {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>
