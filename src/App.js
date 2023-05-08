import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';


// export UserContext context
// export const UserContext = React.createContext();

function App() {
  // STEP 2: Create a `user` object with name and email keys
  // const user = { name: 'Alice', email: 'alice@example.com' };
  
  return (
    <div className="App">
      {/* STEP 3: Create a <UserContext.Provider>  and pass the use object as a value */}
      {/* STEP 4: Create a <Header> and <Main> inside <UserContext.Provider> */}

      {/* <UserContext.Provider value={user}>
        <Header />
        <Main />
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
