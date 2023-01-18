import React from "react";
import {Link} from 'gatsby'

const  Layout = ({ children, pageTitle, pageHeading}) =>{
    return(
        <>
        <title>{pageTitle}</title>
        <h1>{pageHeading}</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
        </nav>
        
        {children}
        </>
    )
};

export default Layout;