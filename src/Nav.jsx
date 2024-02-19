import React from "react";
import {NavLink} from 'react-router-dom';
import About from "./About.jsx";
import style from "./style.css";

function Nav(){
    return(
        <>
         { <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 bg-dark p-4">
                <img src="https://i.pinimg.com/originals/fe/64/24/fe6424cc4393e3261612878412803a44.png" className="ml-5 imagelogo" alt=""></img>
                <h4 className="d-inline ml-5 text-white">Yogesh Jathar</h4>
            </div>
            <div className="col-md-7 bg-dark p-4">
                <ul className="mt-2">
                    <li className="d-inline ml-3  text-white">
                        <NavLink className=" text-white text-decoration-none" to="/" style={{marginLeft:'20px',fontWeight:'bold'}}>About Me</NavLink>
                    </li>
                    <li className="d-inline ml-3  text-white">
                        <NavLink className=" text-white text-decoration-none"to="/Resume" style={{marginLeft:'20px',fontWeight:'bold'}}>Resume</NavLink>
                    </li>
                    <li className="d-inline ml-3  text-white">
                        <NavLink className=" text-white text-decoration-none"to="/Portfolio" style={{marginLeft:'20px',fontWeight:'bold'}}>PortFolio</NavLink>
                    </li>
                    <li className="d-inline ml-3  text-white">
                        <NavLink  className=" text-white text-decoration-none"to="/Blog" style={{marginLeft:'20px',fontWeight:'bold'}}>Blog</NavLink>
                    </li>
                    <li className="d-inline ml-3  text-white">
                        <NavLink className=" text-white text-decoration-none" to="/Contact" style={{marginLeft:'20px',fontWeight:'bold'}}>Contact</NavLink>
                    </li>
                </ul>
            </div> 
        </div>
    </div> }
        </>

    )
}
export default Nav;