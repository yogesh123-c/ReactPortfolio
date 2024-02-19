import React from "react";

function Whatdo(props){
    return(
        <>
         <div className="card">
                    <div className="card-body bg-dark border-radius">
                        <h3 style={{fontWeight:'bold',color:'white'}} className="mt-1">{props.title}</h3>
                        <p className="mt-1">{props.para}</p>
                    </div>
                </div>
        </>
    )
}
export default Whatdo;