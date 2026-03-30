<script>
  export let item;
  export let i; // needed again for zigzag
</script>

<div class="timeline-item {i % 2 === 0 ? 'left' : 'right'}">
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
    padding: 1rem 0;
    display: flex;
    align-items: flex-start;
    
  }

  .timeline-item.left {
    justify-content: flex-end;
  }

  .timeline-item.right {
    justify-content: flex-start;
  }

  .timeline-node {
    width: 20px;
    height: 20px;
    background: var(--color);
    border: 4px solid #222;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    margin: 0 0 0 -78px;
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

  .timeline-item.left .timeline-content {
    margin-right: 3rem;
    text-align: right;
  }

  .timeline-item.right .timeline-content {
    margin-left: 3rem;
    text-align: left;
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

  @media (min-width: 768px) {
  .timeline-item {
    margin: 2rem 5rem;
  }

  .timeline-node {
    width: 24px;
    height: 24px;
    border-width: 5px;
    margin: 0 0 0 -78px;
  }
}

  /* Mobile — all left */
  @media (max-width: 768px) {
    .timeline-item {
      justify-content: flex-start !important;
      margin: 2rem 0;
    }

    .timeline-item.left .timeline-content,
    .timeline-item.right .timeline-content {
      margin: 0 0 0 3rem;
      text-align: left;
      max-width: 85%;
      width: 100%;
      font-size: 0.9rem;
      line-height: 1.6;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--color);
      color: var(--color);
    }

    .timeline-node {
      left: 0;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-width: 3px;
    }
  }
</style>