import React from "react";
import Blogimg from "./Blogimg";

function Blog(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 style={{fontWeight:'bold',fontSize:'30px'}} >Our Blog</h1>
                </div>
            </div>
           <div className="row">
           <Blogimg img="https://lmpixels.com/demo/leven-html-new/dark/img/blog/blog_post_1.jpg" text="04 Dec 2019" head="How to Make a WordPress Plugin Extensible"></Blogimg>
           <Blogimg img="https://lmpixels.com/demo/leven-html-new/dark/img/blog/blog_post_2.jpg" text="04 Dec 2019" head="6 Easy Steps to Better Icon Design"></Blogimg>
            </div> 
        </div>
        </>
        )
        }
export default Blog;