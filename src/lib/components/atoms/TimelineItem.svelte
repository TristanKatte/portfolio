<script>
  export let item;
  // svelte-ignore export_let_unused
    export let i; // needed again for zigzag
</script>

<div class="timeline-item">
  <span class="timeline-node" style="--color: {item.color}"></span>
  <article class="timeline-content" style="--color: {item.color};">
    <h3>{item.title}</h3>
    <p>{item.text}</p>
  </article>
</div>

<style>
  .timeline-item {
    position: relative;
    width: 100%;
    margin: 4rem 0;
    display: flex;
    align-items: flex-start;
  }

  .timeline-node {
    width: 20px;
    height: 20px;
    background: var(--color);
    border: 4px solid #222;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

/* Pulse ring */
.timeline-node::before,
.timeline-node::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--color);
  animation: node-pulse 2s ease-out infinite;
}

.timeline-node::after {
  animation-delay: 1s; /* offset for double pulse */
}

@keyframes node-pulse {
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(2.5); opacity: 0;   }
}

  .timeline-content {
    max-width: 45ch;
    margin: 0 1rem;
    width: 100%;
    font-size: 0.9rem;
    letter-spacing: 2px;
    line-height: 1.7;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color);
    color: var(--color);
    position: relative;
    z-index: 2;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  p {
    letter-spacing: 2px;
    font-size: 0.9rem;
  }

  /* Mobile — all left */
  @media (max-width: 768px) {
    .timeline-item {
      justify-content: flex-start !important;
      margin: 2rem 0;
    }

    .timeline-node {
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
</style>