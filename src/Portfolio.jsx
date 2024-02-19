import React from "react";
import Portimg from "./Portimg.jsx";
function Portfolio(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 style={{fontWeight:'bold',fontSize:'30px'}}>PortFolio Page</h2>
                </div>   
            </div>
            <div className="row mt-3">
               <Portimg img="https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/1.jpg"></Portimg>
                <Portimg img="https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/2.jpg"></Portimg>
                <Portimg img="https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/3.jpg"></Portimg>
                 <Portimg img="https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/5.jpg"></Portimg>
                <Portimg img="https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/6.jpg"></Portimg>
                <Portimg img="https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/3.jpg"></Portimg>
            </div>
        </div>
        </>
        )
        }
export default Portfolio;