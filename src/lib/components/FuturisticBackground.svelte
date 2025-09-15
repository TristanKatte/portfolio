<script>
  import { onMount, onDestroy } from "svelte";

  let canvas;
  let ctx;
  let width, height;
  let animationFrameId;

  const nodes = [];
  const nodeRadius = 4;
  const lineMaxDistance = 110;

  // Hex grid parameters
  const hexSize = 60;
  const hexHeight = Math.sqrt(3) * hexSize / 2;

  let mouseX = null;
  let mouseY = null;

  // Meteorites (shooting stars)
  const meteorites = [];
  const maxMeteorites = 5;

  // Nebula blobs (soft glowing colored circles)
  const nebulas = [];

  // Galaxies (small glowing star clusters)
  const galaxies = [];

  // Helper: distance between two points
  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }

  // Initialize hex grid nodes
  function initNodes() {
    nodes.length = 0;
    let row = 0;
    for (let y = hexHeight / 2; y < height + hexHeight; y += hexHeight) {
      const offsetX = row % 2 === 0 ? hexSize / 2 : hexSize;
      for (let x = offsetX; x < width + hexSize; x += hexSize * 1.5) {
        nodes.push({
          x,
          y,
          baseAlpha: 0.15 + Math.random() * 0.15,
          alpha: 0.15,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      row++;
    }
  }

  // Initialize meteorites
  function initMeteorites() {
    meteorites.length = 0;
    for (let i = 0; i < maxMeteorites; i++) {
      meteorites.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        length: 80 + Math.random() * 60,
        speed: 5 + Math.random() * 3,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        opacity: 0,
        fadeIn: true,
      });
    }
  }

  // Initialize nebulas
  function initNebulas() {
    nebulas.length = 0;
    for (let i = 0; i < 8; i++) {
      nebulas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 150 + Math.random() * 100,
        color: `rgba(100, 200, 255, 0.06)`, // soft blueish
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    for (let i = 0; i < 6; i++) {
      nebulas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 130 + Math.random() * 90,
        color: `rgba(255, 150, 200, 0.05)`, // soft pinkish
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  // Initialize galaxies
  function initGalaxies() {
    galaxies.length = 0;
    for (let i = 0; i < 15; i++) {
      galaxies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 15 + Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  // Draw single node with pulsation
  function drawNode(node) {
    node.pulsePhase += 0.02;
    node.alpha =
      node.baseAlpha + 0.2 * Math.sin(node.pulsePhase) + (node.highlight || 0);

    ctx.beginPath();
    ctx.shadowColor = "cyan";
    ctx.shadowBlur = 8;
    ctx.fillStyle = `rgba(0, 255, 255, ${Math.min(1, node.alpha)})`;
    ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
    ctx.fill();

    // Inner bright core
    ctx.beginPath();
    ctx.shadowBlur = 0;
    ctx.fillStyle = `rgba(0, 255, 255, ${Math.min(1, node.alpha * 1.5)})`;
    ctx.arc(node.x, node.y, nodeRadius / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw connecting lines between nodes
  function drawLines() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const dist = distance(n1.x, n1.y, n2.x, n2.y);
        if (dist < lineMaxDistance) {
          let alpha = (lineMaxDistance - dist) / lineMaxDistance / 3;

          if (mouseX !== null && mouseY !== null) {
            const midX = (n1.x + n2.x) / 2;
            const midY = (n1.y + n2.y) / 2;
            const mouseDist = distance(mouseX, mouseY, midX, midY);
            if (mouseDist < 100) {
              alpha += (100 - mouseDist) / 100 / 2;
            }
          }

          ctx.strokeStyle = `rgba(0, 255, 255, ${Math.min(1, alpha)})`;
          ctx.lineWidth = 1;
          ctx.shadowColor = "cyan";
          ctx.shadowBlur = 4;

          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }
    }
  }

  // Draw meteorites (shooting stars)
  function drawMeteorites() {
    meteorites.forEach((m) => {
      if (m.fadeIn) {
        m.opacity += 0.02;
        if (m.opacity >= 1) m.fadeIn = false;
      } else {
        m.opacity -= 0.01;
        if (m.opacity <= 0) {
          // reset meteorite start position
          m.x = Math.random() * width;
          m.y = Math.random() * height * 0.5;
          m.opacity = 0;
          m.fadeIn = true;
        }
      }

      const endX = m.x + Math.cos(m.angle) * m.length;
      const endY = m.y + Math.sin(m.angle) * m.length;

      ctx.strokeStyle = `rgba(255, 255, 255, ${m.opacity})`;
      ctx.lineWidth = 2;
      ctx.shadowColor = "white";
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Move meteorite forward
      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      if (m.x > width + m.length || m.y > height + m.length) {
        m.x = -m.length;
        m.y = Math.random() * height * 0.5;
      }
    });
  }

  // Draw nebulas (soft pulsing colored circles)
  function drawNebulas(time) {
    nebulas.forEach((n) => {
      n.pulsePhase += 0.002;
      const pulse = 0.04 * Math.sin(n.pulsePhase) + 0.06;

      const gradient = ctx.createRadialGradient(
        n.x,
        n.y,
        n.radius * 0.1,
        n.x,
        n.y,
        n.radius
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${pulse + 0.1})`);
      gradient.addColorStop(0.3, n.color);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Draw galaxies (small star clusters with flicker)
  function drawGalaxies(time) {
    galaxies.forEach((g) => {
      g.pulsePhase += 0.01;
      const opacity = g.opacity + 0.2 * Math.sin(g.pulsePhase);

      const gradient = ctx.createRadialGradient(
        g.x,
        g.y,
        g.radius * 0.2,
        g.x,
        g.y,
        g.radius
      );
      gradient.addColorStop(0, `rgba(200, 220, 255, ${opacity})`);
      gradient.addColorStop(0.8, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Main animation loop
  function animate(time) {
    ctx.clearRect(0, 0, width, height);

    // Draw nebula and galaxies behind
    drawNebulas(time);
    drawGalaxies(time);

    // Highlight nodes near mouse
    if (mouseX !== null && mouseY !== null) {
      nodes.forEach((node) => {
        const d = distance(mouseX, mouseY, node.x, node.y);
        node.highlight = d < 100 ? ((100 - d) / 100) * 0.5 : 0;
      });
    } else {
      nodes.forEach((node) => (node.highlight = 0));
    }

    drawLines();
    nodes.forEach(drawNode);

    // Meteorites in front
    drawMeteorites();

    animationFrameId = requestAnimationFrame(animate);
  }

  // Resize canvas and init elements
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(devicePixelRatio, devicePixelRatio);

    initNodes();
    initMeteorites();
    initNebulas();
    initGalaxies();
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function onMouseLeave() {
    mouseX = null;
    mouseY = null;
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(animate);
  });

  onDestroy(() => {
    window.removeEventListener("resize", resize);
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mouseleave", onMouseLeave);
    cancelAnimationFrame(animationFrameId);
  });
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: auto;
    user-select: none;
    background-color: #000012;
  }
</style>
