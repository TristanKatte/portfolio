<script>
  import { onMount, onDestroy } from 'svelte';
  import emailjs from 'emailjs-com';

  let name = '';
  let email = '';
  let subject = '';
  let message = '';
  let feedback = '';
  let isSubmitting = false;
  let layoutEl;
  let cleanups = [];

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

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      }, USER_ID);
      feedback = "Thank you for your message! I'll get back to you soon.";
      name = '';
      email = '';
      subject = '';
      message = '';
    } catch (error) {
      console.error('EmailJS error:', error);
      feedback = "Something went wrong while sending your message. Try again later.";
    } finally {
      isSubmitting = false;
    }
  }

  onMount(async () => {
    const gsap = (await import('gsap')).default;
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    const q = (sel) => layoutEl.querySelectorAll(sel);

    // ── Entrance: left column stagger ──────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: layoutEl,
        start: 'top 78%',
        once: true,
      },
    });

    tl.from(q('.contact-left .section-label'), { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' })
      .from(q('.contact-heading'), { opacity: 0, y: 28, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .from(q('.contact-desc'), { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' }, '-=0.4')
      .from(q('.contact-link-item'), { opacity: 0, x: -18, duration: 0.45, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
      // right column
      .from(q('.contact-right .section-label'), { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' }, '-=0.6')
      .from(q('.field'), { opacity: 0, y: 14, duration: 0.4, stagger: 0.07, ease: 'power2.out' }, '-=0.4')
      .from(q('button[type="submit"]'), { opacity: 0, y: 14, duration: 0.4, ease: 'power2.out' }, '-=0.25');

    // ── Field focus: cyan line expands left→right ───────────────────
    q('.field input, .field textarea').forEach((input) => {
      const line = input.closest('.field').querySelector('.field-line');
      const label = input.closest('.field').querySelector('label');

      const onFocus = () => {
        gsap.to(line, { scaleX: 1, duration: 0.35, ease: 'power2.out', transformOrigin: 'left center' });
        gsap.to(label, { color: '#00e8e8', duration: 0.2 });
      };
      const onBlur = () => {
        gsap.to(line, { scaleX: 0, duration: 0.3, ease: 'power2.in', transformOrigin: 'right center' });
        gsap.to(label, { color: '#00c8c8', duration: 0.2 });
      };

      input.addEventListener('focus', onFocus);
      input.addEventListener('blur', onBlur);
      cleanups.push(() => {
        input.removeEventListener('focus', onFocus);
        input.removeEventListener('blur', onBlur);
      });
    });

    // ── Contact link hover: GSAP arrow diagonal slide ───────────────
    q('.contact-link-item').forEach((item) => {
      const arrow = item.querySelector('.link-arrow');
      const value = item.querySelector('.link-value');

      const onEnter = () => {
        gsap.to(arrow, { x: 4, y: -4, color: '#00d4d4', duration: 0.25, ease: 'power2.out' });
        gsap.to(value, { color: '#00d4d4', duration: 0.2 });
      };
      const onLeave = () => {
        gsap.to(arrow, { x: 0, y: 0, color: '#6a7f90', duration: 0.25, ease: 'power2.inOut' });
        gsap.to(value, { color: '#6a7f90', duration: 0.2 });
      };

      item.addEventListener('mouseenter', onEnter);
      item.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        item.removeEventListener('mouseenter', onEnter);
        item.removeEventListener('mouseleave', onLeave);
      });
    });

    // ── Button: press + release spring ─────────────────────────────
    const btn = layoutEl.querySelector('button[type="submit"]');
    const onDown = () => gsap.to(btn, { scale: 0.95, duration: 0.1, ease: 'power2.out' });
    const onUp   = () => gsap.to(btn, { scale: 1,    duration: 0.4, ease: 'elastic.out(1, 0.4)' });

    btn.addEventListener('mousedown', onDown);
    btn.addEventListener('mouseup',   onUp);
    btn.addEventListener('mouseleave', onUp);
    cleanups.push(() => {
      btn.removeEventListener('mousedown', onDown);
      btn.removeEventListener('mouseup',   onUp);
      btn.removeEventListener('mouseleave', onUp);
    });
  });

  onDestroy(() => cleanups.forEach((fn) => fn()));
</script>

<div class="contact-layout" bind:this={layoutEl}>
  <!-- Left Column -->
  <div class="contact-left">
    <span class="section-label">CONTACT</span>
    <h2 class="contact-heading">
      LET'S BUILD SOMETHING<br />
      <span class="heading-accent">TOGETHER</span>
    </h2>
    <p class="contact-desc">
      Whether you have a project in mind, want to collaborate, or just want to say hello — I'm always up for a good conversation.
    </p>

    <div class="contact-links">
      <div class="contact-link-item">
        <span class="link-label">EMAIL</span>
        <div class="link-row">
          <a href="mailto:tristankatte@hotmail.com" class="link-value">TRISTANKATTE@HOTMAIL.COM</a>
          <span class="link-arrow">↗</span>
        </div>
        <div class="link-divider"></div>
      </div>

      <div class="contact-link-item">
        <span class="link-label">GITHUB</span>
        <div class="link-row">
          <a href="https://github.com/tristankatte" target="_blank" rel="noopener noreferrer" class="link-value">GITHUB.COM/TRISTANKATTE</a>
          <span class="link-arrow">↗</span>
        </div>
        <div class="link-divider"></div>
      </div>

      <div class="contact-link-item">
        <span class="link-label">LINKEDIN</span>
        <div class="link-row">
          <a href="https://www.linkedin.com/in/tristan-katte" target="_blank" rel="noopener noreferrer" class="link-value">WWW.LINKEDIN.COM/IN/TRISTAN-KATTE</a>
          <span class="link-arrow">↗</span>
        </div>
        <div class="link-divider"></div>
      </div>
    </div>
  </div>

  <!-- Right Column -->
  <div class="contact-right">
    <span class="section-label">SEND A MESSAGE</span>

    <form on:submit|preventDefault={handleSubmit} novalidate>
      <div class="field">
        <label for="name">YOUR NAME</label>
        <input type="text" id="name" bind:value={name} placeholder="JOHN DOE" required autocomplete="name" />
        <span class="field-line"></span>
      </div>

      <div class="field">
        <label for="email">EMAIL ADDRESS</label>
        <input type="email" id="email" bind:value={email} placeholder="JOHN@EXAMPLE.COM" required autocomplete="email" />
        <span class="field-line"></span>
      </div>

      <div class="field">
        <label for="subject">SUBJECT</label>
        <input type="text" id="subject" bind:value={subject} placeholder="PROJECT INQUIRY" />
        <span class="field-line"></span>
      </div>

      <div class="field field--message">
        <label for="message">MESSAGE</label>
        <textarea id="message" rows="4" bind:value={message} placeholder="TELL ME ABOUT YOUR PROJECT" required></textarea>
        <span class="field-line"></span>
      </div>

      <button type="submit" disabled={!formValid || isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Send message'}
      </button>
    </form>

    {#if feedback}
      <p class="feedback">{feedback}</p>
    {/if}
  </div>
</div>

<style>
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    width: 100%;
    max-width: 1500px;
  }

  .section-label {
    font-family: 'Azonix', 'Orbitron Variable', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: #00c8c8;
    text-transform: uppercase;
    display: block;
    margin-bottom: 1.5rem;
  }

  .contact-heading {
    font-family: 'Azonix', 'Orbitron Variable', monospace;
    font-size: clamp(1.8rem, 3.5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1.15;
    color: #d8e8f0;
    margin: 0 0 2rem;
  }

  .heading-accent {
    color: #00d4d4;
  }

  .contact-desc {
    font-size: 1.15rem;
    line-height: 1.75;
    color: var(--text);
    margin-bottom: 3rem;
    max-width: 44ch;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
  }

  .contact-link-item {
    padding: 1.1rem 0 0;
  }

  .link-label {
    font-family: 'Azonix', 'Orbitron Variable', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    color: #00c8c8;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }

  .link-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .link-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    color: #6a7f90;
    text-decoration: none;
    text-transform: uppercase;
  }

  .link-arrow {
    font-size: 1rem;
    color: #6a7f90;
    line-height: 1;
    display: inline-block;
  }

  .link-divider {
    height: 2px;
    background: #1a2a3a;
  }

  /* Form */
  form {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
  }

  .field {
    position: relative;
    border-bottom: 2px solid #1a2a3a;
    padding: 1rem 0;
  }

  .field--message {
    border-bottom: none;
    padding-bottom: 0;
  }

  .field-line {
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #00c8c8;
    transform: scaleX(0);
    transform-origin: left center;
    pointer-events: none;
  }

  label {
    display: block;
    font-family: 'Azonix', 'Orbitron Variable', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: #00c8c8;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #6a7f90;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0;
    resize: none;
    box-sizing: border-box;
  }

  input::placeholder,
  textarea::placeholder {
    color: #2e3f50;
  }

  textarea {
    min-height: 80px;
  }

  button {
    align-self: flex-start;
    margin-top: 2rem;
    background: #0d1824;
    color: #c0d0de;
    border: 1px solid #1e3040;
    border-radius: 50px;
    padding: 0.85rem 2.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  button:hover:not(:disabled) {
    background: #122030;
    border-color: #00c8c8;
    color: #00d4d4;
  }

  button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .feedback {
    margin-top: 1.2rem;
    font-size: 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.05em;
    color: #00c8c8;
  }

  @media (max-width: 900px) {
    .contact-layout {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }
  }
</style>
