import axios from './axios' // 导入 Axios 实例
export async function fetchDDL(data) {
  try {
    const response = await axios.post(`/seg/sql/DDL`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function parse(data) {
  try {
    let form = new FormData()
    form.append('sql', data)
    const response = await axios.post(`/seg/sql/parse`, form)
    return response.data
  } catch (error) {
    throw error
  }
}
