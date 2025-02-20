<script>
  import { fade } from 'svelte/transition';
  export let duration = 300;
</script>

<div in:fade={{ duration }} out:fade={{ duration }}>
  <slot />
</div>
