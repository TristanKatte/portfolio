<script>
  export let projects = [];
</script>

<ul class="work-grid">
  {#each projects as project}
    <li>{project.title}</li>
  {/each}
</ul>
