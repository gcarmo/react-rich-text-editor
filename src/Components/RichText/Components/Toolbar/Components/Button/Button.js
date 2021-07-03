import React from 'react';
import './Button.css';

function Button(props) {

    const onClick = () => {
        props.buttonActionCallback(props.command);
    }

    return (
        <div>
            <button 
                className="button btn" 
                onClick={() => onClick()}>
                <props.label/>
            </button>
        </div>
    );
}
export default Button;