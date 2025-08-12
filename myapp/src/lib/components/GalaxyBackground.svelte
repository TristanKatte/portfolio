<script>
  import { onMount, onDestroy } from "svelte";

  let canvas;
  let ctx;
  let stars = [];
  const numStars = 200;

  let width;
  let height;

  let mouseX = 0;
  let mouseY = 0;

  // Planets array
  let planets = [];

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

  // Initialize planets with orbit and rotation properties
  function createPlanets() {
    const colors = [
      "rgba(255, 100, 100, 0.8)",   // warm red
      "rgba(100, 255, 150, 0.8)",   // soft green
      "rgba(100, 150, 255, 0.8)",   // cool blue
      "rgba(255, 255, 100, 0.8)",   // yellow
      "rgba(180, 100, 255, 0.8)",   // purple
    ];
    planets = [];
    for (let i = 0; i < 6; i++) {
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      planets.push({
        baseX,
        baseY,
        radius: 15 + Math.random() * 10,
        color: colors[i % colors.length],
        orbitRadius: 10 + Math.random() * 20,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      });
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

  // Draw planets with orbit and rotation
  function drawPlanets() {
    planets.forEach(p => {
      // Update orbit angle and rotation
      p.orbitAngle += p.orbitSpeed;
      p.rotation += p.rotationSpeed;

      // Calculate current position on orbit
      const x = p.baseX + p.orbitRadius * Math.cos(p.orbitAngle);
      const y = p.baseY + p.orbitRadius * Math.sin(p.orbitAngle);

      // Create planet glow gradient
      const gradient = ctx.createRadialGradient(
        x,
        y,
        p.radius * 0.3,
        x,
        y,
        p.radius
      );
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw subtle ring around planet (like Saturn)
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(p.rotation);
      ctx.strokeStyle = p.color.replace(/0\.8\)/, "0.3)"); // less opaque ring
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.radius * 1.5, p.radius * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    });
  }

  let animationFrame;

  function animate() {
    drawStars();
    drawPlanets();
    animationFrame = requestAnimationFrame(animate);
  }

  function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createStars();
    createPlanets();
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
