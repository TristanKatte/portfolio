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
    margin: 10px 0 5px;
    color: var(--txt-color);
  }

  input, textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: var(--txt-color);
  }

  button {
    padding: 10px;
    background-color: #00adb5;
    color: var(--txt-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #008080;
  }
</style>
