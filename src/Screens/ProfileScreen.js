import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import Nav from '../Nav'
import { auth } from '../firebase';
import './Profilescreen.css'
import avathar from './avathar.png'

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (

        <div className='profile_name'>


            <Nav />
            <div className="profilescreen_body">
                <h1 className="profilescreen_title">
                    Edit profile
                </h1>
                <div className="profilescreen_info">
                    <img className='nav_ava' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='avathar' />
                    <div className="profilescreen_details">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            
                        </div>
                        <div className="profilescreen_btn">
                            <button onClick={()=>auth.signOut()} className="signout">
                                SignOut
                            </button>
                        </div>
                    </div>
                </div>
               
                <img src={avathar} className='avathar'></img>
                <h1>Shankar</h1>
                <p>Hi 👋, I'm Shankar
                  I'm a Web developer💻,Cyber Security Enthusiast from India 
                </p>
                
                <div class="footer-social-icons">
                  <h4 class="_14">Follow Me on</h4>
                  <ul class="social-icons">
                    <li><a href="https://twitter.com/__Shankar__g__?t=gSm1LnGZndYa4rA0zJorkg&s=09" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
   
                    <li><a href="https://www.instagram.com/_shankar_g_/?utm_medium=copy_link" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/gouthamsankar-v-316538229" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/shankarg1" class="social-icon"> <i class="fa fa-github"></i></a></li>
                  </ul>
                  
                </div>
                <p className='foot'>Website is created with react js & TMDB Api<i class='fab fa-react'></i> </p>
            </div>
            

        </div>
        
    )
}

export default ProfileScreen
