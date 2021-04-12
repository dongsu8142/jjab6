<script context="module">
  export function load(ctx) {
    let guildId = ctx.page.params.id;
    return { props: { guildId } };
  }
</script>

<script lang="ts">
  import PrefixMenu from "$lib/PrefixMenu.svelte";
  import type { GuildConfig } from "$utils/type";
  import { onMount } from "svelte";
  import { getGuildConfig } from "../../../utils/api";
  import { updateGuildPrefix } from "../../../utils/api";
  export let guildId;

  let loding: boolean = true;
  let config: GuildConfig;
  onMount(() => {
    getGuildConfig(guildId)
      .then(({ data }) => {
        config = data;
        loding = false;
      })
      .catch((err) => {
        alert("로그인을 해주세요");
        window.location.href = "http://localhost:3000/api/auth/discord";
      });
  });

  async function updatePrefix(prefix) {
    updateGuildPrefix(guildId, prefix);
  }
</script>

{#if !loding}
  <div class="PluginWrapper">
    <span>
      <div class="pluginHeading">
        <div class="pluginTitle">접두사</div>
      </div>
      <PrefixMenu {config} {updatePrefix} />
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
