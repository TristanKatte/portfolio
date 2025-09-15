<script>
    export let href = "#";
    export let ariaLabel = "Scroll to the next section";
</script>

<a {href} class="scroll-indicator" aria-label={ariaLabel}>
    <span class="scroll-arrow">↓</span>
    <span class="scroll-text">Scroll down</span>
</a>

<style>
    .scroll-indicator {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 3rem;
        font-size: 1rem;
        color: var(--brand, #64ffda);
        text-decoration: none;
        cursor: pointer;
    }

    .scroll-text {
        font-family: "Orbitron Variable", sans-serif;
        font-weight: 500;
        font-size: 1.95rem;
        letter-spacing: 1px;
    }

    .scroll-arrow {
        font-size: 2.15rem;
        animation: bounce 1.5s infinite;
        transform-origin: center;
    }

    .scroll-indicator:hover .scroll-arrow,
    .scroll-indicator:focus .scroll-arrow {
        transform: translateY(5px);
        outline: none;
    }

    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(8px);
        }
    }
</style>
