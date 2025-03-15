import { isEmpty } from "lodash";

export const getTokenFromLocalStoreage = () => {
    let userInfo:any = localStorage.getItem('userInfo') || '';
    if(!isEmpty(userInfo)){
        userInfo = JSON.parse(userInfo)
        return userInfo?.token || '';
    }
}


export const getUserInfoFromLocalStoreage = () => {
    let userInfo:any = localStorage.getItem('userInfo') || '';
    if(!isEmpty(userInfo)){
        userInfo = JSON.parse(userInfo)
        return userInfo || null;
    }
}