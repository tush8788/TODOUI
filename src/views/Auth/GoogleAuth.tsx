import { GoogleLogin } from "@react-oauth/google"
import { googleVerify } from "../../services/AuthService";
import useAuth from "../../utils/hooks/useAuth";

const GoogleAuth = () => {
    const {signIn} = useAuth()
    const responseMessage = async(response:any) => {
        try{
            const resp:any = await googleVerify({token:response.credential})
            if (resp.data) {
                signIn(resp.data)
            }
        }
        catch(err){
            console.log(err);
        }        
    };
    const errorMessage = () => {
        console.log("error in google auth");
    };

    return(
        <GoogleLogin onSuccess={responseMessage}  onError={errorMessage} />
    )
}

export default GoogleAuth