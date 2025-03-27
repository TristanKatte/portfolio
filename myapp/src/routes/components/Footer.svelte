<script>
    import SocialIcons from '@rodneylab/svelte-social-icons';
</script>

<footer class="footer" aria-labelledby="footer-label">
    <ul>
        <li>
            <a href="https://github.com/TristanKatte" target="_blank" aria-label="Github">
                <SocialIcons alt="" network="github" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/tristan-katte-600b53148/" target="_blank" aria-label="LinkedIn">
                <SocialIcons alt="" network="linkedin" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/tristankatte98" target="_blank" aria-label="Instagram">
                <SocialIcons alt="" network="instagram" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />         
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/tristan.katte" target="_blank" aria-label="Facebook">
                <SocialIcons alt="" network="facebook" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />         
            </a>
        </li>
        <li>
            <a href="https://codepen.io/tristan-katte" target="_blank" aria-label="Codepen">
                <SocialIcons alt="" network="codepen"  fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />         
            </a>
        </li>
    </ul>
    <p>Copyright © 2025 by <strong>Tristan Katte</strong></p>
</footer>

<style>

    footer {
        background-color: transparent;
        margin-top: 10em;
    }
    
    ul {
        gap: 1rem;
        display: flex;
        justify-content: center; 
        list-style-type: none;

    }
    li a {
        color: var(--btn-color);
        transition: 0.2s ease;
        border-radius: 100%;
    } 
    
    li a:hover {
        box-shadow: 0 0 15px 5px var(--btn-color);
    }

    p {
        color: var(--txt-color);
        padding: 0.5rem 0 5rem 0;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        footer {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        ul {
            display: flex;
            justify-content: flex-start;
        }
    }

    
</style>
