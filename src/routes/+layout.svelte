<script>
  import Transition from "./transition.svelte";
  import { onNavigate } from "$app/navigation";
  import Header from "../lib/components/organisms/Header.svelte";
  import Footer from "../lib/components/organisms/Footer.svelte";
  import GalaxyBackground from "../lib/components/GalaxyBackground.svelte";  // <-- import
  import FuturisticBackground from "../lib/components/FuturisticBackground.svelte";

  // Design libs
  import "open-props/style";
  import "open-props/normalize";
  import "open-props/buttons";

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



<div class="layout">
 
  <GalaxyBackground /> 

  <Header />
  <main>
    <slot />
    <Transition />
  </main>
  <Footer />
</div>

<style>
  .layout {
    position: relative; /* needed to stack relative children */
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    margin: 0;
    padding: 0;
    /* background-image: var(--gradient-16); */
    overflow-x: hidden;
  }

  main {
    padding-block: var(--size-0);
    flex: 1;
    overflow: hidden;
    /* optionally you can remove your current background image since galaxy is now active */
    /* background-image: url("/images/stars.svg"); */
    /* background-size: 250% 250%; */
    /* background-attachment: fixed; */
    /* background-position: center; */
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
