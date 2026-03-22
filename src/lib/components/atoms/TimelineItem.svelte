<script>
  export let item;
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
    justify-content: flex-end; /* content sits left of the line */
  }

  .timeline-node {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color);
    border: 4px solid #222;
    position: absolute;
    top: 0;
    right: 0; /* node on the right */
    transform: translate(50%, -50%);
    z-index: 3;
  }

  .timeline-content {
    max-width: 90%;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color);
    color: var(--color);
    margin-right: 2rem; /* gap between content and node */
    text-align: left;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  p {
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    .timeline-item {
      flex-direction: row;
      justify-content: flex-start !important;
      margin: 2rem 0;
    }

    .timeline-node {
      left: 20px;
    }
  }
</style>
