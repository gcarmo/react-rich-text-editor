import React from 'react';
import './Footer.css';
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
        <div className="Footer">
            <AiFillGithub className="icon"/> 
            <a href="https://github.com/gcarmo/react-rich-text-editor">https://github.com/gcarmo/react-rich-text-editor</a>
        </div> 
    );
}
export default Footer;