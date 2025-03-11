<script>
    import Footer from './components/Footer.svelte'
    import Header from './components/Header.svelte'
    import Transition from './transition.svelte'
    import { onNavigate } from '$app/navigation';


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
       <Transition />
    </main>
    <Footer />
</div>

<style>
.layout {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    padding-inline: var(--size-7);
    background-color: #000000;
    background-image: linear-gradient(147deg, #434343 0%,  #000000 74%);
}



main {
    padding-block: var(--size-0);
    flex: 1;
}

@media (min-width: 1440px) {
    .layout {
        padding-inline: 0;
    }
}

@media (max-width: 768px) {
    .layout {
        padding-inline: var(--size-4);
        flex-direction: column;
        align-items: center;
    }

    main {
        width: 100%;
        padding-block: var(--size-2);
    }
}

@media (max-width: 480px) {
    .layout {
        padding-inline: var(--size-2);
        flex-direction: column;
        justify-content: flex-start;
    }

    main {
        padding-block: var(--size-1);
    }
}
    </style>