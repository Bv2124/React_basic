import React from "react";
import './Section1.css'
import Carousel from "react-bootstrap/Carousel";
import Mental_Health_Ad1 from "./images/Mental Health Ad1.jpg"
import Mental_Health_Ad2 from "./images/Mental Health Ad2.jpg"
import Mental_Health_Ad3 from "./images/M.jpg"
import M1 from "./images/M1.jpg"
import M2 from "./images/M2.jpg"
import Dp1 from "./images/dp.jpg"
import Dp2 from "./images/dp.jpg"
import Mental_Health_Ad4 from "./images/Mental Health Ad4.jpg"
import H1_img from "./images/H1.jpg"
import H2_img from "./images/H2.jpg"
import cut_logo from "./images/cut_logo.png"
import Banner1 from "./images/banner.jpg"
import Mz_1 from "./images/Mz_1.jpg"
import Mz_2 from "./images/Mz_2.jpg"
import Mz_3 from "./images/Mz_3.jpg"
import Mz_4 from "./images/Mz_4.jpg"
import Mz_5 from "./images/Mz_5.png"
import Mz_6 from "./images/Mz_6.jpg"
import Mz_7 from "./images/Mz_7.jpg"
import Mz_8 from "./images/Mz_8.jpg"
import Mz_9 from "./images/Mz_9.jpg"
import Mz_10 from "./images/Mz_10.jpg"
import Mz_11 from "./images/Mz_11.jpg"
import Mz_12 from "./images/Mz_12.jpg"

function Section1(){
    return(
      <div>
          <div className="Section1">
          <div className="Ad">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 Ad3_img"src={M1}alt="Third slide"/>
                <Carousel.Caption className="Ad3_txt M1_txt">
                  <h3>"DIABETES IS A CHRONIC CONDITION."</h3>
                  <p>"Type 2 Diabetes Can Elicit Psychological Distress and Diminish Quality of Life."</p>
                  <span><button className="Awareness Button1">MEDICINE</button></span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={cut_logo} className="Ad1_logo" alt="logo"></img>
                <img className="d-block w-100 Ad1_img" src={Mental_Health_Ad1} alt="First slide"/>
                <span><button className="Awareness Ad_B2">AWARENESS</button></span>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 Ad3_img"src={M2}alt="Third slide"/>
                <Carousel.Caption className="Ad3_txt M1_txt Ca_5">
                  <h3>"DUET PG examinations and now CUET exams will be conducted at both UG and PG levels."</h3>
                  <p>"UG and PG admissions for DU on the basis of CUET scores."</p>
                  <span><button className="Awareness Button1">EDUCATION</button></span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={cut_logo} className="Ad1_logo" alt="logo"></img>
                  <img className="d-block w-100 Ad2_img"src={Mental_Health_Ad2}alt="Second slide"/>
                 <Carousel.Caption className="Ad2_txt">
                  <h3>Still people are not ready !</h3><p>"It's brave to ask for help."</p>
                  <span><button className="Awareness Ad_B3">RESEARCH</button></span>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 Ad3_img"src={Mental_Health_Ad3}alt="Third slide"/>
                <Carousel.Caption className="Ad3_txt">
                  <h3>"CHANGE YOUR THOUGHTS, CHANGE YOUR LIFE."</h3>
                  <p>"Government Proposes Self-Regulatory Mechanism for Online Gaming Companies: Rising Concern for Addiction and Financial Loss."</p>
                  <span><button className="Awareness Ad_B4">ADDICTION</button></span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img src={cut_logo} className="Ad1_logo" alt="logo"></img>
                <img className="d-block w-100 Ad4_img"src={Mental_Health_Ad4}alt="Third slide"/>
                <Carousel.Caption className="Ad4_txt Ca_6">
                  <p>"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."</p>
                  <span><button className="Awareness Ad_B5">HEALTH</button></span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
            <div className="H">
              <div className="H1">
                  <p>"YOU ARE NOT ALONE IN YOUR STRUGGLES."</p>
                  <img src={H1_img} alt={"H1_img"} className="H1_img"></img>
                  <img src={Dp1} alt={"Display_picture"} className="Dp1"></img>
                  <span><button className="Awareness">SUPPORT</button></span>
              </div>
              <div className="H2">
                  <p>"THE BRAIN IS THE COMMAND CENTER FOR THE BODY."</p>
                  <img src={H2_img} alt={"H2_img"} className="H2_img"></img>
                  <img src={Dp2} alt={"Display_picture"} className="Dp2"></img>
                  <span><button className="Awareness">EDUCATION</button></span>
              </div>
            </div>
      </div>
            <div className="Banner B1">
              <img src={Banner1}alt={"Banner"} className="Banner_img"></img>
              <div className = "Heart">
                <div className="heart"></div>
                <div className="heart heart2"></div>
              </div>
            </div>
            <div className="Magazine">
             <div className="slider">
	             <div className="slide-track">
                <div className="slide"><img src={Mz_1} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_2} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_3} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_4} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_5} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_6} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_7} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_8} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_9} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_10} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_11} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_12} height={"100%"} width={"250"} alt={"Mz1"} /></div>
	            </div>
             </div>
            </div>
    </div>
    )
}
export default Section1