import axios from "axios";
import { config } from "../config";
import useAuth from "../utils/hooks/useAuth";

const BaseService = axios.create({
    timeout: 30000,
    baseURL: config.ApiUrl
})

BaseService.interceptors.request.use((config) => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q1MTM2NTFjNGRjNDg5ZWY0YjQyZGIiLCJpYXQiOjE3NDIwMjI4NjMsImV4cCI6MTc0MjEwOTI2M30.zWqUZl7bE4BnBFVXVDvlmobXul3buFbH1vAvxfYZFSo';
    if (token) {
        config.headers['todo-token'] = token
    }
    return config
})

BaseService.interceptors.response.use((response: any) => response, (err: any) => {
    const { response } = err
    if (response && response.status == 401) {
        const { signOut } = useAuth();
        signOut()
    }
    return Promise.reject(err);
})

export default BaseService