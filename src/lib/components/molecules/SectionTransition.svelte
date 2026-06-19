<script>
  import { onMount } from "svelte";

  export let outgoing = "";
  export let label = "";
  export let start = "bottom 80%";
  export let end = "bottom top";

  let overlayEl;
  let labelEl;

  onMount(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const outEl = document.querySelector(outgoing);
    if (!outEl) return;

    gsap.set(overlayEl, { autoAlpha: 0 });
    gsap.set(labelEl, { opacity: 0, scale: 0.85, yPercent: 8 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: outEl,
          start,
          end,
          scrub: 1.5,
        },
      })
      // blur + dim outgoing section
      .to(outEl, { filter: "blur(24px)", scale: 0.97, ease: "power2.in", duration: 0.6 }, 0)
      // overlay fades in
      .to(overlayEl, { autoAlpha: 1, ease: "power2.out", duration: 0.35 }, 0)
      // typography enters
      .to(labelEl, { opacity: 1, scale: 1, yPercent: 0, ease: "power2.out", duration: 0.35 }, 0.15)
      // typography exits upward
      .to(labelEl, { opacity: 0, scale: 1.08, yPercent: -8, ease: "power2.in", duration: 0.3 }, 0.55)
      // overlay fades out
      .to(overlayEl, { autoAlpha: 0, ease: "power2.in", duration: 0.3 }, 0.65)
      // restore outgoing section (handles reverse scrub cleanly)
      .to(outEl, { filter: "blur(0px)", scale: 1, ease: "power2.out", duration: 0.25 }, 0.78);
  });
</script>

<div class="transition-overlay" bind:this={overlayEl} aria-hidden="true">
  <span class="transition-label" bind:this={labelEl}>{label}</span>
</div>

<style>
  .transition-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
  }

  .transition-label {
    font-family: "Azonix", monospace;
    font-size: clamp(3rem, 8vw, 8rem);
    font-weight: 900;
    color: #00fff1;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-shadow:
      0 0 40px rgba(0, 255, 241, 0.5),
      0 0 100px rgba(0, 255, 241, 0.2);
    margin: 0;
    text-align: center;
    display: block;
  }
</style>
