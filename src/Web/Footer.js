import React from "react";
import './Footer.css'
import Footerlogo from './images/Footer_logo.png'
import F1 from './images/F1.jpg'
import F2 from './images/F2.jpg'
import F3 from './images/F3.jpg'
import SM1 from './images/Social Media/Twitter.png'
import SM2 from './images/Social Media/Facebook.png'
import SM3 from './images/Social Media/Linkidin.png'
import SM4 from './images/Social Media/Pintrest.png'
import SM5 from './images/Social Media/Instagram.png'
import SM6 from './images/Social Media/Redit.png'
function Footer(){
    return(
        <div className="Footer">
            <div className="F1">
            <div className="F1C1">
                <img src={Footerlogo} alt ={"Footerlogo"} className="Footer_logo"></img>
                <p>Psychologs is India's First Psychology Magazine. The magazine offers 
                    a wide range of knowledge about diverse topics from the field 
                    of psychology</p>
                <p>However, it does no only limit itself to the field but also helps to
                     connect to psychology in day to day life</p>
            </div>
            <div className="F1C2">
                <h3>POPULAR POSTS</h3>
                <div className="F1C2a">
                    <img src={F1} alt="F1" className="F1_img"></img>
                    <p>First Multicultural Mental facility Inaugurated by Australia <br></br><span className="PD">January 7th 2023</span></p>
                </div>
                <div className="F1C2a">
                    <img src={F2} alt="F2" className="F1_img"></img>
                    <p>Adolescents Brain Development Affected by Habitual Social Media.. <br></br><span className="PD">January 10th 2023</span></p>
                </div>
                <div className="F1C2a">
                    <img src={F3} alt="F3" className="F1_img"></img>
                    <p>The Role of Nurser in Alcohol and Drug Abuse treatment inflicts.. <br></br><span className="PD">January 17th 2023</span></p>
                </div>
            </div>
            <div className="F1C3">
            <h3>CONTACT US</h3>
            <p>Address: 29, Paschim Vihar Extention,<br></br> New Delhi-110063 <br></br>
                Email: info.psychologs@gmail.com <br></br>
                Ph: +91 9990027772
            </p>
            <div className="Social_Media_Footer">
                <a href={"link"}><img src={SM1} alt="F3" className="SM"></img></a>
                <a href={"link"}><img src={SM2} alt="F3" className="SM"></img></a>
                <a href={"link"}><img src={SM3} alt="F3" className="SM"></img></a>
                <a href={"link"}><img src={SM4} alt="F3" className="SM"></img></a>
                <a href={"link"}><img src={SM5} alt="F3" className="SM"></img></a>
                <a href={"link"}><img src={SM6} alt="F3" className="SM"></img></a>
            </div>
            </div>
            </div>
            <div className="F2">
                <div className="F2R1">
                <a href={"link"}>Home</a>    
                <a href={"link"}>Our Author</a>    
                <a href={"link"}>Submit Article</a>    
                <a href={"link"}>Courses</a>    
                <a href={"link"}>Internships</a>    
                <a href={"link"}>Contact</a>    
                <a href={"link"}>Terms & Conditions</a>    
                <a href={"link"}>Privacy Policy</a>    
                <a href={"link"}>Refund Policy</a>    
                <a href={"link"}>Instructions for writing an Article</a>    
                </div>
                <div className="F2R2">
                <p>&#169;2022, Psychologs. All rights reserved</p>   
                </div>
            </div>
        </div>
    )
}
export default Footer