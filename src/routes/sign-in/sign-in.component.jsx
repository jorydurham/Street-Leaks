
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utilities/firebase/firebase.utilities";
import './sign-in.component.scss';
import { async } from '@firebase/util';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="sign-in-page">
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    )
}


export default SignIn;