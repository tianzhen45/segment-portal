<template>
  <el-form ref="form" :model="form">
    <el-row>
        <el-col :span="8">
          <el-form-item label="表字段信息">
            <el-input type="textarea" v-model="form.data" rows="24" @input="onChange" placeholder="请复制excel表字段信息后粘贴,列顺序为【表英文名称|表中文名称|字段英文名称|字段中文名称|字段类型|字段长度】"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="格式化结果">
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
      <el-row>
        <el-col :span="4" :offset="8">
        <el-form-item>
          <el-select v-model="value" placeholder="公共字段选项">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">生成 <i class="el-icon-check"></i></el-button>
          <el-button type="warning" @click="onClear">清空 <i class="el-icon-delete"></i></el-button>
        </el-form-item>
      </el-col>
      </el-row>
      <el-dialog
        title="DDL脚本"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <el-input type="textarea" v-model="resultData" rows="24"/>
        <span slot="footer" class="dialog-footer">
          <el-button type="warning" @click="onCopy">复 制</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </el-form>
</template>

<script>
import { fetchDDL } from '@/api/sqlService.js'
export default {
  name: 'SqlGen',
  data () {
    return {
      form: {
        data: ''
      },
      tableData: [],
      options: [{value: 'NO', label: '无公共字段'}, {value: 'ZD', label: '中电'}, {value: 'TY', label: '天阳'}],
      value: 'NO',
      dialogVisible: false,
      resultData: ''
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
        let res = await fetchDDL({list: this.tableData, objectParam: this.value})
        this.resultData = res
        this.dialogVisible = true
      } catch (error) {
        console.error('Error fetching seg data:', error)
      }
    },
    onCopy () {
      this.$copyText(this.resultData)
      this.$message('复制成功,直接粘贴到Excel中自动适应格式')
    },
    onClear () {
      this.form.data = ''
      this.tableData = []
    },
    onChange (val) {
      this.tableData = []
      let str = val + ''
      let arr = str.split('\n')
      arr.forEach(item => {
        let arr2 = item.split('\t')
        if (arr2[0] !== '') {
          this.tableData.push({tbName: arr2[0], tbCnName: arr2[1], colName: arr2[2], colCnName: arr2[3], type: arr2[4], length: arr2[5]})
        }
      })
    }
  }
}
</script>
