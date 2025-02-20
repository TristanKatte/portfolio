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
        {#each projects as project}
            <div class="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        {/each}
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

    .project-card p {
        color: var(--txt-color);
        line-height: 1.6;
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

        .project-card p {
            font-size: 0.9rem;
        }
    }
</style>
