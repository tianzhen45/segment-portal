<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <SegForm />
    </div>
  </div>
</template>

<script>
import SegForm from './components/SegForm.vue'

export default {
  name: 'app',
  components: {
    SegForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
