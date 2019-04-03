<template>
  <div class="container center-content">
    <h1 class="mt-5">Code Examples</h1>
    <div class="code-pen-example-01">
      <h3><a href="https://codepen.io/Phoxfire/pen/oVWrKr">Fun With Vue</a></h3>
      <p
        class="codepen"
        data-height="525"
        data-theme-id="dark"
        data-default-tab="result"
        data-user="Phoxfire"
        data-slug-hash="oVWrKr"
        style="height: 525px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;"
        data-pen-title="Fun with Vue"
      >
        <span
          >See the Pen
          <a href="https://codepen.io/Phoxfire/pen/oVWrKr/">Fun with Vue</a> by
          Kenneth Crim (<a href="https://codepen.io/Phoxfire">@Phoxfire</a>) on
          <a href="https://codepen.io">CodePen</a>.</span
        >
      </p>
    </div>
    <div class="code-pen-example-02">
      <h3>
        <a href="https://codepen.io/Phoxfire/pen/ZPBXYK/"
          >Password Validation with Vue, Vee-Validate, and Regex</a
        >
      </h3>
      <p
        class="codepen"
        data-height="525"
        data-theme-id="dark"
        data-default-tab="result"
        data-user="Phoxfire"
        data-slug-hash="ZPBXYK"
        style="height: 525px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;"
        data-pen-title="Password Validation with Vue, Vee-Validate, and Regex"
      >
        <span
          >See the Pen
          <a href="https://codepen.io/Phoxfire/pen/ZPBXYK/">
            Password Validation with Vue, Vee-Validate, and Regex</a
          >
          by Kenneth Crim (<a href="https://codepen.io/Phoxfire">@Phoxfire</a>)
          on <a href="https://codepen.io">CodePen</a>.</span
        >
      </p>
    </div>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.center-content {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 3rem;
  height: 100%;
  h1 {
    grid-column: 1;
    grid-row: 1;
    color: #fff;
  }
  .code-pen-example-01,
  .code-pen-example-02 {
    h3 > a {
      color: #fff;
      &:hover {
        color: #ff5733;
      }
    }
  }
  .code-pen-example-01 {
    grid-column: 1;
    grid-row: 2;
  }
  .code-pen-example-02 {
    grid-column: 1;
    grid-row: 3;
  }
}
</style>
