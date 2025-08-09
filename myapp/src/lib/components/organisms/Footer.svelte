<footer class="site-footer">
  <div class="container">
    <p>&copy; {new Date().getFullYear()} Tristan. All rights reserved.</p>
    <div class="socials">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    padding: 2rem;
    background-color: var(--brand-soft);
    color: var(--text);
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .socials {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
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
</style>
