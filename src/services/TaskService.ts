import fetchData from "./ApiService";

export const createTask = (data:any) => {
    return fetchData({
        url:'task/',
        method:'post',
        data
    })
}

export const getAllTasks = async ()=>{
    return fetchData({
        url:'task/',
        method:'get'
    })
}

export const deleteTask = async (data:any)=>{
    return fetchData({
        url:'task/',
        method:'delete',
        data
    })
}