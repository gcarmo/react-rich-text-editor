import React, { useState } from 'react';
import './RichText.css';
import TextBox from './Components/TextBox/TextBox';
import Toolbox from './Components/Toolbar/Toolbar';

function RichText() {

    const [command, setCommand] = useState('');
    const [changes, setChanges] = useState(0);

    const buttonActionCallback = (command) => {
        setCommand(command);
        setChanges(changes+1);
    }

    return (
      <div className="RichText">
        <Toolbox buttonActionCallback={buttonActionCallback}/>
        <TextBox command={command} changes={changes}/>
      </div>
    );
  }
  
  export default RichText;