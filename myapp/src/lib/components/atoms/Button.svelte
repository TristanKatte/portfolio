<script>
  export let label = '';
  export let href = '#';
  export let download = false;
  export let target = null;
</script>

<a
  href={href}
  class="cta-button"
  download={download}
  target={target}
>
  {label}
</a>


<style>

  .cta-button {
  position: relative;
  padding: 15px 45px;
  width: 100%;
  background: transparent;
  border-radius: 0 50px 0 50px;
  border: 2px solid #00c2cb;
  outline: 2px solid #00c2cb;
  outline-offset: -2px;
  font-size: .95rem;
  font-family: 'Orbitron Variable', sans-serif;
  color: #00c2cb;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: outline-offset 200ms ease;
  }

.cta-button:hover {
  color: #e0ffff;
  background-color: var(--heading-color);
  outline-offset: 4px;
  }

.cta-button:active{
  transform: scale(0.95);
  }
</style>