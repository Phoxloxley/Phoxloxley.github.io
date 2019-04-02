<template>
  <div class="container-fluid center-content">
    <h3>Contact Me</h3>
    <form>
      <div class="form-group">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-user"></i></div>
          </div>
          <input
            type="text"
            class="form-control custom-input"
            placeholder="Name"
          />
        </div>

        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-envelope"></i></div>
          </div>
          <input
            type="email"
            class="form-control custom-input"
            placeholder="Email"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="comments">Comments:</label>
        <textarea class="form-control custom-input" rows="4"></textarea>
      </div>

      <button type="submit" class="btn btn-light mb-2">Send</button>
    </form>
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
  padding: 0 25rem;
  h3,
  label {
    color: #fff;
  }
  .custom-input {
    background-color: transparent;
  }
}
</style>
