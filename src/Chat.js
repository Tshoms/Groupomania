import React, {useEffect, useState} from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, InsertEmoticon} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        
    }, []);



    return <div className="chat">
        <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

         <div className="chat__headerInfo">
             <h3>salon de discussion</h3>
             <p>vu aujourd'hui à ...</p>

         </div>

         <div className="chat__headerRight">
              
              
              <IconButton>
              < AttachFile/>
              </IconButton>
              
              <IconButton>
              <MoreVert />
              </IconButton>
              
            </div>

        </div>

        <div className="chat__body">
         
         <p className="chat__message chat__receive">
             <span className="chat__name"> Keysha Tshoms</span>
             hey Tshoms
             <span className="chat__time">23:30</span>
             </p>
        
        </div>

        <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
            <input type="text"/>
            <button>envoyer un message...</button>
        </form>
        <MicIcon />
        </div>
            
        </div>
    
}

export default Chat
