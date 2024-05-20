import axios from './axios'; // 导入 Axios 实例  
  
export async function doSegment(data) {  
  try {  
    const response = await axios.post(`/segment/name`,data);  
    return response.data;
  } catch (error) {  
    throw error;  
  }  
}  
  
// ... 其他用户相关的 API 调用