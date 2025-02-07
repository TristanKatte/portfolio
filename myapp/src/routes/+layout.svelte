<script>
    import Footer from './components/Footer.svelte'
	import Header from './components/Header.svelte'

    import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

    
</script>

<div class="layout">
    
    <main>

        <slot />
    </main>

    <Footer />
</div>

<style>

.layout {
        height: 100%;
        max-width: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    main {
        padding-block: var(--size-0);
        background-image: var(--gradient-8);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>