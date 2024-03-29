import React from "react"
import "./App.css"
import MainPage from "./components/MainPage"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MainPage />
    </div>
  )
}

export default App
