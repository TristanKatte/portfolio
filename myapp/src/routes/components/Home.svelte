<script>
  import { onMount } from 'svelte';

onMount(async () => {
  const { default: gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('.home').forEach((item, index) => {

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

<article class="home">
  <section>
    <figure>
      <enhanced:img class="pic img" alt="Foto van mij" src="$lib/assets/profielfoto-zw.jpg" />
    </figure>
  </section>
<section class="home-content">
  <h2>About me</h2>
  <p>Hi! I'm Tristan Katte. I am a passionate developer and designer who loves to create beautiful and functional web applications.
     I am currently in my 2nd and last year at the study Frontend Design & Development at the Amsterdam University of Applied Sciences.
  </p>
    <a class="button"  href="/about" aria-label="More about me">More about me</a>
</section>

</article>
</main>


<style>

main  {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

figure {
    border-radius: 20px;
    width: 100%;
    margin: auto;
  }

.home {
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 0 10%;
    background-size: cover;
    background-position: center;
  }

.home-content {
    max-width: 100%;
    margin-right: 50px;
    font-family: 'alata', sans-serif;
    word-wrap: break-word;
    line-height: 1.6;
    letter-spacing: .5em;
  }

.home-content h2 {
  color: var(--heading-color);
  font-weight: 400;
  margin-bottom: 10px;
  font-family: "Azonix";
  }

.home-content p {
  color: var(--txt-color);
  font-size: 32px;
  line-height: 1.6;
  letter-spacing: 2px;
  margin-bottom: 1.5em;
  }

  .pic {
    border-radius: 12px;
    border: 16px solid var(--heading-color);
    border-style: ridge;
    scale: .80;
    margin-right: 3.5em;
  }

.button {
  position: relative;
  padding: 15px 45px;
  width: 100%;
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

  @media (max-width: 30em) {
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
  
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .home-content {
    margin-bottom: 30px;
    margin-right: 0;
    text-align: left;
  }

  .home-content p {
    font-family: 'alata', sans-serif;
  }

  .home-content h2 {
    font-size: 24px;
    color: var(--heading-color);
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

@media  (max-width: 48em) {

.img {
  scale: 1;
  border-radius: 12px;
  border: 16px solid var(--heading-color);
  border-style: ridge;
}

figure {
    border-radius: 20px;
    width: 100%;
    margin: auto;
    margin-bottom: 1.5em;
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: 'alata', sans-serif;
}

.button {
  position: relative;
  padding: 15px 45px;
  width: 100%;
  background: transparent;
  border-radius: 0 50px 0 50px;
  border: 2px solid #00c2cb;
  outline: 2px solid #00c2cb;
  outline-offset: -2px;
  font-size: .75rem;
  font-family: 'Orbitron Variable', sans-serif;
  color: #00c2cb;
  font-weight: 200;
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

.home {
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
margin-right: 3.5em;
}


.home-content {
  max-width: 600px;
  margin-right: 50px;
  font-family: "Nunito", sans-serif;
  word-wrap: break-word;
  line-height: 1.6;
  letter-spacing: .5em;
  margin-left: 3.5em;
}

.home-content h2 {
color: var(--heading-color);
font-weight: 400;
margin-bottom: 10px;
font-family: "Azonix";
}


.home-content p {
color: var(--txt-color);
font-size: 18px;
line-height: 25px;
letter-spacing: 1px;
margin-bottom: 1.5em;
}

}

@media (max-width: 64em) {
   .home {
     display: flex;
     align-items: center;
     height: 100vh;
     padding: 0 10%;
     background-size: cover;
     background-position: center;
   }
 
 .home-content {
     max-width: 500px;
     margin-left: 3.5em;
     font-family: 'alata', sans-serif;
     word-wrap: break-word;
     line-height: 1.6;
     letter-spacing: .5em;
   }
 
   .home-content h2 {
     color: var(--heading-color);
   }
 
 .img {
     scale: 0.95;
     border-radius: 12px;
     border: 16px solid var(--heading-color);
     border-style: ridge;
     margin-right: 3.5em;
   }
 
 .button {
   position: relative;
   padding: 15px 45px;
   width: 100%;
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
   text-align: center;
   cursor: pointer;
   transition: outline-offset 200ms ease;
   }
 
 }


</style>