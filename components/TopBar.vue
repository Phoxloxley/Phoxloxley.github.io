<template>
  <div id="Topbar" :class="changeTopbarState">
    <button id="toggle" type="button" class="btn" @click="toggleTopbar">
      <i class="fa" :class="flipChevron"></i>
    </button>

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
export default {
  data() {
    return {
      isOpen: true
    }
  },

  computed: {
    changeTopbarState: function() {
      return {
        closed: !this.isOpen,
        open: this.isOpen
      }
    },
    flipChevron: function() {
      return {
        'fa-chevron-down': !this.isOpen,
        'fa-chevron-up': this.isOpen
      }
    }
  },

  methods: {
    toggleTopbar: function() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
#Topbar {
  display: table-row;
  position: relative;
  width: 100%;
  background-color: #000;
  transition: all 0.3s;
  box-shadow: 6px 5px 10px -7px #000;
  #toggle {
    position: absolute;
    top: 56px;
    right: 0;
    height: 49px;
    width: auto;
    border-radius: 0 0 8px 8px;
    background-color: #000;
    color: #232645;
    transition: all 0.2s;
    box-shadow: 5px 5px 10px -7px #000;
    z-index: 3;
    &:hover {
      color: #ff5733;
    }
  }
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
#Topbar.closed {
  height: 0;
  top: -56px;
}
#Topbar.open {
  height: 56px;
  top: 0;
}
</style>
