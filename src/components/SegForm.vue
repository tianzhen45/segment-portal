<template>
  <el-form ref="form" :model="form">
    <el-row>
        <el-col :span="8">
          <el-form-item label="分词内容">
            <el-input type="textarea" v-model="form.data" rows="24" placeholder="请输入需要分词的中文内容，多条内容使用换行分隔"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="分词结果">
            <el-table :data='tableData' border max-height="500" :row-class-name="highlight">
              <el-table-column prop='f0' label='中文' align="center">
              </el-table-column>
              <el-table-column prop='f1' label='中文分词' align="center">
              </el-table-column>
              <el-table-column prop='f2' label='英文分词' align="center">
              </el-table-column>
              <el-table-column prop='f3' label='问题' align="center">
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>
      </el-row>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">执行 <i class="el-icon-check"></i></el-button>
      <el-button type="info" @click="onCopy">复制 <i class="el-icon-share"></i></el-button>
      <el-button type="warning" @click="onClear">清空 <i class="el-icon-delete"></i></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {doSegment} from '@/api/segService.js'
import {CsvTextToJson, JsonToCsvText} from '@/tools/datatools.js'

export default {
  name: 'SegForm',
  data () {
    return {
      form: {
        data: ''
      },
      tableData: []
    }
  },
  methods: {
    async onSubmit () {
      try {
        if (this.form.data === '') {
          this.$message('内容为空，无法提交')
          return
        }
        let data = new FormData()
        data.append('names', this.form.data)
        let result = await doSegment(data)
        let jsonData = CsvTextToJson(result)
        this.tableData = jsonData
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
    },
    highlight ({row, rowIndex}) {
      if (row.f3 !== '') {
        return 'warning-row'
      }
    }
  }
}
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}
</style>
