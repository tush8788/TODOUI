import fetchData from "./ApiService";

const signInApi = async (data:any)=>{
    return fetchData({
        url:'user/signin',
        method:'post',
        data
    })
}

const signUpApi = async (data:any)=>{
    return fetchData({
        url:'user/signup',
        method:'post',
        data
    })
}

export {
    signInApi,
    signUpApi
}