import { Outlet } from "react-router-dom"
import useAuth from "../../utils/hooks/useAuth"

const RootLayout =() =>{
    let {checkAuthenticated} =useAuth()
    checkAuthenticated()
    return(
        <Outlet/>
    )
}

export default RootLayout