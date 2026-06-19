<script>
  export let isOpen = false;
  import { onMount } from "svelte";

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  let activeIndex = 0;
  let hoverIndex = null;

  let navEl;
  let bubbleActive = { left: 0, top: 0, width: 0, height: 0 };
  let bubbleHover = { left: 0, top: 0, width: 0, height: 0 };

  function getItemRect(index) {
    const items = navEl?.querySelectorAll("a");
    if (!items?.[index]) return null;
    const navRect = navEl.getBoundingClientRect();
    const itemRect = items[index].getBoundingClientRect();
    return {
      left: itemRect.left - navRect.left,
      top: itemRect.top - navRect.top,
      width: itemRect.width,
      height: itemRect.height,
    };
  }

  function setActive(index) {
    activeIndex = index;
    const rect = getItemRect(index);
    if (rect) bubbleActive = rect;
  }

  function handleNavClick(e, link) {
    if (!link.href.startsWith("#")) return;
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("nav-transition", {
        detail: { label: link.label, target: link.href },
      }),
    );
  }

  function onMouseEnter(index) {
    hoverIndex = index;
    const rect = getItemRect(index);
    if (rect) bubbleHover = rect;
  }

  function onMouseLeave() {
    hoverIndex = null;
  }

  onMount(() => {
    const rect = getItemRect(activeIndex);
    if (rect) bubbleActive = rect;

    const sections = [
      { id: "hero",    index: 0 },
      { id: "about",   index: 1 },
      { id: "work",    index: 2 },
      { id: "contact", index: 3 },
    ];

    function updateActive() {
      const threshold = window.scrollY + window.innerHeight * 0.4;
      let current = 0;
      for (const { id, index } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) current = index;
      }
      if (current !== activeIndex) setActive(current);
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  });
</script>

<div class="nav-wrap" class:open={isOpen}>
  <!-- Active bubble -->
  <div
    class="bubble active"
    style="
      left: {bubbleActive.left}px;
      top: {bubbleActive.top}px;
      width: {bubbleActive.width}px;
      height: {bubbleActive.height}px;
    "
  ></div>

  <!-- Hover bubble -->
  {#if hoverIndex !== null}
    <div
      class="bubble hover"
      style="
        left: {bubbleHover.left}px;
        top: {bubbleHover.top}px;
        width: {bubbleHover.width}px;
        height: {bubbleHover.height}px;
      "
    ></div>
  {/if}

  <nav class="nav" bind:this={navEl} aria-label="Hoofdnavigatie">
    {#each links as link, i}
      <a
        href={link.href}
        class:active={i === activeIndex}
        on:click={(e) => { handleNavClick(e, link); setActive(i); }}
        on:mouseenter={() => onMouseEnter(i)}
        on:mouseleave={onMouseLeave}
      >
        {link.label}
      </a>
    {/each}
  </nav>
</div>

<style>
  .nav-wrap {
    border: 1px solid var(--border);
    width: fit-content;
    border-radius: 500px;
    position: relative;
    background: linear-gradient(0deg, var(--nav-bg-start), var(--nav-bg-end));
    box-shadow:
      inset 10px 0 10px var(--nav-shadow),
      0 0 20px rgba(0, 204, 201, 0.05);
    transition: all 0.3s ease;
    display: none;
    position: absolute;
    top: calc(100% + 1rem);
    right: 1rem;
    border-radius: 1rem; /* square-ish on mobile */
  }

  .nav-wrap.open {
    display: block;
  }

  .nav-wrap::after {
    content: "";
    display: block;
    position: absolute;
    inset: -2px;
    background: linear-gradient(180deg, var(--border), var(--nav-bg-start));
    border-radius: 500px;
    z-index: -1;
  }

  .nav {
    display: flex;
    flex-direction: column;
    margin: 6px;
    position: relative;
    z-index: 10;
  }

  .nav a {
    position: relative;
    display: inline-block;
    padding: 0.75rem 2rem;
    color: var(--text);
    text-decoration: none;
    font-family: "Azonix", sans-serif;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: color 0.2s ease;
    z-index: 10;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 500px;
  }

  .nav a.active {
    color: var(--nav-active-text);
  }

  .nav a:focus-visible {
    outline: 2px solid var(--highlight);
    outline-offset: -2px;
    border-radius: 500px;
  }

  /* Shimmer on hover for non-active links */
  .nav a:not(.active)::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(0, 255, 241, 0) 0%,
      rgba(0, 255, 241, 0.15) 50%,
      rgba(0, 255, 241, 0) 100%
    );
    transform: skewX(-20deg);
    pointer-events: none;
  }

  .nav a:not(.active):hover::after {
    animation: shimmer 0.6s ease forwards;
  }



  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  /* Bubbles */
  .bubble {
    position: absolute;
    border-radius: 500px;
    transition: all 0.25s ease;
    pointer-events: none;
  }

  .bubble.active {
    z-index: 2;
    background: linear-gradient(180deg, var(--nav-active-bg-start), var(--nav-active-bg-end));
    box-shadow:
      inset 0 2px 7px rgba(255, 255, 255, 0.4),
      0 0 12px rgba(0, 204, 201, 0.4);
    filter: blur(1px);
    transform: scale(1.05);
    padding: 0.75rem 2rem;
    color: #0c1016;
    text-decoration: none;
    font-family: "Azonix", sans-serif;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: color 0.2s ease;
    margin: 0 auto;
    opacity: 0.95;
    transition: all 0.25s ease;
    overflow: hidden;
    border-radius: 500px; /* square-ish on mobile */
    pointer-events: none;
    border: 5px solid var(--brand-soft);
  }

  .bubble.hover {
    z-index: 1;
    background: linear-gradient(
      180deg,
      var(--nav-hover-bg-start),
      var(--nav-hover-bg-end)
    );
    box-shadow: inset 0 2px 7px rgba(0, 255, 241, 0.1);
    filter: blur(10px);
  }

  

  /* Desktop — inline pill */
  @media (min-width: 768px) {
    .nav-wrap {
      display: block;
      position: relative;
      top: auto;
      right: auto;
      border-radius: 500px;
      background: linear-gradient(0deg, var(--nav-bg-start), var(--nav-bg-end));
      box-shadow:
        inset 10px 0 10px var(--nav-shadow),
        0 0 20px rgba(0, 204, 201, 0.05);
      overflow: hidden;
      margin: 6px;
    }

    .nav {
      flex-direction: row;
      position: relative;
      z-index: 10;
      margin: 0;
    }

    .nav a {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 500px;
    }

    .nav-wrap::after {
      display: none;
    }

    .bubble.active {
      filter: blur(2px);
      transform: scale(1.2);
      opacity: 0.8;
    }

    .bubble.hover {
      filter: blur(1px);
      transform: scale(1.1);
    }

    .bubble {
      border-radius: 500px;
      transition: all 0.25s ease;
      pointer-events: none;
      padding: 0.75rem 1.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nav a {
      transition-duration: 0.01s;
    }
    .nav a:not(.active):hover::after {
      animation: none;
    }
    .bubble {
      transition-duration: 0.01s;
    }
  }
</style>
