import React from 'react';
import './App.css';
import MainPage from "./components/MainPage"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <MainPage/>
        <h3 className="colorshift">HELLLLLLLLOOOOO</h3>
      </main>
    </div>
  );
}

export default App;
