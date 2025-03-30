import axios from "axios";
import { config } from "../config";
import { store } from "../store/store";
import { updateUser } from "../store/slice/userSlice";
import { clearUserInfoFromLocalStroage, getUserInfoFromLocalStoreage } from "../utils/commonFunctions/common";

const BaseService = axios.create({
    timeout: 30000,
    baseURL: config.ApiUrl
})

BaseService.interceptors.request.use((config) => {
    let userInfo = getUserInfoFromLocalStoreage()
    if (userInfo?.token) {
        config.headers['todo-token'] = userInfo?.token
    }
    return config
})

BaseService.interceptors.response.use((response: any) => response, (err: any) => {
    const { response } = err
    if (response && response.status == 401) {
        store.dispatch(updateUser({ email:'', name:'', token:'' }))
        clearUserInfoFromLocalStroage()
    }
    return Promise.reject(err);
})

export default BaseService