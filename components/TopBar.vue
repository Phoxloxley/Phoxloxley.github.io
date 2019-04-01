<template>
  <div>
    <div id="topbar" :class="changeTopbarWidth">
      <button
        id="toggle"
        type="button"
        class="btn py-0 px-4"
        :class="changeTopbarButtonPosition"
        @click="toggleTopbar"
      >
        <i class="fa" :class="flipChevron"></i>
      </button>
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
    changeTopbarWidth: function() {
      return {
        closed: !this.isOpen,
        open: this.isOpen
      }
    },
    changeTopbarButtonPosition: function() {
      return {
        collapsed: !this.isOpen,
        uncollapsed: this.isOpen
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
  width: 100%;
  background-color: #444;
  transition: all 0.3s;
  box-shadow: 6px 5px 10px -7px #000;
  #toggle {
    position: absolute;
    right: 0;
    height: 49px;
    border-radius: 0 0 8px 8px;
    background-color: #444;
    color: #232645;
    transition: all 0.3s;
    box-shadow: 5px 5px 10px -7px #000;
    z-index: 3;
  }
  #toggle.collapsed {
    top: 0px;
  }
  #toggle.uncollapsed {
    top: 56px;
  }
}
#topbar.closed {
  height: 0px;
}
#topbar.open {
  height: 56px;
}
</style>
