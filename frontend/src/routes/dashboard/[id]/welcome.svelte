<script context="module">
  export function load(ctx) {
    let guildId = ctx.page.params.id;
    return { props: { guildId } };
  }
</script>

<script lang="ts">
  import WelcomeMenu from "$lib/WelcomeMenu.svelte";
  import type { GuildConfig, Role } from "$utils/type";
  import { onMount } from "svelte";
  import {
    getGuildConfig,
    getGuildRoles,
    updateGuildDefalteRole,
  } from "../../../utils/api";
  export let guildId;

  let loding: boolean = true;
  let config: GuildConfig;
  let roles: Role[];
  onMount(() => {
    getGuildConfig(guildId)
      .then(({ data }) => {
        config = data;
        return getGuildRoles(guildId);
      })
      .then(({ data }) => {
        roles = data;
        loding = false;
      })
      .catch((err) => {
        alert("로그인을 해주세요");
        window.location.href = "http://localhost:3000/api/auth/discord";
      });
  });

  async function updateDefalteRole(defaultRole) {
    updateGuildDefalteRole(guildId, defaultRole);
  }
</script>

{#if !loding}
  <div class="PluginWrapper">
    <span>
      <div class="pluginHeading">
        <div class="pluginTitle">안녕하세요</div>
      </div>
      <WelcomeMenu {config} {roles} {updateDefalteRole} />
    </span>
  </div>
{/if}

<style>
  .pluginTitle {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    box-sizing: border-box;
    border: 0px;
    font-style: inherit;
    margin: 0px;
    outline: 0px;
    vertical-align: baseline;
    font-family: Poppins, Helvetica, arial, sans-serif;
    text-transform: uppercase;
    padding: 0px 0px 10px;
    font-size: 14px;
    font-weight: 600;
  }
</style>
