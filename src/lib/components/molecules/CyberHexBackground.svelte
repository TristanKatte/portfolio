<!-- CyberHexBackground.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  const HEX_RADIUS = 50;
  const HEX_GAP = 12;
  const COLORS = ['#00ccc9', '#0984e3', '#00fff1'];
  const PULSE_CHANCE = 0.0008;
  const MAX_PULSES = 18;

  let canvas;
  let animId;
  let hexes = [];
  let pulses = [];
  let ctx;

  const S3 = Math.sqrt(3);
  const W = HEX_RADIUS * 2;
  const H = S3 * HEX_RADIUS;
  const COL_W = W * 0.75 + HEX_GAP;
  const ROW_H = H + HEX_GAP;

  function hexPath(cx, cy, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = Math.PI / 180 * (60 * i - 30);
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  function buildGrid() {
    hexes = [];
    const cols = Math.ceil(canvas.width / COL_W) + 2;
    const rows = Math.ceil(canvas.height / ROW_H) + 2;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * COL_W;
        const y = r * ROW_H + (c % 2 ? ROW_H / 2 : 0);
        hexes.push({ x, y, alpha: 0, base: 0.08 + Math.random() * 0.08 });
      }
    }
  }

  function spawnPulse() {
    if (pulses.length >= MAX_PULSES) return;
    const hex = hexes[Math.floor(Math.random() * hexes.length)];
    pulses.push({
      x: hex.x, y: hex.y,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 1,
      radius: HEX_RADIUS * 0.4,
      speed: 0.5 + Math.random() * 1,
    });
  }

  function drawDataStream(hex) {
    if (Math.random() > 0.998) {
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = '#00fff1';
      ctx.font = `${8 + Math.random() * 6}px monospace`;
      
      ctx.restore();
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Random pulse spawn
    if (Math.random() < PULSE_CHANCE * hexes.length) spawnPulse();

    // Draw hexes
    for (const hex of hexes) {
      hexPath(hex.x, hex.y, HEX_RADIUS - HEX_GAP / 2);
      ctx.strokeStyle = `rgba(0, 204, 201, ${hex.base})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      drawDataStream(hex);
    }

    // Draw + update pulses
    pulses = pulses.filter(p => p.alpha > 0.01);
    for (const p of pulses) {
      hexPath(p.x, p.y, HEX_RADIUS - HEX_GAP / 2);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = p.alpha;
      ctx.stroke();

      // Ripple outward to neighbors
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;

      p.alpha -= 0.012 * p.speed;
      p.radius += p.speed * 0.8;

      // Highlight nearby hexes
      for (const hex of hexes) {
        const dx = hex.x - p.x;
        const dy = hex.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < p.radius + HEX_RADIUS * 2) {
          hex.base = Math.min(0.4, hex.base + 0.04 * p.alpha);
        } else {
          hex.base = Math.max(0.12, hex.base - 0.001);
        }
      }
    }

    animId = requestAnimationFrame(loop);
  }

  function resize() {
    if (!canvas) return;
    canvas.width  = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    buildGrid();
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    loop();
    window.addEventListener('resize', resize);
  });

  onDestroy(() => {
    if (typeof cancelAnimationFrame !== "undefined") {
      cancelAnimationFrame(animId);
    }
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", resize);
    }
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 1;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.15);
  }
</style>