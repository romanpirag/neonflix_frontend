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
      </main>
    </div>
  );
}

export default App;
