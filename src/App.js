import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import SidebarChat from './SidebarChat';


function App() {
  return (
    <div className="App">
      
      <div className="app__body">
        <Sidebar/>
        <Chat />
       
      </div>

      
    </div>
  );
}

export default App;
