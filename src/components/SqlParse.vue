<template>
  <el-form ref="form" :model="form">
    <el-row>
        <el-col :span="8">
          <el-form-item label="DDL脚本">
            <el-input type="textarea" v-model="form.data" rows="24" placeholder="请粘贴DDL建表语句脚本,仅支持包含CREATE TABLE...格式的脚本" spellcheck="false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="解析结果">
            <el-table :data='tableData' border max-height="500" >
              <el-table-column prop='tbName' label='表英文名' align="center">
              </el-table-column>
              <el-table-column prop='tbCnName' label='表中文名' align="center">
              </el-table-column>
              <el-table-column prop='colName' label='字段英文名' align="center">
              </el-table-column>
              <el-table-column prop='colCnName' label='字段中文名' align="center">
              </el-table-column>
              <el-table-column prop='type' label='字段类型' align="center">
              </el-table-column>
              <el-table-column prop='length' label='长度' align="center">
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>
      </el-row>
   
        <el-form-item>
          <el-button type="primary" @click="onSubmit">生成 <i class="el-icon-check"></i></el-button>
          <el-button type="info" @click="onCopy">复制 <i class="el-icon-share"></i></el-button>
          <el-button type="warning" @click="onClear">清空 <i class="el-icon-delete"></i></el-button>
        </el-form-item>

  </el-form>
</template>

<script>
import { parse } from '@/api/sqlService.js'
import { JsonToCsvText } from '../tools/datatools';
export default {
  name: 'SqlParse',
  data () {
    return {
      form: {
        data: ''
      },
      tableData: [],
    }
  },
  methods: {
    async onSubmit () {
      try {
        if (this.form.data === '') {
          this.$message('内容为空，无法提交')
          return
        }
        let res = await parse(this.form.data.trim())
        if(res.objectParam == 'ERROR'){
          this.$message('SQL解析失败,请检查脚本格式')
        }else{
          this.tableData = res.list
        }
      } catch (error) {
        console.error('Error fetching seg data:', error)
      }
    },
    onCopy () {
      this.$copyText(JsonToCsvText(this.tableData))
      this.$message('复制成功,直接粘贴到Excel中自动适应格式')
    },
    onClear () {
      this.form.data = ''
      this.tableData = []
    }
  }
}
</script>
