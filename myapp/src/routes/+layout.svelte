<script>
    import Header from './components/Header.svelte'

    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'

    import '../app.css'

    let { children, data } = $props()
</script>

<section class="layout">
    <Header />

    <main>
        
    </main>
</section>

<style>
    .layout {
        height: 100%;
        max-inline-size: 1440px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    main {
        padding-block: var(--size-9);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>