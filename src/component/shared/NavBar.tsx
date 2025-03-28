import { Button } from "antd"
import useAuth from "../../utils/hooks/useAuth"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
   const navigate = useNavigate()
    const {authenticate,signOut} = useAuth()
    return(
        <div className="w-full p-2 flex justify-between">
            <div>TODO</div>
            <div className="flex gap-1">
                {authenticate ?
                <Button onClick={()=>signOut()}>Signout</Button>
                :
                <>
                <Button onClick={()=>navigate('/signin')}>SignIn</Button>
                <Button onClick={()=>navigate('/signup')}>SignUp</Button>
                </>
                }
            </div>
        </div>
    )
}

export default NavBar