<script lang="ts">
  import type { GuildConfig } from "$utils/type";

  export let config: GuildConfig;
  export let updatePrefix;
  import { Sveltik } from "sveltik";
</script>

<Sveltik
  initialValues={{ prefix: config.prefix }}
  onSubmit={({ prefix }) => {
    updatePrefix(prefix);
  }}
  let:props
>
  <form on:submit|preventDefault={props.handleSubmit}>
    <input
      type="text"
      class="form-control"
      name="prefix"
      on:input={props.handleInput}
      value={config.prefix}
    />
    <br />
    <button type="submit" class="btn btn-secondary">접두사 업데이트</button>
  </form>
</Sveltik>

<style>
  input {
    border: 1px solid rgb(26, 26, 26);
  }
  input[type="text"] {
    background-color: rgb(43, 47, 51);
    color: rgb(255, 255, 255);
  }
</style>
