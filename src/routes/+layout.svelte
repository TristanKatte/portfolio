<script>
  import Transition from "./transition.svelte";
  import { onNavigate } from "$app/navigation";
  import Header from "../lib/components/organisms/Header.svelte";
  import Footer from "../lib/components/organisms/Footer.svelte";
 


  // Design libs
  import "open-props/style";
  import "open-props/normalize";
  import "open-props/buttons";
    import HexagonCanvas from "../lib/components/molecules/HexagonCanvas.svelte";

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


<HexagonCanvas />
<div class="layout">
 
  
  

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
     background: rgba(15, 15, 15, 0.65);
    overflow-x: hidden;
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