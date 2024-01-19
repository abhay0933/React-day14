import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Form from './Components/Form';
import Username from './context/Username';
import List from './Components/List';


function App() {

  

  return (
    <div className="App">
      <Username>
      <>
      <h1>Github Followers</h1>
      <Form />
      <List />
      </>
      </Username>
      
    </div>
  );
}

export default App;
