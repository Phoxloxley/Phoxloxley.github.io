<template>
  <div>
    <div id="sidebar" :class="changeSidebarWidth">
      <button
        id="toggle"
        type="button"
        class="btn py-2 px-2"
        :class="changeSidebarButtonPosition"
        @click="toggleSidebar"
      >
        <i class="fa" :class="flipChevron"></i>
      </button>
    </div>

    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
          integrity:
            'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  data() {
    return {
      isOpen: true
    }
  },

  computed: {
    changeSidebarWidth: function() {
      return {
        closed: !this.isOpen,
        open: this.isOpen
      }
    },
    changeSidebarButtonPosition: function() {
      return {
        collapsed: !this.isOpen,
        uncollapsed: this.isOpen
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
        hidden: !this.isOpen,
        shown: this.isOpen
      }
    }
  },

  methods: {
    toggleSidebar: function() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
body {
  background-color: #232645;
}
#__layout {
  > div {
    display: table;
    height: 100%;
  }
}
#sidebar {
  display: table-cell;
  height: 100%;
  background-color: #444;
  transition: all 0.3s;
  box-shadow: 6px 5px 10px -7px #000;
  #toggle {
    position: absolute;
    top: 0;
    height: 89px;
    border-radius: 0 8px 8px 0;
    background-color: #444;
    color: #232645;
    transition: all 0.3s;
    box-shadow: 5px 5px 10px -7px #000;
    z-index: 3;
  }
  #toggle.collapsed {
    left: 0px;
  }
  #toggle.uncollapsed {
    left: 256px;
  }
}
#sidebar.closed {
  width: 0px;
}
#sidebar.open {
  width: 256px;
}
</style>
