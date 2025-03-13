<script>
    import Logo from '$lib/assets/logo_groen.png';

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<header>
    <img alt="personal logo van mij" src={Logo}>

    <nav class="effect" class:open={isMenuOpen}>
        <button class="hamburger" onclick={toggleMenu} aria-label="Menu">
            <span class="hamburger-icon">&#9776;</span>
        </button>
        <ul>
            <li><a class="link-70" href="/" aria-label="Home">Home</a></li>
            <li><a class="link-70" href="/about" aria-label="About Me">About Me</a></li>
            <li><a class="link-70" href="/projects" aria-label="Projects">Projects</a></li>
            <li><a class="link-70" href="/contact" aria-label="Contact">Contact</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: transparent;
        position: relative;
    }

    img {
        height: 185px;
        margin-right: auto;
    }

    nav {
        display: flex;
        align-items: center;
    }

    nav ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        padding: 0;
        font-family: 'Orbitron Variable', sans-serif;
    }

    nav ul li a:focus-visible {
        outline: 3px solid var(--btn-color);
    }

    .link-70 {
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;
        padding: 10px 20px;
        margin: 0 5px;
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .link-70::before,
    .link-70::after {
        content: "";
        position: absolute;
        display: block;
        border: 0px solid transparent;
        width: 0%;
        height: 0%;
        transition: all 0.5s ease;
    }

    .link-70::after {
        top: 0;
        left: 0;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
    }

    .link-70::before {
        right: 0;
        bottom: 0;
        border-bottom: 2px solid transparent;
        border-right: 2px solid transparent;
    }

    .link-70:hover::before,
    .link-70:hover::after {
        width: 100%;
        height: 100%;
        border-color: var(--btn-color);
    }

    nav a {
        position: relative;
        display: inline-block;
        margin: 0 15px;
        padding: 10px 0;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        font-size: 0.95em;
        transition: color 0.3s ease;
    }

    .hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        z-index: 1000;
    }

    .hamburger-icon {
        font-size: 2rem;
        color: white;
    }

    @media screen and (min-width: 30em) {

        nav {
            z-index: 1;
        }

        nav ul {
            width: 250px;
            justify-items: center;
        }

        nav ul li a {
            cursor: pointer;
        }

        .hamburger {
            display: block;
        }

        img {
            display: none;
        }

        nav ul li {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        font-family: 'Orbitron Variable', sans-serif;
        cursor: pointer;
        }

    }

    @media screen and (max-width: 48em) {
        nav {
            z-index: 1;
        }
        
        img {
            height: 120px;
            margin-right: 22em;
        }

        .hamburger {
            display: block;
        }

        nav ul {
            position: absolute;
            top: 100%;
            right: 0;
            display: none;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.9);
            padding: 1rem;
            width: 250px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        nav.open ul {
            display: flex;
        }

        nav a {
            margin: 10px 0;
            padding: 10px;
            display: block;
        }
    }

    


    /* 

    @media (min-width: 48em) {
        img {
            height: 120px;
            display: block;
            margin-right: 22em;
        }

        .hamburger {
            display: block;
        }

        nav ul {
            position: absolute;
            top: 100%;
            right: 0;
            display: none;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.9);
            padding: 1rem;
            width: 100%; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        nav.open ul {
            display: flex;
            flex-direction: column; 
        }


        nav a {
            margin: 10px 0;
            padding: 10px;
            display: block;
        }
    }

    @media (min-width: 62em) {
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: transparent;
            position: relative;
        }
        nav ul {
            display: flex;
            flex-direction: row;
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 100%; 
        }
        .hamburger {
            display: none;
        }
    } */
</style>
