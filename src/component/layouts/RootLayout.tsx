import { Outlet } from "react-router-dom"
import useAuth from "../../utils/hooks/useAuth"

const RootLayout =() =>{
    let {authenticate} =useAuth()
    return(
        <Outlet/>
    )
}

export default RootLayout