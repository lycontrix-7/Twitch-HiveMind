import React, { useState, useEffect } from 'react';
import Chat from './components/Chat.js';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <div className="counter">You clicked {count} times</div>
      <div className="twitch-chat">
        
      </div>
    </div>
  );
  
  
}

export default App;
