import React, {useRef} from 'react'
import {auth} from "../firebase"
import './SignUpScreen.css';

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,

        ).then((authUser)=>{ 
            console.log(authUser);
        })
        .catch(error => {
            alert(error.massage);

        });

    };
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,

        ).then((authUser)=>{ 
            console.log(authUser);
        })
        .catch((error)=> alert(error.message));
    }


    return (
        <div className="signUpscreen">
            <form>
                <h1>SignIn</h1>
                <input  ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>

            </form>
            <h4>
                <span className="signUpscreen__gray">New to Netflix?</span>
                <span className="signUpscreen__link" onClick={register}>SignUp Now</span>  </h4>

            
        </div>
    )
}

export default SignUpScreen
