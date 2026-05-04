<script>
    import { onMount } from "svelte";

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
    aria-label="Scroll to next section"
>
    <span class="scroll-arrow">↓</span>
    <span class="scroll-text">Scroll down</span>
</button>

<style>
    .scroll-indicator {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 3rem;
        font-size: .75rem;
        color: var(--brand, #64ffda);
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        transition: opacity 0.5s ease, transform 0.5s ease;
        z-index: 10;
    }

    .scroll-indicator.hide {
        opacity: 0;
        transform: translateY(10px);
        pointer-events: none;
    }

    .scroll-text {
        font-family: "Nirequa", sans-serif;
        font-weight: 500;
        font-size: 1.75rem;
        letter-spacing: 1px;
    }

    .scroll-arrow {
        font-size: 1.65rem;
        animation: bounce 1.5s infinite;
        transform-origin: center;
    }

    .scroll-indicator:hover .scroll-arrow,
    .scroll-indicator:focus .scroll-arrow {
        transform: translateY(5px);
        outline: none;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(8px);
        }
    }
</style>
