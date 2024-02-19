import React from "react";

import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import Resume from "./Resume.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function Master(){
    return(
        <>
        <Router>
            <Nav></Nav>
        <Routes>
                <Route path="/" element={<About></About>}></Route>
                <Route path="/resume" element={<Resume></Resume>}></Route>
                <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        </Router>
        </>
    )
}
export default Master;