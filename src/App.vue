<template>
  <div id="app">

    <div id="sidebar" :class="changeSidebarWidth">

      <button type="button" id="toggle" class="btn" :class="changeSidebarButtonPosition" @click="toggleSidebar">
        <i class="fa" :class="flipChevron"></i>
      </button>

      <div id="sidebarWrapper">

        <div class="sidebar-top">
          <img class="logo" src="./assets/Twitch_Logo.png" />
          <span class="name" :class="hideText">Phoxfire Loxley</span>
        </div>

        <div class="sidebar-nav">
          <ul class="nav-list">

            <router-link tag="li" class="nav-item" to="/">
              <i class="fa fa-home"></i>
              <span :class="hideText"> Home</span>
            </router-link>

            <router-link tag="li" class="nav-item" to="/contact">
              <i class="far fa-envelope"></i>
              <span :class="hideText"> Contact</span>
            </router-link>

          </ul>
        </div><!-- .sidebar-nav -->

      </div><!-- #sidebarWrapper -->

    </div><!-- #sidebar -->

    <div id="pageContent">
      <router-view/>
    </div>

  </div><!-- #app -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div> -->
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      isOpen: true
    }
  },

  methods: {
    toggleSidebar: function() {
      this.isOpen = !this.isOpen
    }
  },

  computed: {
    changeSidebarWidth: function() {
      return {
        'closed': !this.isOpen,
        'open': this.isOpen
      }
    },
    changeSidebarButtonPosition: function() {
      return {
        'collapsed': !this.isOpen,
        'uncollapsed': this.isOpen
      }
    },
    flipChevron: function() {
      return {
        'fa-chevron-right': !this.isOpen,
        'fa-chevron-left': this.isOpen
      }
    },
    hideText: function() {
      return {
        'hidden': !this.isOpen,
        'shown': this.isOpen
      }
    }
  }
}
</script>


<style lang="scss">
  body {
    height: 100%;
    background-color: #232645;
    font-family: 'Montserrat', sans-serif;
  }
  #app {
    position: absolute;
    top: 0;
    left: 0;
    display: table;
    height: inherit;
    width: 100%;
  }
  #sidebar {
    display: table-cell;
    height: inherit;
    background-color: #000;
    transition: ease all .3s;
    #toggle {
      position: absolute;
      top: 0;
      height: 89px;
      border: none;
      border-radius: 0 8px 8px 0;
      background-color: #000;
      color: #fff;
      transition: ease all .3s;
    }
    #toggle.collapsed {
      left: 90px;
    }
    #toggle.uncollapsed {
      left: 256px;
    }
    #sidebarWrapper {
      position: absolute;
      top: 0;
      height: 100%;
      width: inherit;
      .sidebar-top {
        display: table-cell;
        height: 90px;
        width: inherit;
        line-height: 30px;
        vertical-align: middle;
        .logo {
          height: 60px;
          margin: 0 10px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .name {
          font-size: 18px;
          color: #fff;
        }
      }
      .sidebar-nav {
        height: 100%;
        width: inherit;
        background-color: #222;
        .nav-list {
          padding: 0;
          list-style: none;
          .nav-item {
            height: 30px;
            padding: 30px;
            line-height: 30px;
            color: #fff;
            > i {
              margin: 0 10px;
            }
            &:hover {
              background-color: #111;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  #sidebar.closed {
    width: 90px;
  }
  #sidebar.open {
    width: 256px;
  }
  .hidden {
    display: none;
    animation: fade-out .3s;
  }
  .shown {
    animation: fade-in .3s;
  }
  #pageContent {
    display: table-cell;
    height: 100%;
  }

  // Animation
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
