<script>
  import { onMount, onDestroy } from "svelte";

  export let images = {};
  export let profileImage = "/images/profielfoto-zw.avif";

  let wrapEl;
  let gridEl;

  const cells = [
    { img: images[1], col: 1, row: 1 },
    { img: images[2], col: 2, row: 1 },
    { img: images[3], col: 3, row: 1 },
    { img: images[4], col: 1, row: 2 },
    { img: images[5], col: 2, row: 2 },
    { img: images[6], col: 3, row: 2 },
    { img: images[7], col: 1, row: 3 },
    { img: images[8], col: 2, row: 3 },
    { img: images[9], col: 3, row: 3 },
  ];

  onMount(async () => {
    // Move the grid to body so it escapes all stacking contexts
    document.body.appendChild(wrapEl);

    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const cellEls = gridEl.querySelectorAll(".grid-cell:not(.center)");
    const centerCell = gridEl.querySelector(".grid-cell.center");
    const profileReveal = gridEl.querySelector(".profile-reveal");
    const placeholder = document.querySelector(".profile-placeholder");

    // Get initial hero position
    const heroRight = document.querySelector(".hero-right");
    const heroRect = heroRight?.getBoundingClientRect();

    // Set initial position matching hero-right
    gsap.set(wrapEl, {
      position: "fixed",
      top: heroRect?.top ?? "10vh",
      left: heroRect?.left ?? "60vw",
      width: heroRect?.width ?? "35rem",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
      }
    });

    // 1. Slide to placeholder position
    tl.to(wrapEl, {
      x: () => {
        const target = placeholder?.getBoundingClientRect();
        const current = wrapEl.getBoundingClientRect();
        return target ? target.left - current.left : 0;
      },
      y: () => {
        const target = placeholder?.getBoundingClientRect();
        const current = wrapEl.getBoundingClientRect();
        return target ? target.top - current.top : 0;
      },
      ease: "none",
      duration: 1,
    }, 0);

    // 2. Collapse outer cells
    cellEls.forEach((cell) => {
      const col = +cell.dataset.col;
      const row = +cell.dataset.row;
      tl.to(cell, {
        x: `${(2 - col) * 100}%`,
        y: `${(2 - row) * 100}%`,
        opacity: 0,
        scale: 0.8,
        ease: "power2.in",
        duration: 0.6,
      }, 0.2);
    });

    // 3. Resize to profile dimensions
    tl.to(gridEl, {
      width: "325px",
      height: "485px",
      duration: 0.4,
      ease: "power2.inOut",
    }, 0.5);

    // 4. Profile fades in
    tl.fromTo(profileReveal,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      0.7
    );
  });

  onDestroy(() => {
    // Clean up — move back or remove
    if (wrapEl && wrapEl.parentNode === document.body) {
      document.body.removeChild(wrapEl);
    }
  });
</script>

<div class="grid-wrap" bind:this={wrapEl}>
  <div class="image-grid" bind:this={gridEl}>
    {#each cells as cell, i}
      <div
        class="grid-cell {cell.col === 2 && cell.row === 2 ? 'center' : ''}"
        data-col={cell.col}
        data-row={cell.row}
      >
        <img src={cell.img} alt="Grid image {i + 1}" />
      </div>
    {/each}

    <div class="profile-reveal">
      <img src={profileImage} alt="Tristan" />
    </div>
  </div>
</div>

<style>
  .grid-wrap {
    position: fixed;
    z-index: 9999;
    will-change: transform;
    pointer-events: none;
  }

  .image-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem;
    width: 35rem;
    aspect-ratio: 1;
    overflow: hidden;
    will-change: width, height;
  }

  .grid-cell {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 206, 201, 0.2);
    will-change: transform, opacity;
  }

  .grid-cell img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .profile-reveal {
    position: absolute;
    inset: 0;
    opacity: 0;
    will-change: transform, opacity;
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 2;
  }

  .profile-reveal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>