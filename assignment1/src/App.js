import { useState } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

function App() {

  const [username, setUsername] = useState('supermax');

  const handleUserInput = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <UserInput changed={handleUserInput} currentName={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  );
}

export default App;
