<script>
  import SkillCard from "../atoms/SkillCard.svelte";

  export let category = "";
  export let items = [];
</script>

<div class="category-block">
  <h3 class="category-heading">{category}</h3>
  <div class="skills-grid">
    {#each items as skill}
      <SkillCard {skill} />
    {/each}
  </div>
</div>

<style>
  .category-block {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 206, 201, 0.15);
    border-radius: 1rem;
    padding: 1.5rem;
  }

  .category-heading {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #00fff1;
    font-family: "Azonix", monospace;
    margin: 0 0 1.25rem 0;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 1rem;
  }
</style>
