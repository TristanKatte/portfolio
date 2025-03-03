<script>
    import About from './About.svelte';
    import Photo from '$lib/assets/profielfoto-zw.jpg'
</script>


<main>

<article class="about-me">
  <section class="text">
    <h2>A little bit about me</h2>
    <p>Hi! I'm Tristan Katte. I am a passionate developer and designer who loves to create beautiful and functional web applications.
       I am currently in my 2nd and last year at the study Frontend Design & Development at the Amsterdam University of Applied Sciences.
    </p>
    <a class="button" href="/about">More about me</a>
  </section>
    <section class="about">
        <img class="pic" alt="Foto van mij" src={Photo} />
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
  
    
  img {
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
    font-family: 'Orbitron Variable', sans-serif;
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
 
@media (max-width: 480px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
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
    padding: 15px 30px;
    background: transparent;
    border-radius: 0 50px 0 50px;
    border: 2px solid #00c2cb;
    outline: 2px solid #00c2cb;
    outline-offset: -2px;
    font-size: .75rem;
    font-family: 'Orbitron Variable', sans-serif;
    color: #00c2cb;
    font-weight: 300;
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
}

</style>
