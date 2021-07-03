import React, { useEffect } from 'react'
import './TextBox.css'

function TextBox(props) {

    useEffect(() => {
        document.execCommand(props.command, false, null);
    }, [props.changes]);

    return (
        <div>
            <div id="TextBox" contentEditable="true" className="TextBox"/>
        </div>  
    );
}
export default TextBox;