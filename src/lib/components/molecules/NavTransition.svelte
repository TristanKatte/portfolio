<script>
  import { onMount, onDestroy } from "svelte";

  let overlayEl;
  let labelEl;
  let cleanup;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(overlayEl, { autoAlpha: 0 });
    gsap.set(labelEl, { opacity: 0, scale: 0.85, yPercent: 8 });

    function onNavTransition({ detail: { label, target } }) {
      labelEl.textContent = label;

      gsap
        .timeline()
        .set(labelEl, { yPercent: 8, scale: 0.85, opacity: 0 })
        .to(overlayEl, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
        .to(labelEl, { opacity: 1, scale: 1, yPercent: 0, duration: 0.3, ease: "power2.out" }, 0.05)
        // scroll at peak opacity so the jump is hidden behind the overlay
        .call(() => {
          document.querySelector(target)?.scrollIntoView({ behavior: "instant" });
          requestAnimationFrame(() => {
            // Reset any partially-played SectionTransition overlays and section blurs
            document.querySelectorAll(".transition-overlay").forEach((el) => {
              gsap.set(el, { autoAlpha: 0 });
            });
            document.querySelectorAll("section[id]").forEach((el) => {
              gsap.set(el, { clearProps: "filter,scale" });
            });
            ScrollTrigger.refresh();
          });
        })
        .to(labelEl, { opacity: 0, scale: 1.06, yPercent: -8, duration: 0.25, ease: "power2.in" }, "+=0.2")
        .to(overlayEl, { autoAlpha: 0, duration: 0.25, ease: "power2.in" }, "-=0.1");
    }

    window.addEventListener("nav-transition", onNavTransition);
    cleanup = () => window.removeEventListener("nav-transition", onNavTransition);
  });

  onDestroy(() => cleanup?.());
</script>

<div class="nav-overlay" bind:this={overlayEl} aria-hidden="true">
  <span class="nav-label" bind:this={labelEl}></span>
</div>

<style>
  .nav-overlay {
    position: fixed;
    inset: 0;
    z-index: 300;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 8, 14, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .nav-label {
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
