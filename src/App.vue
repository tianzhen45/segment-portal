<template>
  <div id="app">
    <!-- <div style="text-align: left;">
      <img src="./assets/segment-logo.png" height="100px">
    </div> -->

    <!-- <el-tabs v-model="defaultMenu" >
      <el-tab-pane label="分词工具" name="SegForm"><SegForm/></el-tab-pane>
      <el-tab-pane label="词根管理" name="WordList"><WordList/></el-tab-pane>
      <el-tab-pane label="DDL生成" name="SqlGen"><SqlGen/></el-tab-pane>
    </el-tabs> -->

    <!-- <el-row>
      <el-col :offset="2"  :span="4"> <router-link to="/SegForm">分词工具</router-link></el-col>
      <el-col :span="4"> <router-link to="/WordList">词根管理</router-link></el-col>
      <el-col :span="4"> <router-link to="/WordImport">词根导入</router-link></el-col>
      <el-col :span="4"> <router-link to="/SqlGen">DDL生成</router-link></el-col>
    </el-row> -->
     <!-- <router-view/> -->
     <router-view />
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
