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
    padding: 1.5rem;
    border-radius: 1.5rem;
    background: rgba(10, 10, 20, 0.3);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 255, 247, 0.1);
    text-align: center;
  }

  .category-heading {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    color: #00fff7;
    letter-spacing: 3px;
    font-family: "Azonix", sans-serif;
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  @media (min-width: 600px) {
    .skills-grid {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }

  @media (min-width: 900px) {
    .skills-grid {
      gap: 2.5rem;
    }
  }
</style>