import React from 'react';
import Button from './Components/Button/Button';

import { BsTypeBold, BsTypeItalic, BsTextLeft, BsTextCenter, BsTextRight, BsListTask, BsListOl} from "react-icons/bs";

function Toolbar(props) {

    const buttons = [
        {"command": "bold", "icon": BsTypeBold},
        {"command": "italic", "icon": BsTypeItalic},
        {"command": "justifyLeft", "icon": BsTextLeft},
        {"command": "justifyCenter", "icon": BsTextCenter},
        {"command": "justifyRight", "icon": BsTextRight},
        {"command": "insertUnorderedList", "icon": BsListTask},
        {"command": "insertOrderedList", "icon": BsListOl},

    ]

    const buttonActionCallback = (command) => {
        props.buttonActionCallback(command);
    }

    return (
      <div className="RichText">
          <div className="toolbar">
            <ul className="tool-list">

                {buttons.map((row, i) =>
                <li className="tool" key={i}>
                    <Button 
                        className="btn"
                        command={row["command"]} 
                        label={row["icon"]} 
                        buttonActionCallback={buttonActionCallback}>
                    </Button>
                </li>
                )}
                
            </ul>
          </div>
      </div>
    );
  }
  
  export default Toolbar;