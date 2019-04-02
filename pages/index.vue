<template>
  <div class="container center-content">
    <h1 class="text-center">Phoxfire Loxley</h1>
    <h3 class="text-center mb-5">Gamer, Programmer, Illustrator</h3>
    <div class="container home-content">
      <div class="info-text">
        <p class="mb-5">
          I am a 38yo husband and father, from Southeastern Virginia. I am been
          drawing since I was in grade school, coding for about 10 years, and
          gaming all my life. I learned how to code websites in the U.S. Army,
          and never looked back.
        </p>
        <p>
          I currently work as an UI Engineer for Trader Interactive. I am
          currently working to expand my knowledge base to leverage frameworks
          such as Vue.js and Nuxt.js. In fact, this site was built using both. I
          enjoy learning and improving my skills.
        </p>
      </div>
      <div class="cover-image">
        <img
          src="../static/cartoon_phox.jpg"
          class="cartoon-phox"
          title="cartoon_phox"
          alt="Cartoon Phox"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.center-content {
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  padding: 0 15rem;
  h1,
  h3,
  .info-text {
    color: #fff;
  }
  .home-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1em;
    .info-text {
      grid-column: 1;
    }
    .cartoon-phox {
      max-width: 300px;
      grid-column: 2;
    }
  }
}
</style>
