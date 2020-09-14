import React, {useEffect, useState} from 'react'
import './SidebarChat.css';
import { Avatar, IconButton } from '@material-ui/core'; // importation de du plugin pour l'avatar et le input icon.

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        
    }, []);

    const createChat = () => {
        const roomName = prompt("s'ils vous plait entrez un nom pour la conversation");

        if (roomName) {

        }
    };

       return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            
            <div className="sidebarChat__info">
                <h2>Room chat</h2>
                <p>last message...</p>
            </div>
        </div>
        
        
    ) : (
     <div onClick={createChat} className="sidebarChat">
      <h2>Add a new chat</h2>
     </div>
    )
}

export default SidebarChat

// https://avatars.dicebear.com/ , pour la photo de profil de l'utilisateur. ``
// Utilisation de useState et useEffect pour le bon fonctionnement des photos de profils.
// le const createChat sers à créer un nouveau salon de discution avec un prompt qui nous demande d'entré un nom.