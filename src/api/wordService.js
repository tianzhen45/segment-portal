import axios from './axios' // 导入 Axios 实例

export async function listByPage (data) {
  try {
    const response = await axios.post(`/seg/word/listByPage`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
