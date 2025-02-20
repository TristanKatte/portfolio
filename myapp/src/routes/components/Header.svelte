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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
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

    @media screen and (max-width: 768px) {
        img {
            height: 120px;
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
            width: 200px;
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


</style>
