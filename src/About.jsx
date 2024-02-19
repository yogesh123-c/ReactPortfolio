import React from "react";
import Whatdo from "./Whatdo.jsx";


function About(){
    return(
        <>
       <body>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
            <header className="perfil">
            <img className="perfil-foto" src="yog1.jpg" />
            
         </header>
            </div>
            <div className="col-md-6">
            <div className="titulo">
                <h4>Web Developer</h4>
                <h1>Yogesh Jathar</h1>
                <p className="mt-3">Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                <button className="btn btn-primary mt-5" style={{marginRight:'20px'}}>Download CV</button>
                <button className="btn btn-warning mt-5">Contact</button>
            </div>
            </div>
         
        </div>

        <div className="row">
            <div className="col-md-12">
                <h3 style={{marginTop:'100px',fontWeight:'bold'}}>What I Do</h3>
            </div>
            <div className="col-md-6 mt-3">
               <Whatdo  title='CopyWrite' para='Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'></Whatdo>
            </div>
            <div className="col-md-6 mt-3">
               <Whatdo title="Ecommerce" para='Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'></Whatdo>
            </div>
            <div className="col-md-6 mt-3">
               <Whatdo title='Web Design' para='Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'></Whatdo>
            </div>
            <div className="col-md-6 mt-3">
               <Whatdo title='Marketing' para='Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'></Whatdo>
            </div>

        </div>
       
    </div>
</body>
        </>
        )
        }
export default About;