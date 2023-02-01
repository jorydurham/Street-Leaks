import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with popup</button>
        </div>
    )
}


export default SignIn;