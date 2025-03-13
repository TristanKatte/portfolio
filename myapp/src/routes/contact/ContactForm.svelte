<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
    // Handle form submission logic here
    submitted = true;
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} required />

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required />

  <label for="message">Message:</label>
  <textarea id="message" bind:value={message} required></textarea>

  <button type="submit">Submit</button>
</form>

{#if submitted}
  <p>Thank you for your message, {name}!</p>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }

  label {
    display: flex;
    margin: 10px 0 5px;
    color: var(--txt-color);
    font-family: 'alata', sans-serif;
    letter-spacing: 3px;
    justify-content: flex-start;
  }

  input, textarea {
    padding: 10px;
    margin-bottom: 1em;
    border-radius: 4px;
    color: var(--txt-color);
  }

  input, textarea:focus-visible{
    outline: 3px solid var(--btn-color);
  }



  button {
    margin-top: 2em;
    padding: 10px;
    background-color: var(--btn-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #008080;
  }
</style>
