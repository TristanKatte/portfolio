<script>
  import { onMount } from "svelte";

  export let images = {};
  export let profileImage = "/images/profielfoto-zw.avif";

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

  let gridEl;
  let wrapEl;
  let isFixed = false;
  let isDone = false;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const cellEls = gridEl.querySelectorAll(".grid-cell:not(.center)");
    const centerCell = gridEl.querySelector(".grid-cell.center");
    const profileReveal = gridEl.querySelector(".profile-reveal");

    // Get the about section's profile placeholder position
    const placeholder = document.querySelector(".profile-placeholder");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
        onEnter: () => {
          // Switch to fixed so it can travel across sections
          const rect = wrapEl.getBoundingClientRect();
          gsap.set(wrapEl, {
            position: "fixed",
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            margin: 0,
          });
          isFixed = true;
        },
        onLeave: () => {
          // Snap into the about section placeholder
          if (!placeholder) return;
          const rect = placeholder.getBoundingClientRect();
          gsap.set(wrapEl, {
            position: "absolute",
            top: placeholder.offsetTop,
            left: placeholder.offsetLeft,
            width: "325px",
            height: "485px",
          });
          isDone = true;
        },
        onEnterBack: () => {
          // Re-enable fixed when scrolling back up
          const rect = wrapEl.getBoundingClientRect();
          gsap.set(wrapEl, {
            position: "fixed",
            top: rect.top,
            left: rect.left,
          });
          isDone = false;
          isFixed = true;
        },
        onLeaveBack: () => {
          // Back in hero — restore relative positioning
          gsap.set(wrapEl, {
            position: "relative",
            top: "auto",
            left: "auto",
            clearProps: "width,height,margin",
          });
          isFixed = false;
        },
      }
    });

    // 1. Slide from hero right to about left
    tl.to(wrapEl, {
      x: () => {
        const target = placeholder?.getBoundingClientRect();
        const current = wrapEl.getBoundingClientRect();
        return target ? target.left - current.left : -window.innerWidth * 0.5;
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

    // 3. Grid resizes to profile dimensions
    tl.to(gridEl, {
      width: "325px",
      height: "485px",
      duration: 0.4,
      ease: "power2.inOut",
    }, 0.5);

    // 4. Profile image fades in
    tl.fromTo(profileReveal,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      0.7
    );
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
    position: relative;
    will-change: transform;
    z-index: 50;
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
    pointer-events: none;
    z-index: 2;
  }

  .profile-reveal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>