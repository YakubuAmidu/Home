import { useState } from 'react';

import Joke from './Joke';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      searchQuery();
    }
  }

  const updateUserQuery = event => {
    console.log('userQuery', userQuery);

    setUserQuery(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Yakubu</h1>
      <div className="form">
        <input 
        value={userQuery} 
        onChange={updateUserQuery}
        onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
    </div>
  );
}

export default App;
