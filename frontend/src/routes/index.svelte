<script lang="ts">
  function login() {
	  window.location.href = "http://localhost:3000/api/auth/discord"
  }
</script>

<main>
  <button type="button" class="btn btn-secondary" on:click={login}>login</button>
</main>
