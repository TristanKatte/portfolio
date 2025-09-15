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
<div class="form-container">
<form on:submit|preventDefault={handleSubmit}>
  <h2>Contact Me</h2>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} required />

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required />

  <label for="message">Message:</label>
  <textarea id="message" bind:value={message} required></textarea>

  <button type="submit">Submit</button>
</form>
</div>
{#if submitted}
  <p>Thank you for your message, {name}!</p>
{/if}

<style>

  .form-container {
    position: relative;
    width: 650px;
    padding: 50px 40px;
    background: transparent;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: auto;
    background: transparent;
  }

  .form-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 650px;
    height: 750px;
    background: linear-gradient(0deg, transparent, 
    #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: glowborder 6s linear infinite;
  }

  .form-container::after {
    content:'';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 650px;
    height: 750px;
    background: linear-gradient(0deg, transparent, 
    #056837, #056837);
    transform-origin: bottom right;
    animation: glowborder 6s linear infinite;
    animation-delay: -3s;
  }

  @keyframes glowborder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: auto;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: #161616;
    padding: 40px;
    border-radius: 20px;
    gap: 25px;
  }

  h2 {
    color: var(--heading-color);
    font-family: "Azonix";
    letter-spacing: 3px;
    margin-bottom: 10px;
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

  input, textarea, button:focus-visible{
    outline: 3px solid var(--btn-color);
  }

  button {
    margin-top: 2em;
    padding: 10px;
    background-color: var(--btn-color);
    color: #e4e4e4;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Orbitron Variable', sans-serif;
    font-size: 1.2em;
    letter-spacing: 2px;
  }

  button:hover {
    background-color: #008080;
  }

  @media (max-width: 30em) {
    .form-container {
      width: 90%;
      padding: 30px;
    }

    form {
      padding: 30px;
    }
  }

</style>
