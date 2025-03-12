<script>
    import About from './About.svelte';
    import Photo from '$lib/assets/profielfoto-zw.jpg'
    import { onMount } from 'svelte';
  
  onMount(async () => {
    const { default: gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.about-me').forEach((item, index) => {

      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2
      });
    });
  });
</script>


<main>

<article class="about-me">
  <section class="text ">
    <h2>A little about me</h2>
    <p>Hi! I'm Tristan Katte. I am a passionate developer and designer who loves to create beautiful and functional web applications.
       I am currently in my 2nd and last year at the study Frontend Design & Development at the Amsterdam University of Applied Sciences.
    </p>
    <a class="button" href="/about" aria-label="More about me">More about me</a>
  </section>
  
    <section class="about">
        <enhanced:img class="pic img" alt="Foto van mij" src="$lib/assets/profielfoto-zw.jpg" />
    </section>
  </article>
  
 
 
  <article>
    <About />
  </article>
</main>


<style>

  main {
    width: 100%;
    height: 100%;
      }
  
  .img {
    scale: 1;
    border-radius: 12px;
    border: 16px solid var(--heading-color);
    border-style: ridge;
    }

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 90px 90px;
    font-family: 'alata', sans-serif;
    }

  .button {
    position: relative;
    padding: 15px 45px;
    width: 50%;
    background: transparent;
    border-radius: 0 50px 0 50px;
    border: 2px solid #00c2cb;
    outline: 2px solid #00c2cb;
    outline-offset: -2px;
    font-size: .95rem;
    font-family: 'Orbitron Variable', sans-serif;
    color: #00c2cb;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: outline-offset 200ms ease;
    }

  .button:hover {
    color: #e0ffff;
    background-color: var(--heading-color);
    outline-offset: 4px;
    }
  
  .button:active{
    transform: scale(0.95);
    }

  .about-me {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 90px 90px; 
    }
  
  .pic {
    height: auto;
    width: 400px;
    border-radius: 18px;
    }

  .about {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    }

  .text {
    max-width: 800px;
    margin-right: 50px;
    font-family: 'alata', sans-serif;
    word-wrap: break-word;
    line-height: 1.6;
    letter-spacing: .5em;
    }

  .text h2 {
    color: var(--heading-color);
    font-weight: 400;
    margin-bottom: 10px;
    font-family: "Azonix";
    }


  .text p {
    color: var(--txt-color);
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 2px;
    margin-bottom: 1.5em;
    }
 
@media (min-width: 30em) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
    }

    .img {
      scale: 0.95;
      border-radius: 12px;
      border: 16px solid var(--heading-color);
      border-style: ridge;
    }

    article {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 90px 90px;
      font-family: 'alata', sans-serif;
    }
    
    .about-me {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
    }

    .text {
      margin-bottom: 30px;
      margin-right: 0;
      text-align: left;
    }

    .text p {
      font-family: 'alata', sans-serif;
    }

    .text h2 {
      font-size: 24px;
    }

    .about {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .pic {
      height: auto;
      width: 100%;
      max-width: 300px;
      border-radius: 18px;
    }

    .button {
      position: relative;
      width: 100%;
      padding: 15px 30px;
      margin: auto;
      background: transparent;
      border-radius: 0 50px 0 50px;
      border: 2px solid var(--btn-color);
      outline: 2px solid var(--btn-color);
      outline-offset: -2px;
      font-size: 1rem;
      font-family: 'Orbitron Variable', sans-serif;
      color: #00c2cb;
      font-weight: 300;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: outline-offset 200ms ease;
    }

    .button:hover {
      color: #e0ffff;
      background-color: var(--heading-color);
      outline-offset: 4px;
    }
  
    .button:active{
      transform: scale(0.95);
    }
}

@media (min-width: 48em) {

  .img {
    scale: 1;
    border-radius: 12px;
    border: 16px solid var(--heading-color);
    border-style: ridge;
}

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /* padding: 90px 90px; */
    font-family: 'alata', sans-serif;
  }

  .button {
    position: relative;
    padding: 15px 45px;
    background: transparent;
    border-radius: 0 50px 0 50px;
    border: 2px solid #00c2cb;
    outline: 2px solid #00c2cb;
    outline-offset: -2px;
    font-size: .95rem;
    font-family: 'Orbitron Variable', sans-serif;
    color: #00c2cb;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: outline-offset 200ms ease;
  }

  .button:hover {
  color: #e0ffff;
  background-color: var(--heading-color);
  outline-offset: 4px;
  }
  
  .button:active{
  transform: scale(0.95);
  }

  .about-me {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 90px 90px;
    
  }
  
.pic {
  height: auto;
  width: 400px;
  border-radius: 18px;
}

.about {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.text {
    max-width: 800px;
    margin-right: 50px;
    font-family: "Nunito", sans-serif;
    word-wrap: break-word;
    line-height: 1.6;
    letter-spacing: .5em;
}

.text h2 {
  color: var(--heading-color);
  font-weight: 400;
  margin-bottom: 10px;
  font-family: "Azonix";
}


.text p {
  color: var(--txt-color);
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1px;
  margin-bottom: 1.5em;
}

}

@media (min-width: 62em) {
  
}

@media (min-width: 75em) {

}

</style>
