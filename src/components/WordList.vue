<template>
  <div id='app'>
    <el-form :inline="true" ref="form" :model="param">
      <el-row>
        <el-col :span="16" :offset="4">
        <el-form-item label="中文">
        <el-input v-model="param.cnName" placeholder="中文"></el-input>
        </el-form-item>
        <el-form-item label="英文">
          <el-input v-model="param.enName" placeholder="英文"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="onClear">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="dialogVisible = true">词根导入</el-button>
            <el-dialog
              title="词根 导入"
              :visible.sync="dialogVisible"
              width="80%">
              <word-import/>
            </el-dialog>
        </el-form-item>
      </el-col>
      <el-col :span="4">
      </el-col>
      </el-row>
    </el-form>

    <el-table :data='tableData' border style='width: 100%' stripe>
      <el-table-column prop='cnName' label='中文' align="center">
      </el-table-column>
      <el-table-column prop='enName' label='英文' align="center">
      </el-table-column>
    </el-table>
    <div class='block'>
      <el-pagination :page-size='size' :page-sizes='[10, 20, 50, 100]' :current-page.sync='page'
        layout='sizes,prev, pager, next,total' @current-change='pageChange' @size-change='handleSizeChange'
        :total='total'>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { listByPage } from '@/api/wordService.js'
import WordImport from './WordImport.vue'

export default {
  components: { WordImport },
  name: 'WordList',
  data () {
    return {
      tableData: [],
      page: 1,
      size: 10,
      total: 0,
      param: { cnName: '', enName: '' },
      dialogVisible: false
    }
  },
  methods: {
    async loadList () {
      let responseData = await listByPage({
        param: this.param,
        page: {page: this.page - 1, size: this.size}
      })
      this.tableData = responseData.content
      this.total = responseData.totalElements
    },
    pageChange (val) {
      this.page = val
      this.loadList()
    },
    handleSizeChange (val) {
      this.size = val
      this.loadList()
    },
    onSubmit () {
      this.page = 1
      this.loadList()
    },
    onClear () {
      this.page = 1
      this.param = { cnName: '', enName: '' }
      this.loadList()
    }
  },
  mounted: function () {
    this.loadList()
  }
}
</script>
