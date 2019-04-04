<template>
  <div class="container center-content">
    <h2 class="text-left mb-5">
      Follow Me on <i class="fab fa-twitch mr-2 ml-2"></i>
      <a href="https://twitch.tv/phoxloxley">Twitch.tv!</a>
    </h2>
    <vue-twitch-player
      :channel="channel"
      :width="width"
      :height="height"
      class="twitch-player"
    ></vue-twitch-player>
  </div>
</template>

<script>
import VueTwitchPlayer from 'vue-twitch-player'

export default {
  components: {
    VueTwitchPlayer
  },
  data() {
    return {
      channel: 'phoxloxley',
      width: '800px',
      height: '600px'
    }
  }
}
</script>

<style lang="scss" scoped>
.center-content {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-content: center;
  justify-items: center;
  height: 100%;
  h2 {
    color: #fff;
    a {
      color: #fff;
      &:hover {
        color: #ff5733;
      }
    }
  }
  .twitch-player {
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 8px;
  }
}
</style>
