<script>
    import Logo from '$lib/assets/logo_groen.png'
</script>

<header>
    <img alt="personal logo van mij" src={Logo}>
    <nav>
        
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
        justify-content: center;
    }

    nav {
        display: flex;
        align-items: center; 
        border-radius: 50px 0 50px 0;
        border: 1px solid white;
        width: 100%;
        height: 70px;
    }
 img {
        height: 185px; /* Set a fixed height for the image */
        margin-right: 30rem; /* Add some space between the image and links */
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
        width: 180px;
        outline: none;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 400;
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
        font-size: 0.95em;
        padding: 1em;
        border-radius: 50px 0 50px 0;
        border: 1px solid white;
    }
</style>

