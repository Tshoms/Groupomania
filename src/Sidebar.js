import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            
            <div className='sidebar__header'>
             <Avatar src="https://avatars0.githubusercontent.com/u/59461576?s=460&u=5073048684085c2328f316793bb0d1a67ee6cc3e&v=4"/>
             <div className='sidebar__headerRight'>
              <IconButton> 
              <DonutLargeIcon />
              </IconButton>
              
              <IconButton>
              <ChatIcon />
              </IconButton>
              
              <IconButton>
              <MoreVertIcon />
              </IconButton>
              
            </div>
            
            </div>
            

            <div className='sidebar__searchContainer'>
             <SearchOutlined />
             <input placeholder="search or start a new chat" type="text" />

            </div>

            <div className='sidebar__chats'>
            <SidebarChat addNewChat/>
            <SidebarChat />
            <SidebarChat />
            </div>


        </div>
    )
}

export default Sidebar

// la comende : rfce ma permis de créer un component sous forme de function.
// la balise <IconButton> permet de pouvoir selectionner les icons sous forme de button.
