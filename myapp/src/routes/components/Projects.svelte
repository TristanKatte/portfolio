<script>
    let projects = [
        { title: "Fresk.digital", description: "Ontwerp en maak een data driven online concept voor een opdrachtgever" },
        { title: "B-rain website", description: "Ontwerp en maak een interactieve website voor een opdrachtgever" },
        { title: "Informaat website", description: "Ontwerp en maak een responsive website voor een startup." },
        { title: "Visitekaartje", description: "Redesign je visitekaartje op basis van een bestaande API." },
    ];
</script>

<section>
    <h2>My Projects</h2>
    {#each projects as project}
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    {/each}
</section>
<button>lol</button>

<style>
    h2, h3 {
        color: var(--heading-color);
    }

    button {
        width: 215px;
        height: 50px;
        border-radius: 50px 0 50px 0;
    }
</style>