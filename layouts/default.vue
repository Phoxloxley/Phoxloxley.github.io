<template>
  <div>
    <top-bar />
    <div id="pageContent">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TopBar from '~/components/TopBar.vue'

export default {
  components: {
    TopBar
  },
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
    width: 100%;
    display: table;
  }
}
#pageContent {
  display: table-row;
  height: 100%;
  width: 100%;
}
</style>
