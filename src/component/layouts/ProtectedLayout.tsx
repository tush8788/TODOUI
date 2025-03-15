import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

const ProtectedLayout = () => {
    const {authenticate} = useAuth();
    
    return  authenticate ? <Outlet/> : <Navigate to={'/signin'} />
}

export default ProtectedLayout