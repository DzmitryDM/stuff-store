import axios from "axios";
import { refreshToken } from "./config";


const apiAuth = axios.create()

apiAuth.interceptors.request.use(config=>{
  config.headers.Authorization =`Bearer ${localStorage.getItem('token')}`
  return config
})

apiAuth.interceptors.response.use(config=>{
  return config
},
 async (error)=>{
    const original = error.config
    if(error.response.status == 401 && error.config._isRetry ){
original._isRetry = true
try {
  const res = await axios.get(refreshToken)
  localStorage.setItem('token',res.data.access_token)
  return apiAuth.request(original)
} catch (error) {
  console.log('error');
  
}
    }
    throw error
  }
)

export default apiAuth