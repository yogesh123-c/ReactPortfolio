import React from "react";

function Blogimg(props){
    return(
        <>
         <div className="col-md-6 mt-3">
                <div className="card">
                    <div className="card-header">
                        <img src={props.img} className="w-100" />
                    </div>
                    <div className="card-body">
                        <p>{props.text}</p>
                        <h2>{props.head}</h2>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Blogimg;