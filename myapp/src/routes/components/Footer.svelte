<script>
    import SocialIcons from '@rodneylab/svelte-social-icons';
</script>

<footer class="footer" aria-labelledby="footer-label">
    <ul>
        <li>
            <a href="https://github.com/TristanKatte" target="_blank">
                <SocialIcons alt="" network="github" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />
            </a>
            
        </li>
        <li>
            <a href="https://www.linkedin.com/in/tristan-katte-600b53148/" target="_blank">
                <SocialIcons alt="" network="linkedin" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/tristankatte98" target="_blank">
                <SocialIcons alt="" network="instagram" fgColor="#eeeeee" bgColor="#111111" width="60" height="60" />         
            </a>
        </li>
    </ul>
    <p>Copyright © 2025 by <strong>Tristan Katte</strong></p>
</footer>

<style>


 ul {
        gap: 1rem;
        display: flex;
        justify-self: center;
        list-style-type: none;
    }
    li a {
        color: var(--btn-color);
        transition: 0.2s ease;
    } 
    
    li a:hover {
        box-shadow: 0 0 15px 5px var(--btn-color);
    }

    
p {
        color: var(--txt-color);
        padding: 0.5rem 0 5rem 0;
        text-align: center;
    }
</style>
