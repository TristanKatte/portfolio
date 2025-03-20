<script>
    
    





</script>

<article>
<section>
    <h2>My Projects</h2>
    <section class="projects-grid">
        <article class="project-card">
            <a href="https://sprint-12-proof-of-concept-p6cy.onrender.com/" target="_blank">
                    <h3>Fresk.Digital</h3>    
                <enhanced:img class="bright" src="/static/images/fresk-digital.png" alt="" />
            </a>
            <strong>NodeJS, EJS, Express</strong>
        </article>
        
        <article class="project-card">
            <a href="https://i-love-web-amber.vercel.app/" target="_blank">
                    <h3>Digital garden</h3>
                <enhanced:img class="align-top" src="/static/images/digital-garden.png" alt="" />
            </a>
            <strong>Sveltekit, Markdown</strong>
        </article>
        
        <article class="project-card">
            <a href="https://your-tribe-for-life-profile-card-liart.vercel.app/" target="_blank">
                <h3>Visitekaartje</h3>
                <enhanced:img src="/static/images/visitekaartje.png" alt="">
            </a>
            <div>     
                <strong>NodeJS, EJS, Express</strong>
            </div>
        </article>
        
        <article class="project-card">        
            <a href="https://tristankatte.github.io/Brain-website/" target="_blank">
                <h3>B-rain</h3>
                <enhanced:img class="align-top" src="/static/images/b-rain.png" alt="" />
            </a>
            <strong>HTML, CSS, JS</strong>
        </article>
        
        <article class=" project-card">
            <a href="https://redpers.agency.fdnd.nl/" target="_blank">
                <h3>Redpers</h3>
                <enhanced:img src="/static/images/redpers.png" alt="" />
            </a>
            <strong>Sveltekit, WPAPI</strong>
        </article>

        <article class="project-card">
           
            <a href="https://tristankatte.github.io/Informaat-opdracht/" target="_blank">
                <h3>Informaat</h3>
                <enhanced:img src="/static/images/informaat.png" alt="" />
            </a>
            <div> 
                <strong>HTML, CSS</strong>
            </div>
        </article>

                <article class="project-card">
            <a href="https://ebok1.github.io/your-tribe-squad-page/" target="_blank">
                <h3>Squad Page</h3>
                <enhanced:img src="/static/images/squadpage.png" alt="" />
            </a>
            <div> 
                <strong>HTML, CSS</strong>
            </div>
        </article>

                <article class="project-card">
           
            <a href="https://ebok1.github.io/your-tribe-squad-page/" target="_blank">
                <h3>prototype website</h3>
                <enhanced:img src="/static/images/squadpage.png" alt="" />
            </a>
            <div> 
                <strong>HTML, CSS</strong>
            </div>
        </article>
        
    </section>

</article>

<article class="other-works">
    <h3>Some other work I made</h3>
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


    h2, h3 {
        color: var(--heading-color);
        font-family: "Azonix";
        text-align: center;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
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
    }

    .project-card {
        background: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: transform 0.3s ease;
        flex: 1 1 350px;
        margin: .8rem;
    }
    
    .project-card:hover {
        transform: translateY(-5px);
    }

    .project-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .project-card a {
        text-decoration: none;
    }

    img {
	width: 100%;
    margin-bottom: 1rem;
}

.grid-wrapper {
    columns: 300px;
    padding: 2em;
    display: flex;
    justify-content: center;
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







</style>
