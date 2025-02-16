import axios from './axios' // 导入 Axios 实例

export async function doSegment (data) {
  try {
    const response = await axios.post(`/seg/segment/name`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
