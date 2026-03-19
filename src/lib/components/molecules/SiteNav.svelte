<script>
  import { onMount } from "svelte";

  const links = [
    { label: "Home",    href: "/"   },
    { label: "About",   href: "#about"  },
    { label: "Projects", href: "#work"    },
    { label: "Contact",  href: "#contact" },
  ];

  let activeIndex = 0;
  let hoverIndex = null;

  let navEl;
  let bubbleActive = { left: 0, top: 0, width: 0, height: 0 };
  let bubbleHover  = { left: 0, top: 0, width: 0, height: 0 };

  function getItemRect(index) {
  const items = navEl?.querySelectorAll("a");
  if (!items?.[index]) return null;
  const wrapRect = navEl.parentElement.getBoundingClientRect(); // nav-wrap, not nav
  const itemRect = items[index].getBoundingClientRect();
  return {
    left:   itemRect.left   - wrapRect.left,
    top:    itemRect.top    - wrapRect.top,
    width:  itemRect.width,
    height: itemRect.height,
  };
}

  function setActive(index) {
    activeIndex = index;
    const rect = getItemRect(index);
    if (rect) bubbleActive = rect;
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
    // Set initial active bubble position
    const rect = getItemRect(activeIndex);
    if (rect) bubbleActive = rect;
  });
</script>

<div class="nav-wrap">
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
         on:click|preventDefault={() => setActive(i)}
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
    background: linear-gradient(0deg, #0c1016, #111a22);
    box-shadow:
      inset 10px 0 10px rgba(0, 0, 0, 0.5),
      0 0 20px rgba(0, 204, 201, 0.05);
  }

  .nav-wrap::after {
    content: "";
    display: block;
    position: absolute;
    inset: -2px;
    background: linear-gradient(180deg, var(--border), #0c1016);
    border-radius: 500px;
    z-index: -1;
  }

  .nav {
    display: flex;
    flex-direction: row;
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
    color: #0c1016;
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
    0%   { left: -100%; }
    100% { left: 100%;  }
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
    background: linear-gradient(180deg, #00fff1, #00ccc9);
    box-shadow:
      inset 0 2px 7px rgba(255, 255, 255, 0.4),
      0 0 12px rgba(0, 204, 201, 0.4);
    filter: blur(1px);
    transform: scale(1.1);
    opacity: 0.75;
  }

  .bubble.hover {
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 255, 241, 0.1), rgba(0, 204, 201, 0.05));
    box-shadow: inset 0 2px 7px rgba(0, 255, 241, 0.1);
  }
</style>