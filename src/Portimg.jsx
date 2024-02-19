import React from "react";
function Portimg(props){
    return(

        <>
          <div className="col-md-4 mt-3">
                <img src={props.img} style={{height:'200px'}} class="rounded float-left"/>
                </div>
        </>
    )
}
export default Portimg;