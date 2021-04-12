<script lang="ts">
  export let guilds: MenuGuild;
  import type { MenuGuild } from "$utils/type";
</script>

<main>
  {#each guilds.included as guild}
    <div class="guild-card">
      <div class="guild-card-title">
        {#if guild.icon}
          <img
            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`}
            size="40"
            alt={`${guild.name} 로고`}
          />
        {:else}
          <div class="logo" size="40">{guild.name.substring(0, 1)}</div>
        {/if}
        <span>{guild.name}</span>
      </div>
      <a
        class="guild-button"
        rel="external"
        sveltekit:prefetch
        sveltekit:noscroll
        href={`/dashboard/${guild.id}`}>대시보드 보기</a
      >
    </div>
  {/each}
  {#each guilds.excluded as guild}
    <div class="guild-card">
      <div class="guild-card-title">
        {#if guild.icon}
          <img
            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`}
            size="40"
            alt={`${guild.name} 로고`}
          />
        {:else}
          <div class="logo" size="40">{guild.name.substring(0, 1)}</div>
        {/if}
        <span>{guild.name}</span>
      </div>
      <a
        class="guild-add-button"
        rel="external"
        sveltekit:prefetch
        sveltekit:noscroll
        href={`https://discord.com/oauth2/authorize?client_id=778570545935024149&scope=bot&permissions=1945201982&guild_id=${guild.id}`}
        >봇 초대하기</a
      >
    </div>
  {/each}
</main>

<style>
  main {
    line-height: 23px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    padding: 0px 0.5em;
    align-self: stretch;
  }
  img {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    cursor: pointer;
    box-sizing: border-box;
    border: 0px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    margin-inline-start: 20px;
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    flex-shrink: 0;
  }
  span {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    cursor: pointer;
    box-sizing: border-box;
    border: 0px;
    font-family: inherit;
    font-style: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    margin-inline-start: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 0 1em;
  }
  .guild-card {
    line-height: 23px;
    box-sizing: border-box;
    border: 0px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0px;
    outline: 0px;
    vertical-align: baseline;
    display: flex;
    flex: 1 1 0%;
    height: 60px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1em;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
  }
  .guild-card-title {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    cursor: pointer;
    box-sizing: border-box;
    border: 0px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-inline-start: -20px;
    margin-bottom: -20px;
  }
  .guild-button {
    outline: none;
    white-space: nowrap;
    user-select: none;
    font-family: "Open Sans", Helvetica, arial, sans-serif;
    line-height: 1;
    font-weight: 400;
    display: flex;
    border-radius: 3px;
    font-size: 13px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 25px;
    transition: border 180ms ease-out 0s, background 180ms ease-out 0s;
    color: rgb(255, 255, 255);
    background: rgb(68, 179, 127);
    border: none;
    cursor: pointer;
    min-height: 32px;
    width: unset;
    min-width: 125px;
    max-width: 300px;
    flex-shrink: 0;
    text-decoration: none;
  }
  .guild-add-button {
    outline: none;
    white-space: nowrap;
    user-select: none;
    font-family: "Open Sans", Helvetica, arial, sans-serif;
    line-height: 1;
    font-weight: 400;
    display: flex;
    border-radius: 3px;
    font-size: 13px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 25px;
    transition: border 180ms ease-out 0s, background 180ms ease-out 0s;
    color: rgb(255, 255, 255);
    background: rgb(68, 71, 76);
    border: none;
    cursor: pointer;
    min-height: 32px;
    min-width: 60px;
    width: unset;
    max-width: 300px;
    flex-shrink: 0;
    text-decoration: none;
  }
  .logo {
    line-height: 23px;
    cursor: pointer;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    margin-inline-start: 20px;
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    border: 1px solid white;
    color: white;
    font-weight: bold;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    user-select: none;
  }
</style>
