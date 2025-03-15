import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    const authenticated = false;
    return  authenticated ? <Outlet/> : <Navigate to={'/signin'} />
}

export default ProtectedLayout