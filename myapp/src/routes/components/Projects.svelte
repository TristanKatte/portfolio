<script>
    let projects = [
        { title: "Fresk.digital", description: "Ontwerp en maak een data driven online concept voor een opdrachtgever" },
        { title: "B-rain website", description: "Ontwerp en maak een interactieve website voor een opdrachtgever" },
        { title: "Informaat website", description: "Ontwerp en maak een responsive website voor een startup." },
        { title: "Visitekaartje", description: "Redesign je visitekaartje op basis van een bestaande API." },
        { title: "Redpers", description: "Een nieuwswebsite waaraan ik heb meegewerkt" },
        { title: "Digital Garden", description: "Een blog waarin ik schrijf wat ik per sprint heb geleerd en over gastsprekers bij mijn opleiding" }
    ];
</script>

<article>
<section>
    <h2>My Projects</h2>
    <div class="projects-grid">
        <article class="right project-card">
            <section>
            <a href="https://sprint-12-proof-of-concept-p6cy.onrender.com/" target="_blank">
                <div>
                    <h3>Fresk.Digital</h3>
                    <strong>NodeJS, EJS, Express</strong>
                </div>
                <img class="bright" src="./fresk-digital.png" alt="">
            </a>
        </article>
        
        <article class="left project-card">
            <a href="https://i-love-web-amber.vercel.app/" target="_blank">
                <img class="align-top" src="./digital-garden.png" alt="">
                <div>
                    <h3>Digital garden</h3>
                    <strong>Sveltekit, Markdown</strong>
                </div>
            </a>
        </article>
        
        <article class="left project-card">
            <a href="https://your-tribe-for-life-profile-card-liart.vercel.app/" target="_blank">
                <img src="./visitekaartje.png" alt="">
                <div>
                    <h3>Visitekaartje</h3>
                    <strong>NodeJS, EJS, Express</strong>
                </div>
            </a>
        </article>
        
        <article class="right project-card">
            <a href="https://tristankatte.github.io/Brain-website/" target="_blank">
                <div>
                    <h3>B-rain</h3>
                    <strong>HTML, CSS, JS</strong>
                </div>
                <img class="align-top" src="./b-rain.png" alt="">
            </a>
        </article>
        
        <article class="right project-card">
            <a href="https://redpers.agency.fdnd.nl/" target="_blank">
                <div>
                    <h3>Redpers</h3>
                    <strong>Sveltekit, WPAPI</strong>
                </div>
                <img src="./redpers.png" alt="">
            </a>
        </article>

        <article class="left project-card">
            <a href="https://tristankatte.github.io/Informaat-opdracht/" target="_blank">
                <img src="./informaat.png" alt="">
                <div>
                    <h3>Informaat</h3>
                    <strong>HTML, CSS</strong>
                </div>
            </a>
        </article>

        <!-- {#each projects as project}
            <div class="project-card" id="{project.title.toLowerCase().replace(/\s+/g, '-')}">

                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        {/each} -->
        
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
