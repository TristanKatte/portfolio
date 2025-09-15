<script lang="ts">
  import { SliceZone } from '@prismicio/svelte';
  import { components } from '$lib/slices';
  export let slices;
</script>

<SliceZone {slices} {components} />
