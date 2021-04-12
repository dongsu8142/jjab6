<script lang="ts">
  import type { MenuGuild, User } from "$utils/type";
  import { onMount } from "svelte";
  import { getGuilds, getUserDetails } from "../../utils/api";
  import GuildList from "$lib/GuildList.svelte";

  let loding: boolean = true;
  let user: User;
  let guilds: MenuGuild;
  onMount(() => {
    getUserDetails()
      .then(({ data }) => {
        user = data;
        return getGuilds();
      })
      .then(({ data }) => {
        guilds = data;
        loding = false;
      })
      .catch((err) => {
        alert("로그인을 해주세요");
        window.location.href = "http://localhost:3000/api/auth/discord";
      });
  });
</script>

{#if !loding}
  <div>
    <h1>서버를 선택해 주세요</h1>
    <GuildList {guilds} />
  </div>
{/if}


<style>
  h1 {
    line-height: 23px;
    box-sizing: border-box;
    border: 0px;
    font-style: inherit;
    margin: 0px;
    outline: 0px;
    vertical-align: baseline;
    font-family: Poppins, Helvetica, arial, sans-serif;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    padding: 20px 0px 10px;
    font-weight: 600;
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
</style>