import { isEmpty } from "lodash"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { updateUser } from "../../store/slice/userSlice"
import { useEffect } from "react"
import { getUserInfoFromLocalStoreage } from "../commonFunctions/common"

type userInfo = {
    name: string,
    email: string
    token: string
}
const useAuth = () => {
    const { token } = useAppSelector((state) => state.user)

    const dispatch = useAppDispatch();

    useEffect(()=>{
        checkAuthenticated()
    },[])

    const checkAuthenticated = () => {
        if(!isEmpty(token)) return
        let userInfo = getUserInfoFromLocalStoreage()
        if(isEmpty(userInfo)) return
        dispatch(updateUser(userInfo))
    }


    const signIn = (userInfo: userInfo) => {
        dispatch(updateUser(userInfo))
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }

    const signOut = () => {
        localStorage.removeItem('userInfo');
        dispatch(updateUser({ name: '', email: '', token: '' }))
    }

    return {
        authenticate: isEmpty(token) ? false : true,
        signIn,
        signOut
    }
}

export default useAuth