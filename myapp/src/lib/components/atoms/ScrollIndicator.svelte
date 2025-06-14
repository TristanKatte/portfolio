<script>
    export let href = "#";
    export let ariaLabel = "Scroll naar volgende sectie";
</script>

<a {href} class="scroll-indicator" aria-label={ariaLabel}> ⌄ </a>

<style>
    .scroll-indicator {
        display: inline-block;
        margin-top: 3rem;
        font-size: 2rem;
        color: var(--brand, #64ffda);
        animation: bounce 1.5s infinite;
        text-decoration: none;
    }

    .scroll-indicator:hover,
    .scroll-indicator:focus {
        transform: translateY(5px);
        outline: none;
    }
</style>
