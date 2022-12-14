import store from "@/store/store"
import { GET_USER_TOKEN_GETTER } from "@/store/storeconstants"
import axios from "axios"


const axiosInstance = axios.create({
    //pass baseURL, Headers in here
})

axiosInstance.interceptors.request.use((config) => {
    let params = new URLSearchParams();
    let token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
    params.append('auth', token)
    config.params = params
    return config 
})

store
export default axiosInstance