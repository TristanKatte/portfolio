<!-- GridBackground.svelte -->
<script>
  // Grid configuration — adjust these to customize
  export let gridSize = 40;        // size of each grid cell in px
  export let gridColor = "rgba(0, 204, 201, 0.95)"; // grid line color
         // overall opacity of the grid

  // Beam configuration — add/remove objects to control pulses
export let beamsH = [
  { top: "120px", width: "16rem", duration: "7s",  delay: "0s",  opacity: 1, blur: "25px", color: "#00ccc9" },
  { top: "320px", width: "24rem", duration: "10s", delay: "2s",  opacity: 0.8, blur: "15px", color: "#00ccc9" },
  { top: "60%",   width: "20rem", duration: "13s", delay: "4s",  opacity: 0.9, blur: "20px", color: "#0984e3" },
];

export let beamsV = [
  { left: "80px", height: "16rem", duration: "15s", delay: "0.5s", opacity: 1,   blur: "20px", color: "#00ccc9" },
  { left: "40%",  height: "20rem", duration: "12s", delay: "3s",   opacity: 0.9, blur: "15px", color: "#0984e3" },
  { left: "70%",  height: "14rem", duration: "9s",  delay: "6s",   opacity: 0.8, blur: "10px", color: "#00fff1" },
];
</script>

<div class="grid-bg">
  <div class="grid-lines">
    <div
      class="grid-pattern"
      style="
        background-image:
          linear-gradient(to right, {gridColor} 1px, transparent 1px),
          linear-gradient(to bottom, {gridColor} 1px, transparent 1px);
        background-size: {gridSize}px {gridSize}px;
      "
    ></div>
    <div
      class="grid-accent"
      style="
        background-image:
          linear-gradient(to right, rgba(0, 204, 201, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 204, 201, 0.5) 1px, transparent 1px);
        background-size: {gridSize * 4}px {gridSize * 4}px;
      "
    ></div>
  </div>

  <div class="beams">
    {#each beamsH as beam}
      <div
        class="beam beam-h"
        style="
          top: {beam.top};
          width: {beam.width};
          animation-duration: {beam.duration};
          animation-delay: {beam.delay};
          --beam-opacity: {beam.opacity};
          --beam-color: {beam.color};
          --beam-blur: {beam.blur};
        "
      ></div>
    {/each}

    {#each beamsV as beam}
      <div
        class="beam beam-v"
        style="
          left: {beam.left};
          height: {beam.height};
          animation-duration: {beam.duration};
          animation-delay: {beam.delay};
          --beam-opacity: {beam.opacity};
          --beam-color: {beam.color};
          --beam-blur: {beam.blur};
        "
      ></div>
    {/each}
  </div>
</div>

<style>
.grid-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.grid-lines {
  position: absolute;
  inset: 0;
  /* no mix-blend-mode here */
}

.grid-pattern,
.grid-accent {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
 
}

.beams {
  position: absolute;
  inset: 0;
  mix-blend-mode: screen; /* ← isolated to beams only */
}

.beam {
  position: absolute;
  opacity: 0;
  will-change: transform, opacity;
  /* no mix-blend-mode here — inherited from .beams */
}

.beam-h {
  height: 2px;
  left: 0;
  background: linear-gradient(to right, transparent, var(--beam-color), transparent);
  box-shadow: 0 0 var(--beam-blur) 6px var(--beam-color);
  animation: beam-h linear infinite;
}

.beam-v {
  width: 2px;
  top: -100px;
  background: linear-gradient(to bottom, transparent, var(--beam-color), transparent);
  box-shadow: 0 0 var(--beam-blur) 6px var(--beam-color);
  animation: beam-v linear infinite;
}

@keyframes beam-h {
  0%   { transform: translateX(-100%); opacity: 0; }
  10%  { opacity: var(--beam-opacity); }
  90%  { opacity: var(--beam-opacity); }
  100% { transform: translateX(100vw); opacity: 0; }
}

@keyframes beam-v {
  0%   { transform: translateY(-100%); opacity: 0; }
  10%  { opacity: var(--beam-opacity); }
  90%  { opacity: var(--beam-opacity); }
  100% { transform: translateY(100vh); opacity: 0; }
}
</style>