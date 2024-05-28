<template>
  <div id="login">
    <el-row>
      <el-col :span="6" :offset="10">
        <el-form v-model="userInfo">
          <el-form-item>
            <img src="../assets/segment-logo.png" height="150px">
          </el-form-item>
          <el-form-item label="用户名">
            <el-input type="text" v-model="username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="text" v-model="password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onsubmit(){

    }
  }
}
</script>
