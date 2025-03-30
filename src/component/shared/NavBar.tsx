import { Button } from "antd"
import useAuth from "../../utils/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { Header } from "antd/es/layout/layout"

const NavBar = () => {
    const navigate = useNavigate()
    const { authenticate, signOut } = useAuth()

    return (
        <Header className="shadow-sm !bg-white !h-[10vh]">
            <div className="flex items-center h-full justify-between">
                <div>TODO APP</div>
                <div className="flex gap-1">
                    {authenticate ?
                        <Button onClick={() => signOut()}>Signout</Button>
                        :
                        <>
                            <Button onClick={() => navigate('/signin')}>SignIn</Button>
                            <Button onClick={() => navigate('/signup')}>SignUp</Button>
                        </>
                    }
                </div>
            </div>
        </Header>

    )
}

export default NavBar