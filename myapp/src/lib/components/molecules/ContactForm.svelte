<script>
  let name = '';
  let message = '';
</script>

<form>
  <label>
    Naam
    <input bind:value={name} required />
  </label>

  <label>
    Bericht
    <textarea bind:value={message} required></textarea>
  </label>

  <button type="submit">Verstuur</button>
</form>
