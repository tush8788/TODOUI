import { Outlet } from "react-router-dom"
import useAuth from "../../utils/hooks/useAuth"
import NavBar from "../shared/NavBar"

const RootLayout = () => {
    let { checkAuthenticated } = useAuth()
    checkAuthenticated()
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootLayout