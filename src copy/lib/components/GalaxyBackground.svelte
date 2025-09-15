<script>
  import { onMount, onDestroy } from "svelte";

  let canvas;
  let ctx;
  let stars = [];
  let meteorites = [];
  const numStars = 200;

  let width;
  let height;

  let mouseX = 0;
  let mouseY = 0;

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random(),
        alphaDirection: Math.random() > 0.5 ? 1 : -1,
        depth: Math.random(), // For parallax effect
      });
    }
  }

  function createMeteorite() {
    // Randomly create a meteor
    const startX = Math.random() * width;
    const startY = Math.random() * height * 0.5;
    const speed = randomRange(4, 8);
    meteorites.push({
      x: startX,
      y: startY,
      dx: speed,
      dy: speed * 0.6,
      life: 0,
      maxLife: 80,
    });
  }

  function updateMeteorites() {
    for (let i = meteorites.length - 1; i >= 0; i--) {
      const m = meteorites[i];
      m.x += m.dx;
      m.y += m.dy;
      m.life++;

      if (m.life > m.maxLife) {
        meteorites.splice(i, 1);
      }
    }

    // Random chance to add a new meteorite
    if (Math.random() < 0.02) {
      createMeteorite();
    }
  }

  function drawMeteorites() {
    for (let m of meteorites) {
      const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.dx * 10, m.y - m.dy * 10);
      grad.addColorStop(0, "rgba(255,255,255,0.8)");
      grad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x - m.dx * 10, m.y - m.dy * 10);
      ctx.stroke();
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, width, height);
    for (let star of stars) {
      // Twinkle
      star.alpha += 0.005 * star.alphaDirection;
      if (star.alpha <= 0) {
        star.alpha = 0;
        star.alphaDirection = 1;
      }
      if (star.alpha >= 1) {
        star.alpha = 1;
        star.alphaDirection = -1;
      }

      // Parallax movement based on mouse
      const offsetX = (mouseX - width / 2) * 0.02 * star.depth;
      const offsetY = (mouseY - height / 2) * 0.02 * star.depth;

      ctx.beginPath();
      const x = star.x + offsetX;
      const y = star.y + offsetY;

      // Glow effect with radial gradient
      let grad = ctx.createRadialGradient(x, y, 0, x, y, star.radius * 6);
      grad.addColorStop(0, `rgba(255,255,255,${star.alpha})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = grad;
      ctx.arc(x, y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  let animationFrame;

  function animate() {
    drawStars();
    updateMeteorites();
    drawMeteorites();
    animationFrame = requestAnimationFrame(animate);
  }

  function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createStars();
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    onResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  });
</script>



<canvas
  bind:this={canvas}
  style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background: radial-gradient(ellipse at center, #000011 0%, #000000 100%);"
></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
</style>
