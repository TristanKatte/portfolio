<script>
  import emailjs from 'emailjs-com';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let name = '';
  let email = '';
  let message = '';
  let feedback = '';
  let isSubmitting = false;

  const SERVICE_ID = 'service_hxcg059';
  const TEMPLATE_ID = 'template_rqh4yep';
  const USER_ID = 'wYAZFEbNF6IsKKX86';

  let nameInput, emailInput, messageInput, sendBtn, contactImage;

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
      gsap.from(".feedback", { y: 20, opacity: 0, duration: 0.6 });
    } catch (error) {
      console.error('EmailJS fout:', error);
      feedback = "Something went wrong while sending your message. Try again later.";
      gsap.from(".feedback", { y: 20, opacity: 0, duration: 0.6 });
    } finally {
      isSubmitting = false;
    }
  }

  function hoverIn(el) {
    gsap.to(el, { y: -3, boxShadow: '0 0 15px rgba(0,255,255,0.5)', duration: 0.3 });
  }

  function hoverOut(el) {
    gsap.to(el, { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3 });
  }

  onMount(() => {
    // Initial form animation
    const tl = gsap.timeline();
    tl.from(".form-wrapper", { y: 30, opacity: 0, duration: 0.8 })
      .from(".form-wrapper form h2", { y: 20, opacity: 0, duration: 0.5 }, "-=0.5")
      .from(".form-wrapper form label, .form-wrapper form input, .form-wrapper form textarea, .form-wrapper form button", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
      }, "-=0.4")
      .from(contactImage, { x: 50, opacity: 0, duration: 0.8 }, "-=1");

    // Floating image animation
    gsap.to(contactImage, {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
</script>

<div class="contact-container">
  <div class="form-image-wrapper">
    <div class="form-wrapper">
      <form on:submit|preventDefault={handleSubmit} novalidate>
        <h2>Contact Me</h2>

        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          bind:value={name}
          required
          autocomplete="name"
          on:mouseenter={() => hoverIn(nameInput)}
          on:mouseleave={() => hoverOut(nameInput)}
          bind:this={nameInput}
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          autocomplete="email"
          on:mouseenter={() => hoverIn(emailInput)}
          on:mouseleave={() => hoverOut(emailInput)}
          bind:this={emailInput}
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          rows="5"
          bind:value={message}
          required
          on:mouseenter={() => hoverIn(messageInput)}
          on:mouseleave={() => hoverOut(messageInput)}
          bind:this={messageInput}
        ></textarea>

        <button
          type="submit"
          disabled={!formValid || isSubmitting}
          on:mouseenter={() => hoverIn(sendBtn)}
          on:mouseleave={() => hoverOut(sendBtn)}
          bind:this={sendBtn}
        >
          {#if isSubmitting}Submitting...{:else}Send Message{/if}
        </button>
      </form>

      {#if feedback}
        <p class="feedback">{feedback}</p>
      {/if}
    </div>

    <div class="image-wrapper">
      <img bind:this={contactImage} src="/images/form-image.jpg" alt="Contact illustration" />
    </div>
  </div>
</div>

<style>
  :global(body) {
    --surface: rgba(255,255,255,0.05);
    --text: #fff;
    --highlight: rgba(255,255,255,0.2);
    --brand: #00ffff;
    --brand-soft: rgba(0,255,255,0.2);
  }

  .contact-container {
    display: flex;
    justify-content: center;
    padding: 4rem 1rem;
  }

  .form-image-wrapper {
    display: flex;
    gap: 3rem;
    max-width: 1100px;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .form-wrapper {
    flex: 1;
    min-width: 320px;
    max-width: 500px;
    padding: 2rem;
    border-radius: 16px;
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(0,255,255,0.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    animation: borderPulse 3s infinite;
    color: var(--text);
  }

  @keyframes borderPulse {
    0%, 100% { border-color: rgba(0,255,255,0.2); }
    50% { border-color: rgba(0,255,255,0.6); }
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
    letter-spacing: 3px;
    font-family: "Azonix";
  }

  label {
    font-weight: 600;
    font-size: 0.9rem;
  }

  input, textarea {
    padding: 0.8rem 1rem;
    border: 2px solid var(--highlight);
    border-radius: 8px;
    font-size: 1rem;
    background: rgba(255,255,255,0.1);
    color: var(--text);
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
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
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  }

  .feedback {
    margin-top: 1rem;
    font-weight: 600;
    text-align: center;
    color: var(--brand);
    padding: 0.6rem 1rem;
    border-radius: 12px;
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(0,255,255,0.2);
    backdrop-filter: blur(10px);
    animation: borderPulse 3s infinite;
  }

  .image-wrapper {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
  }

  .image-wrapper img {
    max-width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    border: 2px solid rgba(0,255,255,0.2);
    animation: borderPulse 3s infinite;
  }

  @media (max-width: 768px) {
    .form-image-wrapper {
      flex-direction: column;
    }
  }
</style>
