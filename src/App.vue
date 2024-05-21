<template>
  <div id="app">
    <div style="text-align: left;">
      <img src="./assets/segment-logo.png" height="100px">
    </div>
    <el-row>
      <el-col :offset="2"  :span="4"> <router-link to="/SegForm">分词工具</router-link></el-col>
      <el-col :span="4"> <router-link to="/WordList">词根管理</router-link></el-col>
    </el-row>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>

  </div>
</template>

<script>
import SegForm from './components/SegForm.vue'
import WordList from './components/WordList.vue'

export default {
  name: 'app',
  components: {
    SegForm,
    WordList
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
  margin-top: 0px;
}
.el-row {
    margin-bottom: 20px;
  }
.el-col {
  border-radius: 4px;
}
</style>
