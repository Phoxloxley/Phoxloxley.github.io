<template>
  <div id="Topbar" :class="changeTopbarState">
    <div class="topbar-info">
      <img
        src="~/static/Twitch_Logo.png"
        class="topbar-logo"
        title="Phoxfire Logo"
        alt="logo"
      />
      <span class="topbar-name">Phoxfire Loxley</span>
    </div>

    <div class="topbar-nav">
      <nav>
        <nuxt-link to="/"><i class="fa fa-home"></i>Home</nuxt-link>
        <nuxt-link to="/code">
          <i class="fa fa-code"></i>Code Examples
        </nuxt-link>
        <nuxt-link to="/twitch"> <i class="fab fa-twitch"></i>Twitch</nuxt-link>
        <nuxt-link to="/contact">
          <i class="fa fa-envelope"></i>Contact Me
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#Topbar {
  display: table-row;
  position: relative;
  width: 100%;
  height: 4rem;
  background-color: #000;
  transition: all 0.3s;
  box-shadow: 6px 5px 10px -7px #000;
  .topbar-info {
    position: relative;
    float: left;
    height: inherit;
    line-height: 56px;
    .topbar-logo {
      vertical-align: middle;
      margin: 3px 10px;
      height: 45px;
      width: 45px;
    }
    .topbar-name {
      color: #fff;
      font-size: 28px;
      margin: 14px 0;
      padding: 0 14px;
    }
  }
  .topbar-nav {
    position: relative;
    float: right;
    height: inherit;
    line-height: 56px;
    nav > a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      padding: 18px;
      > i {
        margin-right: 18px;
      }
      &:hover {
        color: #ff5733;
      }
    }
  }
}
</style>
