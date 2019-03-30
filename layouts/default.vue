<template>
  <div>
    <div id="sidebar">
      <button
        id="toggle"
        type="button"
        class="btn"
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
body {
  background-color: #232645;
  > div {
    display: table;
  }
}
#sidebar {
  display: table-cell;
}
</style>
