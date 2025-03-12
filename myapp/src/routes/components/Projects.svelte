<script>

</script>

<article>
<section>
    <h2>My Projects</h2>
    <div class="projects-grid">
        <article class="project-card">
            <section>

            <a href="https://sprint-12-proof-of-concept-p6cy.onrender.com/" target="_blank">
                    <h3>Fresk.Digital</h3>    
                <enhanced:img class="bright" src="$lib/assets/fresk-digital.png" alt="">
            </a>
            <strong>NodeJS, EJS, Express</strong>
        </article>
        
        <article class="project-card">

            <a href="https://i-love-web-amber.vercel.app/" target="_blank">
                    <h3>Digital garden</h3>
                <enhanced:img class="align-top" src="$lib/assets/digital-garden.png" alt="">
            </a>
            <strong>Sveltekit, Markdown</strong>
        </article>
        
        <article class="project-card">
            
            <a href="https://your-tribe-for-life-profile-card-liart.vercel.app/" target="_blank">
                <h3>Visitekaartje</h3>
                <enhanced:img src="$lib/assets/visitekaartje.png" alt="">
            </a>
            <div>     
                <strong>NodeJS, EJS, Express</strong>
            </div>
        </article>
        
        <article class="project-card">        
            <a href="https://tristankatte.github.io/Brain-website/" target="_blank">
                <h3>B-rain</h3>
                <enhanced:img class="align-top" src="$lib/assets/b-rain.png" alt="">
            </a>
            <strong>HTML, CSS, JS</strong>
        </article>
        
        <article class=" project-card">
            <a href="https://redpers.agency.fdnd.nl/" target="_blank">
                <h3>Redpers</h3>
                <enhanced:img src="$lib/assets/redpers.png" alt="">
            </a>
            <strong>Sveltekit, WPAPI</strong>
        </article>

        <article class="project-card">
           
            <a href="https://tristankatte.github.io/Informaat-opdracht/" target="_blank">
                <h3>Informaat</h3>
                <enhanced:img src="$lib/assets/informaat.png" alt="">
            </a>
            <div> 
                <strong>HTML, CSS</strong>
            </div>
        </article>

                <article class="project-card">
           
            <a href="https://tristankatte.github.io/Informaat-opdracht/" target="_blank">
                <h3>Squad Page</h3>
                <enhanced:img src="$lib/assets/informaat.png" alt="">
            </a>
            <div> 
                <strong>HTML, CSS</strong>
            </div>
        </article>
        
    </div>
</section>
</article>

<article class="other-works">
    <h3>Some other work I made</h3>
    <section class="grid-wrapper">
        <picture>
            <enhanced:img src="$lib/assets/spiegel_1.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture class="tall">
            <enhanced:img src="$lib/assets/texture_leaf.jpg" alt="">
        </picture>
        <picture class="wide">
            <enhanced:img src="$lib/assets/renaissance_1.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/portret_max.jpg" alt="" />
        </picture>
        <picture class="tall">
            <enhanced:img src="$lib/assets/texture_gold.jpg" alt="" />
        </picture>
        <picture class="big">
            <enhanced:img src="$lib/assets/hdr_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/kikvors_3.jpg" alt="" />
        </picture>
        <picture class="wide">
            <enhanced:img src="$lib/assets/hdr_haventje.jpg" alt="" />
        </picture>
        <picture class="big">
            <enhanced:img src="$lib/assets/hdr_3.jpg" alt="" />
        </picture>
        <picture class="tall">
            <enhanced:img src="$lib/assets/kikvors_1.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture class="wide">
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture class="wide">
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture>
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture class="wide">
            <enhanced:img src="$lib/assets/vogelpers_2.jpg" alt="" />
        </picture>
        <picture class="big">
            <enhanced:img src="" alt="" />
        </picture>
        <picture>
            <enhanced:img src="" alt="" />
        </picture>
        <picture>
            <enhanced:img src="" alt="" />
        </picture>
        <picture class="big">
            <enhanced:img src="" alt="" />
        </picture>
        <picture class="tall">
            <enhanced:img src="" alt="" />
        </picture>
        <picture>
            <enhanced:img src="" alt="" />
        </picture>
        <picture>
            <enhanced:img src="" alt="" />
        </picture>
        <picture class="wide">
            <enhanced:img src="" alt="" />
        </picture>
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
    }

    picture {
        color: var(--txt-color);
    }

    .projects-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
    }

    .project-card {
        background: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: transform 0.3s ease;
        flex: 1 1 300px;
        max-width: 400px;
    }
    
    .project-card:hover {
        transform: translateY(-5px);
    }

    .project-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    img {
	max-width: 100%;
	height: auto;
	vertical-align: middle;
	display: inline-block;
}

/* Main CSS */
.grid-wrapper > picture {
	display: flex;
	justify-content: center;
	align-items: center;
}
.grid-wrapper > picture > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
}

.grid-wrapper {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 200px;
	grid-auto-flow: dense;
}
.grid-wrapper .wide {
	grid-column: span 2;
}
.grid-wrapper .tall {
	grid-row: span 2;
}
.grid-wrapper .big {
	grid-column: span 2;
	grid-row: span 2;
}


    @media (max-width: 768px) {
        h2 {
            font-size: 1.8rem;
        }

        .projects-grid {
            flex-direction: column;
            align-items: stretch;
        }

        .project-card {
            padding: 1rem;
            max-width: none;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.5rem;
        }

        .project-card h3 {
            font-size: 1.3rem;
        }
    }
</style>
