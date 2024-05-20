<template>
 <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      msg: 'Demo component',
      visible: false
    }
  }
}
</script>
