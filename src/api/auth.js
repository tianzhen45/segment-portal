import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  methods: {
    async login(username, password) {
      try {
        const response = await axios.post(`/seg/login`, {
          username: username,
          password: password,
        })
        // 假设响应中包含了JWT token
        const token = response.data.token
        // 将token存储在cookie或localStorage中
        Cookies.set('token', token)
        // 跳转到受保护的页面或显示登录成功消息
        this.$router.push('/protected-route')
      } catch (error) {
        // 处理错误，如显示错误消息
        console.error(error)
      }
    },
  },
}
