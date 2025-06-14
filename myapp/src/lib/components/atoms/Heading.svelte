<script>
    export let level = "h1";
    export let text = "";
    export let className = "";
</script>

<svelte:element this={level} class={className}>
    {text}
</svelte:element>