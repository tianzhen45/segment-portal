<template>
  <div id="WordImport">
    <el-form ref="form" :model="form">
      <el-row>
        <el-col :span="4" :offset="16">
          <el-form-item>
            <el-radio v-model="radio" :label="1">增量导入</el-radio>
            <el-radio v-model="radio" :label="2">清空导入</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">导入</el-button>
            <el-button type="warning" @click="onClear">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="12">
          <el-form-item label="词根导入">
            <el-input type="textarea" @input="onChange" v-model="form.data" rows="24" placeholder="请复制excle词根内容粘贴到此处,按照列1中文,列2英文的顺序"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="导入列表">
            <el-table :data='tableData' border stripe max-height="500">
              <el-table-column prop='cnName' label='中文' align="center">
              </el-table-column>
              <el-table-column prop='enName' label='英文' align="center">
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { doImport } from '@/api/wordService.js'

export default {
  name: 'WordImport',
  data () {
    return {
      form: {
        data: ''
      },
      tableData: [],
      radio: 1
    }
  },
  methods: {
    async onSubmit () {
      try {
        if (this.form.data === '') {
          this.$message('内容为空，无法提交')
          return
        }
        this.onChange(this.form.data)

        let msg = await doImport({'list': this.tableData, 'objectParam': this.radio})
        this.$message(msg)
      } catch (error) {
        console.error('Error fetching seg data:', error)
      }
    },
    onChange (val) {
      this.tableData = []
      let str = val + ''
      let arr = str.split('\n')
      arr.forEach(item => {
        let arr2 = item.split('\t')
        if (arr2[0] !== '') {
          this.tableData.push({cnName: arr2[0], enName: arr2[1]})
        }
      })
    },
    onClear () {
      this.tableData = []
      this.form.data = ''
    }
  }
}
</script>
