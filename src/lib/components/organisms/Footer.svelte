<footer class="site-footer">
  <div class="container">
    <p>&copy; {new Date().getFullYear()} Tristan. All rights reserved.</p>
    <div class="socials">
      <a href="https://github.com/TristanKatte" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/tristan-katte-600b53148/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://www.instagram.com/tristankatte98" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.facebook.com/tristan.katte" target="_blank" rel="noopener">Facebook</a>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    padding: 2rem;
    background-color: var(--bg);
    color: var(--text);
    box-shadow: 0 4px 12px rgba(0, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-top: 1px solid var(--border);
    width: 100vw;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;

    /* Nieuw: zet copyright en socials op één regel */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* zorgt dat het op mobiel onder elkaar valt */
    gap: 1rem;
  }

  .socials {
    display: flex;
    gap: 1.5rem;
  }

  .socials a {
    color: var(--fg, white);
    text-decoration: none;
    font-weight: 500;
  }

  .socials a:hover {
    color: var(--brand, #64ffda);
  }

  /* Mobiel: zet items onder elkaar */
  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
