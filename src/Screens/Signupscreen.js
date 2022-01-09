import React, { useRef } from 'react'
import { auth } from '../firebase';
import './Signupscreen.css'

function Signupscreen() {

    const emailRef = useRef(null);
    const PasswordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            PasswordRef.current.value,
        ).then((authUser) => {
            console.log(authUser)
        })
            .catch((error) => {
                alert(error.message);
            });
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            PasswordRef.current.value,

        ).then((authUser) => {
            console.log(authUser)
        })
            .catch((error) => {
                alert(error.message);
            });
    }




    return (
        <div className='signup__screen'>

            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} className='signup__email' placeholder='Email' type='email'></input>
                <input ref={PasswordRef} className='signup__password' placeholder='Password' type='Password'></input>
                <button className='signup__button' type='submit' onClick={signIn}>SignIn</button>
                <h4>
                    <span className='signupscreen_grey'>
                        New to Netflix?</span>
                    <span onClick={register} className='signupscreen_link'>Signup Now</span>

                </h4>
            </form>

        </div>
    )
}

export default Signupscreen
