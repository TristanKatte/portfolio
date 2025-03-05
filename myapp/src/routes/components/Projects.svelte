<script>


</script>

<article>
<section>
    <h2>My Projects</h2>
    <div class="projects-grid">
        <article class="project-card">
            <section>
                <div>
                    <h3>Fresk.Digital</h3>    
                </div>
            <a href="https://sprint-12-proof-of-concept-p6cy.onrender.com/" target="_blank">
                <img class="bright" src="./fresk-digital.png" alt="">
            </a>
            <strong>NodeJS, EJS, Express</strong>
        </article>
        
        <article class="project-card">
            <div>
                <h3>Digital garden</h3>
            </div>
            <a href="https://i-love-web-amber.vercel.app/" target="_blank">
                <img class="align-top" src="./digital-garden.png" alt="">
            </a>
            <strong>Sveltekit, Markdown</strong>
        </article>
        
        <article class="project-card">
            <h3>Visitekaartje</h3>
            <a href="https://your-tribe-for-life-profile-card-liart.vercel.app/" target="_blank">
                <img src="./visitekaartje.png" alt="">
            </a>
            <div>     
                <strong>NodeJS, EJS, Express</strong>
            </div>
        </article>
        
        <article class="project-card">
            <div>
                <h3>B-rain</h3>
            </div>
            <a href="https://tristankatte.github.io/Brain-website/" target="_blank">
                <img class="align-top" src="./b-rain.png" alt="">
            </a>
            <strong>HTML, CSS, JS</strong>
        </article>
        
        <article class=" project-card">
            <div>
                <h3>Redpers</h3>
            </div>
            <a href="https://redpers.agency.fdnd.nl/" target="_blank">
                <img src="./redpers.png" alt="">
            </a>
            <strong>Sveltekit, WPAPI</strong>
        </article>

        <article class="project-card">
            <h3>Informaat</h3>
            <a href="https://tristankatte.github.io/Informaat-opdracht/" target="_blank">
                <img src="./informaat.png" alt="">
            </a>
            <div> 
                <strong>HTML, CSS</strong>
            </div>
        </article>
        
    </div>
</section>
</article>

<article class="other-works scroll-container">
</article>

<style>
    .scroll-container {
        position: relative;
        height: 100vh; /* Full viewport height */
        overflow: hidden;
    }

    img {
        width: 100%; /* Full width */
        display: block; /* Remove inline spacing */
    }

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

    div {
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
