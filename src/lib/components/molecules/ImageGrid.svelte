<script>
  import { onMount, onDestroy } from "svelte";

  export let images = {};
  export let profileImage = "/images/profielfoto-zw.avif";

  $: profileBase = profileImage.replace(/\.(avif|webp|jpg|png)$/, '');

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
  let swapTimeout = null;
  let swapActive = false;

  function pickTwo() {
    const a = Math.floor(Math.random() * 9);
    let b;
    do { b = Math.floor(Math.random() * 9); } while (b === a);
    return [a, b];
  }

  function scheduleSwap(gsap) {
    clearTimeout(swapTimeout);
    swapTimeout = setTimeout(() => doSwap(gsap), 1000 + Math.random() * 1500);
  }

  function doSwap(gsap) {
    if (!swapActive || !gridEl) return;
    const imgEls = Array.from(gridEl.querySelectorAll(".grid-cell img"));
    if (imgEls.length < 9) return;

    const [a, b] = pickTwo();
    gsap.to([imgEls[a], imgEls[b]], {
      opacity: 0,
      scale: 0.82,
      duration: 0.28,
      ease: "power2.in",
      onComplete() {
        const tmp = imgEls[a].src;
        imgEls[a].src = imgEls[b].src;
        imgEls[b].src = tmp;
        gsap.to([imgEls[a], imgEls[b]], {
          opacity: 1,
          scale: 1,
          duration: 0.38,
          ease: "power2.out",
          onComplete: () => scheduleSwap(gsap),
        });
      },
    });
  }

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
          swapActive = false;
          clearTimeout(swapTimeout);
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
          swapActive = true;
          scheduleSwap(gsap);
        },
      },
    });

    tl.to(wrapEl, { top: endTop, left: endLeft, ease: "none", duration: DUR }, 0);
    tl.to(gridEl, { width: "325px", height: "485px", ease: "power2.inOut", duration: DUR }, 0);

    cellEls.forEach((cell) => {
      const col = +cell.dataset.col;
      const row = +cell.dataset.row;
      tl.to(cell, {
        x: `${(2 - col) * 100}%`,
        y: `${(2 - row) * 100}%`,
        opacity: 0,
        scale: 0.8,
        ease: "power2.in",
        duration: DUR,
      }, 0);
    });

    tl.fromTo(
      profileReveal,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, ease: "power2.out", duration: DUR * 0.5 },
      DUR * 0.5,
    );

    await new Promise((r) => setTimeout(r, 150));
    ScrollTrigger.refresh();

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      swapActive = true;
      scheduleSwap(gsap);
    }
  });

  onDestroy(() => {
    clearTimeout(swapTimeout);
    if (wrapEl && wrapEl.parentNode === document.body) {
      document.body.removeChild(wrapEl);
    }
  });
</script>

<div class="grid-wrap" bind:this={wrapEl}>
  <div class="image-grid" bind:this={gridEl}>
    {#each cells as cell}
      <div
        class="grid-cell {cell.col === 2 && cell.row === 2 ? 'center' : ''}"
        data-col={cell.col}
        data-row={cell.row}
      >
        <img src={cell.img} alt="" decoding="async" width="800" height="600" />
      </div>
    {/each}

    <div class="profile-reveal">
      <picture>
        <source srcset="{profileBase}.avif" type="image/avif" />
        <source srcset="{profileBase}.webp" type="image/webp" />
        <img src="{profileBase}.jpg" alt="Tristan" width="600" height="900" />
      </picture>
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
    width: clamp(22rem, 35vw, 35rem);
    height: clamp(22rem, 35vw, 35rem);
    overflow: hidden;
    will-change: width, height;
  }

  :global(.grid-cell) {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid color-mix(in srgb, var(--border) 35%, transparent);
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
