import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

const UnProtectedLayout = () =>{
    const {authenticate} = useAuth();
    return !authenticate ? <Outlet/> : <Navigate to={'/home'}/>
}
export default UnProtectedLayout