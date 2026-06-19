<script>
    import { onMount } from "svelte";

    export let ariaLabel = "Scroll to next section";

    let isVisible = true;

    function scrollToNextSection() {
        const sections = Array.from(document.querySelectorAll("section"));
        const currentScroll = window.scrollY + 1; // +1 to avoid exact matches

        // Find the first section that starts after the current scroll
        const nextSection = sections.find(
            (sec) => sec.offsetTop > currentScroll
        );

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    onMount(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 10;
            isVisible = !scrolledToBottom;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<button
    class="scroll-indicator"
    class:hide={!isVisible}
    on:click={scrollToNextSection}
    aria-label={ariaLabel}
>
    <span class="scroll-text">Scroll</span>
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</button>

<style>
    .scroll-indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.6rem;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--muted-text);
        font-family: "Azonix", monospace;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        animation: bounce 2.2s ease-in-out infinite;
        transition: opacity 0.5s ease;
        z-index: 10;
    }

    .scroll-indicator.hide {
        opacity: 0;
        pointer-events: none;
    }

    .scroll-text {
        font-family: inherit;
        font-size: inherit;
        letter-spacing: inherit;
    }

    .scroll-indicator:focus-visible {
        outline: 2px solid var(--highlight);
        outline-offset: 4px;
        border-radius: 4px;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(7px); }
    }

    @media (prefers-reduced-motion: reduce) {
        .scroll-indicator {
            animation: none;
            transition-duration: 0.01s;
        }
    }
</style>
