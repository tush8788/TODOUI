import { Navigate, Outlet } from "react-router-dom";

const UnProtectedLayout = () =>{
    const authenticated = false;
    return !authenticated ? <Outlet/> : <Navigate to={'/home'}/>
}
export default UnProtectedLayout