<script lang="ts">
  import type { GuildConfig, Role } from "$utils/type";

  export let config: GuildConfig;
  export let roles: Role[];
  export let updateDefalteRole;
  import { Sveltik } from "sveltik";
</script>

<Sveltik
  initialValues={{ defaultRole: config.defaultRole }}
  onSubmit={({ defaultRole }) => {
    console.log(defaultRole);
    updateDefalteRole(defaultRole);
  }}
  let:props
>
  <form on:submit|preventDefault={props.handleSubmit}>
    <select
      name="defaultRole"
      class="form-select"
      on:input={props.handleInput}
      value={config.defaultRole}
    >
      {#each roles as role}
        <option value={role.id}>{role.name}</option>
      {/each}
    </select>
    <br />
    <button type="submit" class="btn btn-secondary">Update Role</button>
  </form>
</Sveltik>

<style>
  select {
    border: 1px solid rgb(26, 26, 26);
    color: rgb(255, 255, 255);
    background-color: rgb(43, 47, 51);
  }
</style>
