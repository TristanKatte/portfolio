<script>
    import About from'./About.svelte';
</script>

<main>

<article class="about-me">
    <section class="about">
        <img src="./images/profielfoto-zw.jpg" class="pic" alt="Foto van mij" />
      <section class="text">
        <h2>About me</h2>
        <p>Hi! I'm Tristan Katte. I am a passionate developer and designer who loves to create beautiful and functional web applications.</p>
      </section>
    </section>
</article>


</main>


<style>

    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    img {
    scale: 0.75;
    height: auto;
    width: 500px;
    border-radius: 12px;
}
   
.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 90px 0;
  background: var(--main-bg-color);
}

.pic {
  height: auto;
  width: 400px;
  border-radius: 12px;
}

.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
    max-width: 600px;
    margin-left: 10px;
}

.text h2 {
  color: var(--heading-color);
  font-weight: 600;
  margin-bottom: 10px;
}


.text p {
  color: var(--txt-color);
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1px;
}

</style>