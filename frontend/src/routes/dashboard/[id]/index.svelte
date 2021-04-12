<script context="module">
  export function load(ctx) {
    let guildId = ctx.page.params.id;
    return { props: { guildId } };
  }
</script>

<script lang="ts">
  export let guildId;
</script>

<h2 class="title">유틸리티 및 관리</h2>
<div class="items">
  <a class="item" href={`/dashboard/${guildId}/welcome`}>
    <div class="itemIn">
      <div class="item-title">안녕하세요</div>
      <div class="item-description">신규 사용자를 환영합니다!</div>
    </div>
  </a>
  <a class="item" href={`/dashboard/${guildId}/prefix`}>
    <div class="itemIn">
      <div class="item-title">접두사</div>
      <div class="item-description">봇의 접두사를 변경합니다!</div>
    </div>
  </a>
</div>

<style>
  .title {
    margin-bottom: 20px;
    font-family: "Open Sans";
    font-size: 15px;
    text-transform: none;
    color: rgba(255, 255, 255, 0.51);
  }
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 25px;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  .item {
    background-color: rgb(62, 66, 70);
    display: flex;
    flex-direction: row;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 10px;
    border-radius: 3px;
    transition: opacity 175ms ease-out 0s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    min-width: 330px;
    min-height: 120px;
    padding: 25px 30px;
    padding-inline-start: 20px;
    text-decoration: none;
  }
  .itemIn {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
  }
  .item-title {
    color: white;
    font-family: Poppins;
    font-size: 20px;
    line-height: 1;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
  }
  .item-description {
    font-family: "Open Sans";
    font-size: 14px;
    color: rgba(255, 255, 255, 0.62);
    margin-top: 10px;
    line-height: 1.4;
  }
</style>
