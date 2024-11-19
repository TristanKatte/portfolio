<script>
 

</script>

<main>
    <section>
        <h1>Over mij</h1>

        <p>
            Ik ben Tristan Katte en ik woon in Montfoort. Ik ben 26 jaar oud en doe de studie Frontend Design & Development aan de Hogeschool van Amsterdam.
        </p>
        <h2>Skills</h2>
        <ul>
            <li>Web Design</li>
            <li>Svelte/Sveltekit</li>
            <li>HTML/CSS/JavaScript</li>
        </ul>
        <h2>Contact</h2>
        <p>Email: tristan@example.com</p>
    </section>
</main>



<style>
    :root {
        /* colors */
        --main-bg-color: #4b4f58;
        --btn-color: #00adb5;
        --txt-color: #c2c2c2;
        --heading-color: #008080;

        /* headings */
        --heading-large: 4.5em;
        --heading-medium: 2.5em;
        --heading-small: 1.5em;
        --body-txt:1.3em;
    }

    @font-face {
    font-family: "Nunito", sans-serif;
    src: url(/myapp/static/fonts/NunitoSans-VariableFont_YTLC\,opsz\,wdth\,wght.ttf);
    }

    @font-face {
    font-family: "Inconsolata", sans-serif;
    src: url(/myapp/static/fonts/Inconsolata[wdth\,wght].ttf);
    }


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scrollbar-width: none;
    }

main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
  letter-spacing: 0.5px;
  background-color: var(--main-bg-color);
    }

section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  color: var(--txt-color);
    } 

h1, h2 {
  color: var(--heading-color);
  font-family: "Nunito", sans-serif;
  margin: .3em;
  text-align: left;
}

h1 {
  font-size: var(--heading-large);
}

h2 {
    font-size: var(--heading-medium);
}

p {
    font-family: "Inconsolata", sans-serif;
    font-size: var(--body-txt);
}

ul {
    list-style-type: none;
    padding: 0;
}

</style>