import React from "react";
import "./Navba.css"
import Search from './images/Search.png'

function Navbar(){
    return(
        <div className="Navbar">
            <div className="items">
             <div className="icons">
                <button type={"button"} onClick={window} className={"Home"}>HOME</button>
                <div className="Dropdown">
                    <a href={"Link"} class={"Dropdown_button"}>CATEGORY</a>
                    <div className="Dropdown_content">
                        <div className="C1">
                            <a href={"Link"}>INTERVIEWS</a>
                            <a href={"Link"}>ORGANIZATIONAL</a>
                            <a href={"Link"}>AWARENESS</a>
                            <a href={"Link"}>ENTERTAINMENT</a>
                        </div>
                        <div className="C2">
                            <a href={"Link"}>PSYCHOTHERAPY</a>
                            <a href={"Link"}>RESEARCH</a>
                            <a href={"Link"}>ANIMAL BEHAVIOUR</a>
                            <a href={"Link"}>TAMIL</a>
                        </div>
                        <div className="C3">
                            <a href={"Link"}>PARENTING</a>
                            <a href={"Link"}>ADVERTISEMENT</a>
                            <a href={"Link"}>NEWS</a>
                            <a href={"Link"}>SELF HELP</a>
                        </div>
                        <div className="C4">
                            <a href={"Link"}>MOTIVATION</a>
                            <a href={"Link"}>HEALTH</a>
                            <a href={"Link"}>EDUCATION</a>
                            <a href={"Link"}>RELATIONSHIP</a>
                        </div>
                        <div className="C5">
                            <a href={"Link"}>SOCIAL</a>
                            <a href={"Link"}>TECHNOLOGY</a>
                            <a href={"Link"}>POEM</a>
                        </div>
                        <div className="C6">
                            <a href={"Link"}>TRAVEL</a>
                            <a href={"Link"}>CRIME</a>
                            <a href={"Link"}>PSEDO PSYCHOLOGY</a>
                        </div>
                    </div>
                </div>
                <button type={"button"} onClick={window} className={"Subscribe"}>SUBSCRIBE MAGAZINE</button>
                <button type={"button"} onClick={window} className={"Edit"}>EDITORIAL BOARD</button>
             </div>
             <div className="Search_bar">
             <button type={"submit"} class={"Search_button"}><img src={Search} alt={"Search"} className={"Search_img"}></img></button>
             <input type={"text"} className={"Search_term"} placeholder={"Search"}></input>
             </div>
            </div>
        </div>
    )
}
export default Navbar