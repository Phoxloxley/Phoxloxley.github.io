<template>
  <div id="topbar" :class="changeTopbarHeight">
    <button
      id="toggle"
      type="button"
      class="btn py-0 px-4"
      @click="toggleTopbar"
    >
      <i class="fa" :class="flipChevron"></i>
    </button>

    <div class="topbar-info">
      <img
        src="~/assets/images/Twitch_Logo.png"
        class="topbar-logo"
        title="Phoxfire Logo"
        alt="logo"
      />
      <span class="topbar-name">Phoxfire Loxley</span>
    </div>

    <div class="topbar-nav">
      <nav>
        <nuxt-link to="/"><i class="fa fa-home"></i>Home</nuxt-link>
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
    changeTopbarHeight: function() {
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
    },
    hideText: function() {
      return {
        hidden: !this.isOpen,
        shown: this.isOpen
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
#topbar {
  display: table-row;
  position: relative;
  height: 56px;
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
    transition: all 0.3s;
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
      height: 50px;
      width: 50px;
    }
    .topbar-name {
      color: white;
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
#topbar.closed {
  top: -56px;
}
#topbar.open {
  top: 0px;
}
</style>
