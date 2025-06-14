<script>
  import Transition from './transition.svelte';
  import { onNavigate } from '$app/navigation';

  // Design libs
  import 'open-props/style';
  import 'open-props/normalize';
  import 'open-props/buttons';

  // Fonts
  import '@fontsource/alata';
  import '@fontsource-variable/orbitron';

  // Global section styles
  import '$lib/styles/sections.css';

  // View transitions
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

<link rel="stylesheet" href="/css/styles.css" />

<div class="layout">
  <main>
    <slot />
    <Transition />
  </main>
</div>

<style>
  .layout {
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    background-color: #000000;
    background-image: linear-gradient(147deg, #434343 0%, #000000 74%);
    margin: 0;
    padding: 0;
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
