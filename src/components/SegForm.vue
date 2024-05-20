<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="分词内容">
      <el-input type="textarea" v-model="form.data" autosize placeholder="请输入需要分词的中文内容，多条内容使用换行分隔"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">执行 <i class="el-icon-check"></i></el-button>
      <el-button type="info" @click="onCopy">复制 <i class="el-icon-share"></i></el-button>
      <el-button type="warning" @click="onClear">清空 <i class="el-icon-delete"></i></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {doSegment} from "@/api/segService.js";

export default {
  name: 'SegForm',
  data () {
    return {
      form: {
        data: ''
      },
      resultData: '开户_日期\tDPST_DT\n开户_机构编号\tDPST_INS_NO'
    }
  },
  methods: {
    async onSubmit () {
      try{
        let data = new FormData();
        data.append('names', this.form.data);
        this.form.data = await doSegment(data);
      } catch (error) {  
        console.error('Error fetching seg data:', error);
      }
    },
    onCopy () {
      this.$copyText(this.form.data)
      this.$message('复制成功！直接粘贴到Excel中自动适应格式')
    },
    onClear () {
      this.form.data = ''
    }
  }
}
</script>
