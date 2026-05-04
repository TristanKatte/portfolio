<!-- GridBackground.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  // Config — adjust these to customize
  export let gridSize       = 240;
  export let particleCount  = 150;
  export let trailLength    = 100;
  export let speedMin       = 0.5;
  export let speedMax       = 5;
  export let rippleDuration = 4000;
  export let rippleMaxRadius = 400;
  export let interactive    = true; // set false to disable click ripples

  const GRID_COLOR      = '#00CCC9';
  const BG_COLOR        = '#0E151B';
  const PARTICLE_COLORS = ['#00fff7', '#00c2cb', '#94a1b2'];
  const RIPPLE_COLOR    = '#00fff7';
  const CHAR_COLOR      = '#00c2cb';
  const CHARS           = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

  let canvas;
  let animId;
  let ctx;
  let particles = [];
  let ripples   = [];

  const occupiedLines = { horizontal: new Set(), vertical: new Set() };

  function resize() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    occupiedLines.horizontal.clear();
    occupiedLines.vertical.clear();
    particles.forEach(p => p.reset());
  }

  function drawGrid() {
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 204, 201, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 204, 201, 0.04)');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 0.5;

    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }

  class Particle {
    constructor() {
      this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      this.reset();
    }

    findAvailableLine() {
      for (let i = 0; i < 100; i++) {
        if (Math.random() > 0.5) {
          const y = Math.round(Math.random() * canvas.height / gridSize) * gridSize;
          if (!occupiedLines.horizontal.has(y)) {
            this.direction = 'horizontal';
            this.x = 0;
            this.y = y;
            occupiedLines.horizontal.add(y);
            return true;
          }
        } else {
          const x = Math.round(Math.random() * canvas.width / gridSize) * gridSize;
          if (!occupiedLines.vertical.has(x)) {
            this.direction = 'vertical';
            this.x = x;
            this.y = 0;
            occupiedLines.vertical.add(x);
            return true;
          }
        }
      }
      return false;
    }

    reset() {
      if (this.findAvailableLine()) {
        this.trail  = [];
        this.active = true;
        this.speed  = Math.random() * (speedMax - speedMin) + speedMin;
      } else {
        this.active = false;
        this.trail  = [];
      }
    }

    update() {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > trailLength) this.trail.shift();

      if (this.active) {
        if (this.direction === 'horizontal') {
          this.x += this.speed;
          if (this.x > canvas.width) {
            this.active = false;
            occupiedLines.horizontal.delete(this.y);
          }
        } else {
          this.y += this.speed;
          if (this.y > canvas.height) {
            this.active = false;
            occupiedLines.vertical.delete(this.x);
          }
        }
      } else {
        const offScreen = this.trail.every(pt =>
          (this.direction === 'horizontal' && pt.x > canvas.width) ||
          (this.direction === 'vertical'   && pt.y > canvas.height)
        );
        if (offScreen) this.reset();
      }
    }

    draw() {
      for (let i = 0; i < this.trail.length; i++) {
        const pt    = this.trail[i];
        const alpha = i / this.trail.length;
        ctx.fillStyle = this.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  class Ripple {
    constructor(x, y) {
      this.x         = x;
      this.y         = y;
      this.radius    = 0;
      this.startTime = Date.now();
    }

    update() {
      const elapsed = Date.now() - this.startTime;
      this.radius   = (elapsed / rippleDuration) * rippleMaxRadius;
    }

    draw() {
      const alpha = 1 - this.radius / rippleMaxRadius;
      ctx.strokeStyle = `rgba(0, 255, 247, ${alpha})`;
      ctx.lineWidth   = 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();

      if (Math.random() < 0.3) {
        ctx.fillStyle = `rgba(0, 194, 203, ${alpha})`;
        ctx.font      = "14px monospace";
        const char    = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(
          char,
          this.x + (Math.random() - 0.5) * this.radius * 2,
          this.y + (Math.random() - 0.5) * this.radius * 2
        );
      }
    }

    isDone() {
      return this.radius >= rippleMaxRadius;
    }
  }

  function loop() {
    drawGrid();
    particles.forEach(p => { p.update(); p.draw(); });
    ripples = ripples.filter(r => !r.isDone());
    ripples.forEach(r => { r.update(); r.draw(); });
    animId = requestAnimationFrame(loop);
  }

  function onClick(e) {
    ripples.push(new Ripple(e.clientX, e.clientY));
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    particles = Array.from({ length: particleCount }, () => new Particle());
    loop();
    window.addEventListener('resize', resize);
    if (interactive) canvas.addEventListener('click', onClick);
  });

  onDestroy(() => {
    if (typeof cancelAnimationFrame !== "undefined")
      cancelAnimationFrame(animId);
    if (typeof window !== "undefined")
      window.removeEventListener('resize', resize);
    if (interactive && canvas)      
    canvas.removeEventListener('click', onClick);

  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto; /* needs to be auto for click ripples */
    z-index: 0;
    display: block;
  }
</style>