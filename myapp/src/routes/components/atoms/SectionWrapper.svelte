<script>
  export let id = '';
  export let className = '';
  export let label = '';
</script>

<section id={id} class={className} aria-label={label}>
  <slot />
</section>
