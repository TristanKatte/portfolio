<script>
  import Transition from "./transition.svelte";
  import { onNavigate } from "$app/navigation";
  import Header from "../lib/components/organisms/Header.svelte";
  import Footer from "../lib/components/organisms/Footer.svelte";
  import HexagonCanvas from "../lib/components/molecules/HexagonCanvas.svelte";

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
 
  
  
 <HexagonCanvas />
  <Header />
 
    <slot />
    <Transition />
  
  <Footer />
</div>

<style>
  .layout {
    position: relative; /* needed to stack relative children */
    height: 100%;
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--main-bg-color);
    overflow-x: hidden;
    z-index: 1;
  }

  :global(body) {
    position: relative;
  }

  /* Make sure HexagonCanvas fills the full page */
  :global(canvas) {
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.25;
    position: fixed;
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

  }

  @media (max-width: 480px) {
    .layout {
      padding-inline: var(--size-2);
      flex-direction: column;
      justify-content: flex-start;
    }

 
  }
</style>
