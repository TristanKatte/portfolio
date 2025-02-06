<script>
    import Logo from '$lib/assets/logo_groen.png'
</script>

<header>
    <nav class="effect">
       <img alt="personal logo van mij" src={Logo}>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: var(--main-bg-color);
        display: flex;
        justify-content: center;
    }

    nav {
        display: flex;
        align-items: flex-end; 
    }

    nav img {
        height: 185px; /* Set a fixed height for the image */
        margin-right: 12rem; /* Add some space between the image and links */
        margin-top: 1em;
    }

    nav ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style-type: none;
        font-family: "Inconsolata", sans-serif;
        text-decoration: none;
    }

    nav a {
        position: relative;
        display: inline-block; 
        margin: 15px 25px;
        outline: none;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
        font-size: 0.95em;
        padding: 0.8em;
    }

    nav a:hover,
    nav a:focus {
        outline: none;
    }

    .effect a {
        margin: 0 10px;
        padding: 10px 20px;
    }

    /*weergeeft een blauwe streep*/
    .effect a::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--btn-color);
        content: "";
        transition: top 0.3s;
    }

    /*geeft een border links en onder de link als eroverheen gescrolld is*/
    .effect a::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 2px;
        background: var(--btn-color);
        content: "";
        transition: height 0.3s;
    }

    .effect a:hover::before {
        top: 100%;
        opacity: 1;
    }

    .effect a:hover::after {
        height: 100%;
    }

    li {
        letter-spacing: 1px;
    }

    /*tekst wordt groter wanneer er gescrolld wordt*/
    li:hover {
        color: var(--txt-color);
        background: transparent;
        cursor: pointer;
        font-size: 1em;
    }

    /*geeft het laatste list item geen border*/
    li:last-child {
        border: none;
    }

    ul li {
        margin: 1em;
        text-align: left;
        text-transform: capitalize;
    }
</style>

