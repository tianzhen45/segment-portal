<template>
  <div id="home">
    <!-- <div style="text-align: left;">
      <img src="./assets/segment-logo.png" height="100px">
    </div> -->

    <el-tabs v-model="defaultMenu" >
      <el-tab-pane label="分词工具" name="SegForm"><SegForm/></el-tab-pane>
      <el-tab-pane label="词根管理" name="WordList"><WordList/></el-tab-pane>
      <el-tab-pane label="DDL生成" name="SqlGen"><SqlGen/></el-tab-pane>
      <el-tab-pane label="DDL解析" name="SqlParse"><SqlParse/></el-tab-pane>
    </el-tabs>

    <!-- <el-row>
      <el-col :offset="2"  :span="4"> <router-link to="/SegForm">分词工具</router-link></el-col>
      <el-col :span="4"> <router-link to="/WordList">词根管理</router-link></el-col>
      <el-col :span="4"> <router-link to="/WordImport">词根导入</router-link></el-col>
      <el-col :span="4"> <router-link to="/SqlGen">DDL生成</router-link></el-col>
    </el-row> -->
     <!-- <router-view/> -->
  </div>
</template>

<script>
import SegForm from './SegForm.vue'
import WordList from './WordList.vue'
import WordImport from './WordImport.vue'
import SqlGen from './SqlGen.vue'
import SqlParse from './SqlParse.vue'

export default {
  name: 'Home',
  components: {
    SegForm,
    WordList,
    WordImport,
    SqlGen,
    SqlParse
  },
  data () {
    return {
      defaultMenu: 'SegForm'
    }
  }
}
</script>

<style>
#home {
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
