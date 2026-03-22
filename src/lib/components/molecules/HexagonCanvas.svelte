<!-- HexagonCanvas.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";

  const HEXAGON_RADIUS = 50;
  const HEXAGON_MAX_SPEED = 0.05;
  const HEXAGON_SPACING = 10;
  const HEXAGON_LINE_WIDTH = 0.75;
  const HEXAGON_COLOR = "#00ccc9";

  let canvas;
  let animationId;
  const hexagons = [];
  const s3p3 = Math.sqrt(3);

  function addHexagon(x, y, opts = {}) {
    const l = Math.floor(Math.random() * 6);
    const p = Math.random();
    hexagons.push({
      sl: opts.l ?? l,
      p: opts.p ?? p,
      x,
      y,
      speed:
        opts.speed ?? Math.random() * HEXAGON_MAX_SPEED * 2 - HEXAGON_MAX_SPEED,
    });
  }

  function drawHexagonPath(ctx, hex) {
    ctx.moveTo(
      hex.x +
        Math.cos((Math.PI / 3) * hex.sl) * HEXAGON_RADIUS +
        Math.cos((Math.PI / 3) * (hex.sl + 2)) * HEXAGON_RADIUS * hex.p,
      hex.y +
        Math.sin((Math.PI / 3) * hex.sl) * HEXAGON_RADIUS +
        Math.sin((Math.PI / 3) * (hex.sl + 2)) * HEXAGON_RADIUS * hex.p,
    );
    ctx.lineTo(
      hex.x + Math.cos((Math.PI / 3) * (hex.sl + 1)) * HEXAGON_RADIUS,
      hex.y + Math.sin((Math.PI / 3) * (hex.sl + 1)) * HEXAGON_RADIUS,
    );
    ctx.lineTo(
      hex.x + Math.cos((Math.PI / 3) * (hex.sl + 2)) * HEXAGON_RADIUS,
      hex.y + Math.sin((Math.PI / 3) * (hex.sl + 2)) * HEXAGON_RADIUS,
    );
    ctx.lineTo(
      hex.x + Math.cos((Math.PI / 3) * (hex.sl + 3)) * HEXAGON_RADIUS,
      hex.y + Math.sin((Math.PI / 3) * (hex.sl + 3)) * HEXAGON_RADIUS,
    );
    ctx.lineTo(
      hex.x +
        Math.cos((Math.PI / 3) * (hex.sl + 3)) * HEXAGON_RADIUS +
        Math.cos((Math.PI / 3) * (hex.sl + 5)) * HEXAGON_RADIUS * hex.p,
      hex.y +
        Math.sin((Math.PI / 3) * (hex.sl + 3)) * HEXAGON_RADIUS +
        Math.sin((Math.PI / 3) * (hex.sl + 5)) * HEXAGON_RADIUS * hex.p,
    );

    hex.p += hex.speed;
    if (hex.p > 1 || hex.p < 0) {
      hex.p = hex.speed < 0 ? 1 : 0;
      hex.sl += hex.speed < 0 ? -1 : 1;
      hex.sl = hex.sl % 6;
      hex.sl = hex.sl < 0 ? 4 - hex.sl : hex.sl;
    }
  }

  function loop(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (const hex of hexagons) drawHexagonPath(ctx, hex);

    ctx.shadowColor = HEXAGON_COLOR;
    ctx.shadowBlur = 20;
    ctx.strokeStyle = HEXAGON_COLOR;
    ctx.lineWidth = HEXAGON_LINE_WIDTH;
    ctx.stroke();

    animationId = requestAnimationFrame(() => loop(ctx));
  }

  function init() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-over";

    const hw =
      Math.ceil(canvas.width / (1.5 * HEXAGON_RADIUS + HEXAGON_SPACING * 2)) +
      1;
    const hh =
      Math.ceil(canvas.height / (s3p3 * HEXAGON_RADIUS + HEXAGON_SPACING * 2)) +
      1;

    for (let x = 0; x < hw; x++) {
      for (let y = 0; y < hh; y++) {
        addHexagon(
          HEXAGON_RADIUS +
            HEXAGON_SPACING +
            (1.5 * HEXAGON_RADIUS + HEXAGON_SPACING * 2) * x,
          (s3p3 * HEXAGON_RADIUS) / 2 +
            HEXAGON_SPACING +
            (s3p3 * HEXAGON_RADIUS + HEXAGON_SPACING * 2) * y -
            (x % 2 ? (s3p3 * HEXAGON_RADIUS) / 2 : 0),
          { l: 0 },
        );
      }
    }

    loop(ctx);
  }

  function handleResize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    hexagons.length = 0;
    cancelAnimationFrame(animationId);
    init();
  }

  onMount(() => {
    init();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
  });

  onDestroy(() => {
    if (typeof cancelAnimationFrame !== "undefined") {
      cancelAnimationFrame(animationId);
    }
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", handleResize);
    }
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
