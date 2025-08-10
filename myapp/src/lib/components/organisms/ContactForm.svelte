<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
    submitted = true;
  }
</script>

<div class="form-wrapper">
  <form on:submit|preventDefault={handleSubmit} novalidate>
    <h2>Contact Me</h2>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={name} required autocomplete="name" />

    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required autocomplete="email" />

    <label for="message">Message</label>
    <textarea id="message" rows="5" bind:value={message} required></textarea>

    <button type="submit">Send Message</button>
  </form>

  {#if submitted}
    <p class="thank-you">Thanks for reaching out, {name}! I'll get back to you soon.</p>
  {/if}
</div>

<style>
  .form-wrapper {
    max-width: 680px;
    margin: 3rem auto;
    padding: 2rem;
    background: var(--surface);
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--brand);
  }

  label {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  input, textarea {
    padding: 0.8rem 1rem;
    border: 2px solid var(--highlight);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--brand-soft);
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
  }

  textarea {
    resize: vertical;
  }

  button {
    margin-top: 1rem;
    background-color: var(--brand-soft);
    color: var(--text);
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.85rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--brand);
  }

  .thank-you {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #dff0d8;
    color: #3c763d;
    border-radius: 10px;
    text-align: center;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    .form-wrapper {
      margin: 2rem 1rem;
      padding: 1.5rem;
    }
  }
</style>
