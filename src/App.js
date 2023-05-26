import { useState } from 'react';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const updateUserQuery = event => {
    console.log('userQuery', userQuery);

    setUserQuery(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Yakubu</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery}/>
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
