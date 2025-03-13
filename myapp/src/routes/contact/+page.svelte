<script>
  import ContactForm from './ContactForm.svelte';
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <h2>Contact me</h2>
  <ContactForm />
</main>

<style>
  main {
    padding: 20px;
    text-align: center;
    width: 100%;
    height: 100vh;
  }

  h2 {
    margin-bottom: 20px;
    color: var(--heading-color);
    font-family: "Azonix";
    margin: auto;
  }
</style>
