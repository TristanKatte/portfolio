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
        --main-bg-color: #4b4f58;
        --btn-color: #00adb5;
        --txt-color: #c2c2c2;
        --heading-small: #008080;
    }


    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: var(--main-bg-color);
    overflow: hidden;
    }

    section {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 800px;
    margin: auto;
    padding: 20px;
    color: var(--txt-color);
    }

    h1, h2 {
    color: var(--heading-small);
}

ul {
    list-style-type: none;
    padding: 0;
}

</style>