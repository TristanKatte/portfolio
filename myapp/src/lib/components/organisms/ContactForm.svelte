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
    gsap.from('.form-wrapper', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
    const img = document.querySelector('.image-wrapper img');
    gsap.from(img, { x: 30, opacity: 0, duration: 1, ease: 'power3.out' });

    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.05, rotationX: 5, rotationY: 5, duration: 0.4, ease: 'power1.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotationX: 0, rotationY: 0, duration: 0.4, ease: 'power1.out' });
    });

    gsap.to(img, { y: -10, rotationX: 2, rotationY: -2, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.form-wrapper', { y: -8, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    // Pulsing neon glow animation for the border
    gsap.to('.form-wrapper::before', {
      '--glow-opacity': 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
</script>

<div class="contact-container">
  <div class="form-wrapper">
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

    {#if feedback}
      <p class="feedback">{feedback}</p>
    {/if}
  </div>

  <div class="image-wrapper">
    <img src="/images/futuristic-bg.jpg" alt="Contact design" />
  </div>
</div>

<style>
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1rem;
  flex-wrap: wrap;
}

.form-wrapper {
  --glow-opacity: 0.6;
  flex: 1;
  min-width: 300px;
  background: rgba(20, 20, 20, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.form-wrapper::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #222, #444, #555, #222);
  filter: drop-shadow(0 0 12px rgba(52, 152, 219, var(--glow-opacity)));
  animation: borderAnim 6s linear infinite;
  z-index: -1;
  border-radius: 16px;
}

@keyframes borderAnim {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;
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
  margin-bottom: 0.3rem;
}

input, textarea {
  padding: 0.8rem 1rem;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(30, 30, 30, 0.2);
  color: var(--text);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--brand-soft);
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.6);
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

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.feedback {
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--brand);
  background: rgba(30,30,30,0.3);
  backdrop-filter: blur(10px);
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(80,80,80,0.3);
  box-shadow: 0 0 12px rgba(52,152,219,0.4);
}

.image-wrapper {
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  width: 100%;
  max-width: 180px;
  border-radius: 16px;
  transform-style: preserve-3d;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  .image-wrapper {
    margin-top: 2rem;
  }
}
</style>
