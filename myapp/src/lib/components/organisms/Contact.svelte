<script>
  import ContactForm from "./ContactForm.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".contact-content", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 85%",
      },
    });
  });
</script>

<section id="contact" class="contact" aria-labelledby="contact-heading">
  <ContactForm />
</section>

<style>
  .contact {
    min-height: 100dvh;
    padding: var(--size-7);
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    text-align: center;
  }
</style>
