import Signin from "../../../views/Auth/Signin"
import Signup from "../../../views/Auth/Signup"
import Dashboard from "../../../views/Dashboard"


export const ProtectedPaths = [
    {
        path:'/',
        component:Dashboard
    }
] 

export const UnProtectedPaths = [
    {
        path:'signin',
        component:Signin
    },
    {
        path:'signup',
        component:Signup
    }
] 
