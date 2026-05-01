<script>
  import Button from "$lib/components/atoms/Button.svelte";
</script>

<div class="buttons">
  <Button label="View projects" href="#work" />
  <Button label="Download CV" href="/curriculum_vitae-1.pdf" variant="secondary" />
</div>

<style>
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-family: "Space Grotesk", sans-serif;
    margin-top: 2rem;
    width: 100%;
    z-index: 3;
  }

  @media (min-width: 600px) {
    .buttons {
      flex-direction: row;
    }
  }
</style>