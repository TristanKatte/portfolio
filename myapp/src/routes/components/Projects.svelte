<script>
    let projects = [
        { title: "Project 1", description: "Description of project 1" },
        { title: "Project 2", description: "Description of project 2" },
        // Add more projects as needed
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

<style>
    /* Add your styles here */
</style>