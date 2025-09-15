<script>
  import { onMount } from 'svelte';
  import emailjs from 'emailjs-com';
  import gsap from 'gsap';

  let name = '';
  let email = '';
  let message = '';
  let feedback = '';
  let isSubmitting = false;

  const SERVICE_ID = 'service_hxcg059';
  const TEMPLATE_ID = 'template_rqh4yep';
  const USER_ID = 'wYAZFEbNF6IsKKX86';

  $: formValid =
    name.trim() !== '' &&
    message.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit() {
    feedback = '';
    isSubmitting = true;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      feedback = "Thank you for your message! I'll get back to you soon.";
      name = '';
      email = '';
      message = '';
    } catch (error) {
      console.error('EmailJS error:', error);
      feedback = "Something went wrong while sending your message. Try again later.";
    } finally {
      isSubmitting = false;
    }
  }

  onMount(() => {
    gsap.from('.form-wrapper', { opacity: 0, y: 20, duration: 1, ease: 'power3.out' });
  });
</script>


  <article class="form-wrapper">
    <section class="form-container">
      <img
        src="./images/futuristic-bg.jpg"
        alt="Futuristic Background"
        class="side-img"
        loading="lazy"
      />

      <form on:submit|preventDefault={handleSubmit} novalidate>
        <h2>Contact Me</h2>

        <label for="name">Name</label>
        <input type="text" id="name" bind:value={name} required autocomplete="name" />

        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} required autocomplete="email" />

        <label for="message">Message</label>
        <textarea id="message" rows="5" bind:value={message} required></textarea>

        <button type="submit" disabled={!formValid || isSubmitting}>
          {#if isSubmitting}
            Submitting...
          {:else}
            Send Message
          {/if}
        </button>
      </form>
    </section>

    {#if feedback}
      <p class="feedback">{feedback}</p>
    {/if}
  </article>

<style>
/* Contact Form Styles */
.form-wrapper {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 16px;
  position: relative;
  color: var(--text);
  backdrop-filter: blur(10px);
  overflow: hidden;
    background: #152331;
  background: linear-gradient(
    to left,
    #152331,#000000
  );
  border: 2px solid transparent;
}


/* Flex container for image + form */
.form-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

}

/* Side image */
.side-img {
  max-width: 350px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  justify-content: flex-start;
  backdrop-filter: blur(25px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-container {
    flex-direction: column;
    align-items: center;
  }

  .side-img {
    display: none;
  }

  .form-wrapper {
    margin: 2rem 1rem;
    padding: 1.5rem;
  }
}


/* animated border layer */
.form-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 4px;
  background: linear-gradient(
    45deg,
    var(--brand),
    var(--brand-soft),
    var(--highlight),
    var(--brand)
  );
  background-size: 400% 400%;
  animation: gradientNeon 12s ease infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
  width: 100%;
}

h2 {
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--brand);
  letter-spacing: 3px;
  font-family: "Azonix";
}

label {
  font-weight: 600;
  font-size: 0.9rem;
}

input,
textarea {
  padding: 0.8rem 1rem;
  border: 2px solid var(--highlight);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--brand-soft);
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
}

button {
  margin-top: 1rem;
  position: relative;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(25, 25, 25, 0.9));
  color: var(--text);
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.85rem 1.2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: transform 0.2s ease;
}

button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    45deg,
    var(--brand),
    var(--brand-soft),
    var(--highlight),
    var(--brand)
  );
  background-size: 400% 400%;
  animation: gradientNeon 8s ease infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}

button:hover {
  transform: translateY(-2px) scale(1.02);
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Feedback */
.feedback {
  margin-top: 1.5rem;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  position: relative;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(20, 20, 20, 0.9));
  color: var(--text);
  overflow: hidden;
}

.feedback::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    45deg,
    var(--brand),
    var(--brand-soft),
    var(--highlight),
    var(--brand)
  );
  background-size: 400% 400%;
  animation: gradientNeon 10s ease infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}

/* Gradient animation */
@keyframes gradientNeon {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
