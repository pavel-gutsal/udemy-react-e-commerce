import './SignIn.scss'
import {sighInWithGooglePopup} from '../../firebase/firebase'

const SignIn =()=>{
    const logGoogleUser = async()=>{
        const response = await sighInWithGooglePopup();
        console.log(response);
    }
    return (
        <div className="SignIn">
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Log In with Google Popup</button>
        </div>
    )
}
export default SignIn;