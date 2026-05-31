<script>
  import { onMount, onDestroy } from "svelte";

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

  onMount(async () => {
    document.body.appendChild(wrapEl);

    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);

    const cellEls = gridEl.querySelectorAll(".grid-cell:not(.center)");
    const profileReveal = gridEl.querySelector(".profile-reveal");
    const placeholder = document.querySelector(".profile-placeholder");
    const heroRight = document.querySelector(".hero-right");
    const aboutSection = document.querySelector("#about");

    function getHeroPos() {
      const r = heroRight.getBoundingClientRect();
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    }

    function setInitialPos() {
      const h = getHeroPos();
      gsap.set(wrapEl, {
        position: "fixed",
        top: h.top,
        left: h.left,
        width: h.width,
        height: h.height,
        x: 0,
        y: 0,
      });
    }

    setInitialPos();

    const DUR = 1;

    // The trigger ends when top of #about reaches top of viewport (scrollY = aboutSection.offsetTop).
    // At that moment, placeholder viewport top = placeholder_doc_top - aboutSection_doc_top.
    // Measured at page load (scrollY=0): doc_top equals getBoundingClientRect().top.
    const phInitRect = placeholder.getBoundingClientRect();
    const aboutInitRect = aboutSection.getBoundingClientRect();
    const endTop = phInitRect.top - aboutInitRect.top;
    const endLeft = phInitRect.left;

    let startTop, startLeft, startWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
        onEnter() {
          const h = getHeroPos();
          startTop = h.top;
          startLeft = h.left;
          startWidth = h.width;
          gsap.set(wrapEl, {
            position: "fixed",
            top: startTop,
            left: startLeft,
            width: startWidth,
            x: 0,
            y: 0,
          });
        },
        onLeave() {
          // At trigger end, top of #about is at viewport top so placeholder's
          // getBoundingClientRect gives the exact position to snap to.
          aboutSection.appendChild(wrapEl);
          gsap.set(wrapEl, {
            position: "absolute",
            top: endTop,
            left: endLeft,
            width: "325px",
            height: "485px",
            x: 0,
            y: 0,
          });
        },
        onEnterBack() {
          document.body.appendChild(wrapEl);
          const r = placeholder.getBoundingClientRect();
          gsap.set(wrapEl, {
            position: "fixed",
            top: r.top,
            left: r.left,
            width: "325px",
            height: "485px",
            x: 0,
            y: 0,
          });
        },
        onLeaveBack() {
          document.body.appendChild(wrapEl);
          setInitialPos();
        },
      },
    });

    tl.to(
      wrapEl,
      {
        top: endTop,
        left: endLeft,
        ease: "none",
        duration: DUR,
      },
      0,
    );

    tl.to(
      gridEl,
      {
        width: "325px",
        height: "485px",
        ease: "power2.inOut",
        duration: DUR,
      },
      0,
    );

    cellEls.forEach((cell) => {
      const col = +cell.dataset.col;
      const row = +cell.dataset.row;
      tl.to(
        cell,
        {
          x: `${(2 - col) * 100}%`,
          y: `${(2 - row) * 100}%`,
          opacity: 0,
          scale: 0.8,
          ease: "power2.in",
          duration: DUR,
        },
        0,
      );
    });

    tl.fromTo(
      profileReveal,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, ease: "power2.out", duration: DUR * 0.5 },
      DUR * 0.5,
    );

    await new Promise((r) => setTimeout(r, 150));
    ScrollTrigger.refresh();
  });

  onDestroy(() => {
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
  :global(.grid-wrap) {
    position: fixed;
    z-index: 1;
    will-change: transform;
    pointer-events: none;
  }

  :global(.image-grid) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem;
    width: 35rem;
    height: 35rem; /* ← explicit height instead of aspect-ratio */
    overflow: hidden;
    will-change: width, height;
  }

  :global(.grid-cell) {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 206, 201, 0.2);
    will-change: transform, opacity;
  }

  :global(.grid-cell img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  :global(.profile-reveal) {
    position: absolute;
    inset: 0;
    opacity: 0;
    will-change: transform, opacity;
    border-radius: 0.5rem;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
  }

  :global(.profile-reveal img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>
