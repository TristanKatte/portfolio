<script>
  import { page } from '$app/stores';

  const projectData = {
    'we-love-web': {
      title: '✨ We Love Web blog',
      description: 'Een volledige uitleg van het project...',
      image: '/images/we-love-web.png',
    },
    'bieb-in-bloei': {
      title: '🧠 Bieb in Bloei',
      description: 'Diepere uitleg over ontwerp, onderzoek en uitwerking...',
      image: '/images/bieb-in-bloei.jpg',
    },
    // etc.
  };

  $: slug = $page.params.slug;
  $: project = projectData[slug];
</script>

{#if project}
  <section class="project-detail">
    <h1>{project.title}</h1>
    <img src={project.image} alt={project.title} />
    <p>{project.description}</p>
  </section>
{:else}
  <p>Project niet gevonden.</p>
{/if}

<style>
    .project-detail {
  max-width: 60ch;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: left;
}

.project-detail img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.project-detail h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-detail p {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>