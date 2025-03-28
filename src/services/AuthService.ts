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

const googleVerify = async (data:any) => {
    return fetchData({
        url:'user/google-verify',
        method:'post',
        data
    })
}

export {
    signInApi,
    signUpApi,
    googleVerify
}