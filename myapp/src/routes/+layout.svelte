<script>
    import Footer from './components/Footer.svelte'
    import Header from './components/Header.svelte'
    import Transition from './transition.svelte'

    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'

    import '@fontsource/alata';
    import '@fontsource-variable/orbitron';

    onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>

<div class="layout">
    <Header />
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
    margin-inline: auto;
    padding-inline: var(--size-7);
    background-image: var(--gradient-8);
}

main {
    padding-block: var(--size-0);
}

@media (min-width: 1440px) {
    .layout {
        padding-inline: 0;
    }
}
</style>
