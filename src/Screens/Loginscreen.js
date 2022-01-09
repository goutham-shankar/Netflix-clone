import React, { useState } from 'react'
import './Loginscreen.css'
import Signupscreen from './Signupscreen'
function Loginscreen() {
    const [signIn, setSignIn] = useState(false);


    return (
        <div className='loginscreen'>
            <div className='loginscreen_background'>
                <img className='loginscreen_logo' src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' alt='/' />
                <button className='login_button' onClick={() => setSignIn(true)}> signin</button>
                <div className='login_gradient'></div>
            </div>
            <div className='loginscreen_body'>
                {signIn ? (
                    <Signupscreen />
                ) : (
                    <>

                        <h1>Unlimited Films , TV programmes & more</h1>
                        <h2>Watch anywere , cancel any time</h2>
                        <div className='loginscreen_input'>
                            <h3>Not original Netflix</h3>
                            &nbsp;
                            <form>
                               

                                <button
                                    onClick={() => setSignIn(true)}
                                    className='login_getstarted'
                                >Get started </button>
                            </form>

                        </div>


                    </>

                )}

            </div>



        </div>
    )
}

export default Loginscreen
