import React from 'react'
import './Hom.css'
import mail from './images/mail.png'
import login from './images/login.png'
import fb from './images/facebook.png'
import twitter from './images/twitter.png'
import Utube from './images/utube.png'
import insta from './images/instagram.png'
import telegram from './images/telegram.png'
import logo from './images/logo.svg'

function Head(){
    return(
    <div>
        <div className='Header'>
            <div className='Container'>
                <div className='S1'>
                    <div className='S1C1'>
                        <span className='mail_img'><img src={mail} alt={"mail"}></img></span>
                        <span className='mail'>info.psychologs@gmail.com</span>
                    </div>
                    <div className='S1C2'>
                        <button className='Contactus'>Contact Us</button>
                        <span className='Social_Media'><img src={fb} alt={"Facebook"}></img></span>
                        <span className='Social_Media'><img src={twitter} alt={"Twitter"}></img></span>
                        <span className='Social_Media'><img src={Utube} alt={"Youtube"}></img></span>
                        <span className='Social_Media'><img src={insta} alt={"Instagram"}></img></span>
                        <span className='Social_Media'><img src={telegram} alt={"Telegram"}></img></span>
                        <div className='L_R'>
                        <span className='login_img'><img src={login} alt={"login"}></img></span>
                            <span className='login_txt'>Login</span>
                            <span className='Register_img'><img src={login} alt={"Register"}></img></span>
                            <span className='Register_txt'>Register</span>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
        <div className='S2'>
            <div className='Logo'>
            <img src={logo} alt={"Logo"}className="logo_img"></img>  
            </div>
            <div class="loader"></div>
            <div className='ad'>
            <p>CrowdStrike<br/><span className='Peace'>Buy Peace of Mind Today</span></p>
            <button type={"button"} className="LearnMore">LEARN MORE</button>
        </div>
        </div>
    </div>
        
    )
}

export default Head