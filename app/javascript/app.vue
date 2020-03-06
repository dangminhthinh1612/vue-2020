<template>
  <div id="app">
    <p>{{ message }}</p>
    <button class="btn btn-primary">Đăng ký tại đây</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
