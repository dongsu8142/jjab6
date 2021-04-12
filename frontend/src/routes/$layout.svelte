<main>
  <header>
    <div class="nv-nameBox">
      <a class="nv-name" href="/">JJAB6</a>
      <div class="nv-item-div">
        <nav class="nv-item-nav">
          <ul class="nv-item-ul">
            <li class="nv-item-li">
              <a href="/dashboard">대시보드</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <section>
    <div class="container">
      <slot />
    </div>
  </section>
</main>

<style>
  header {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 32px;
    background-color: rgb(34, 36, 38);
    min-height: 72px;
  }
  .nv-nameBox {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    box-sizing: border-box;
    border: 0px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    max-width: 1200px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
  }
  .nv-name {
    line-height: 23px;
    box-sizing: border-box;
    border: 0px;
    font-style: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    font-family: Poppins;
    font-weight: bold;
    font-size: 23px;
    letter-spacing: 0.55px;
    text-align: center;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border-inline-end: 0.5px solid rgba(255, 255, 255, 0.65);
    padding-inline-end: 30px;
  }
  .nv-item-div {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
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
    flex: 1 1 0%;
    align-self: stretch;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-inline-end: 30px;
  }
  .nv-item-nav {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin-inline-start: 30px;
    display: flex;
    align-self: stretch;
  }
  .nv-item-ul {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
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
    list-style: none;
    display: flex;
    align-self: stretch;
  }
  .nv-item-li {
    color: rgba(255, 255, 255, 0.7);
    line-height: 23px;
    list-style: none;
    box-sizing: border-box;
    border: 0px;
    font-style: inherit;
    font-weight: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    white-space: nowrap;
    font-family: "Open Sans";
    font-size: 13px;
    letter-spacing: 0.55px;
    display: flex;
    align-self: stretch;
    border-bottom: 3px solid transparent;
    margin-inline-end: 30px;
  }
  .nv-item-li a {
    line-height: 23px;
    list-style: none;
    white-space: nowrap;
    letter-spacing: 0.55px;
    box-sizing: border-box;
    border: 0px;
    font-style: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    vertical-align: baseline;
    font-family: Poppins, Helvetica, arial, sans-serif;
    color: rgb(255, 255, 255);
    opacity: 0.7;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 175ms ease-out 0s;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  section {
    margin-top: 10px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0px 20px 120px;
    margin-top: 10px;
  }
</style>
