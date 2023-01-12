import React from "react";
import './Section2.css'
import S2Ad_1 from './images/S2Ad_1.jpg'
import Dp1 from "./images/dp.jpg"
import S2G1a from "./images/S2G1a.jpg"
import S2G1b from "./images/S2G1b.jpg"
import S2G1c from "./images/S2G1c.jpg"
import Side_Banner1 from "./images/Side_Banner1.jpg"
import Side_Banner5 from "./images/Side_Banner5.jpg"


function Section2(){
    return(
        <div className="Section2">
            <div className="S2C">
                <div className="S2C1">
                    <div className="S2CR">
                        <p>RELATIONSHIPS</p>
                        <span className="line"></span>
                        <button type={"button"} className="View_all"> View All</button>
                    </div>
                    <div className="S2C1A1">
                        <div className="S2Ad_1"><img src={S2Ad_1} alt="Ad1" className="S2Ad_img"></img></div>
                        <div className="S2Ad1_txt">
                            <h3>Optimizing Wellness: The Role of Health Psychology in India</h3>
                            <img src={Dp1} alt={"Display_picture"} className="DpS2"></img>
                            <p>Dr.Megha Akash <span className="Author">December 25th 2022</span></p>
                            <h4>Health has traditionally been discussed with reference to the physical body. Moreover,
                                 it is often understood in terms of the absence or of illness...</h4>
                        </div>
                    </div>
                    <div className="S2C1A2">
                        <div className="S2C1A2a">
                        <div className="S2G1"><img src={S2G1a} className="S2G1_img"alt="S2G1"></img></div>
                            <div className="S2G1_txt">
                                <h6>Youths Brain Development Affected by Habitual Social Media Checking</h6>
                                <p>January 7th 2023</p>
                            </div>
                        </div>
                        <div className="S2C1A2a">
                        <div className="S2G1"><img src={S2G1b} className="S2G1_img"alt="S2G1"></img></div>
                            <div className="S2G1_txt">
                                <h6>Is It Important to Take a Break in a Relatiionship ? Experts Advice...</h6>
                                <p>January 10th 2023</p>
                            </div>
                        </div>
                        <div className="S2C1A2a">
                        <div className="S2G1"><img src={S2G1c} className="S2G1_img"alt="S2G1"></img></div>
                            <div className="S2G1_txt">
                                <h6>Why Toxic Relatiionships Becomes a Threat to Mental Health ?</h6>
                                <p>January 14th 2023</p>
                            </div>
                        </div>
                        <div className="S2C1A2a S2C1A2d">
                        <div className="S2G1"><img src={S2G1b} className="S2G1_img"alt="S2G1"></img></div>
                            <div className="S2G1_txt">
                                <h6>Why Toxic Relatiionships Becomes a Threat to Mental Health ?</h6>
                                <p>January 14th 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="S2C2">
                    <div className="S2C2A1">
                    <img src={Side_Banner1}alt={"Banner"} className="Side_Banner" width={100}></img>
                    <img src={Side_Banner5}alt={"Banner"} className="Side_Banner" width={100}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section2