<script>
    import About from './About.svelte';
    import Header from './Header.svelte'
    import Photo from '$lib/assets/profielfoto-zw.jpg'
</script>

<Header />
<main>

<article class="about-me">
  <section class="text">
    <h2>About me</h2>
    <p>Hi! I'm Tristan Katte. I am a passionate developer and designer who loves to create beautiful and functional web applications.
       I am currently in my 2nd and last year at the study Frontend Design & Development at the Amsterdam University of Applied Sciences.
    </p>
    <br>
    <p>Right now, I'm learning about Svelte and how you can build good component libraries and jow you can add awesome animations with GSAP. 
       Besides that, I've learned about the fundamentals of HTML/CSS/Javascript and their best practices for accesibility and progressive enhancement.
    </p>
  </section>
    <section class="about">
        <img class="pic" alt="Foto van mij" src={Photo} />
    </section>

    <section>
      <About />
    </section>


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
    border: 4px solid var(--heading-color)
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
    max-width: 500px;
    margin-right: 50px;
    font-family: Inconsolata, sans-serif;
    word-wrap: break-word;
    line-height: 1.6;
}

.text h2 {
  color: var(--heading-color);
  font-weight: 600;
  margin-bottom: 10px;
  font-family: "Nunito", sans-serif;
}


.text p {
  color: var(--txt-color);
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1px;
}



</style>
