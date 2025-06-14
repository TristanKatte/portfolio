<script>
  import SectionWrapper from '$lib/components/atoms/SectionWrapper.svelte';
  import WorkGrid from '$lib/components/molecules/WorkGrid.svelte';

  const projects = [
    { title: 'Portfolio Redesign' },
    { title: 'Toegankelijke UI Toolkit' }
  ];
</script>

<SectionWrapper id="work" className="work" label="Mijn werk">
  <h2>Mijn werk</h2>
  <WorkGrid {projects} />
</SectionWrapper>
