import React from "react"
import MoviesContainer from "./MoviesContainer";
import GenresContainer from "./GenresContainer"

class MainPage extends React.Component {
  state = {
  
  }

  render() {
    return (
    <>
    
    <MoviesContainer/>

    <GenresContainer/>

    </>
    )
  }
}

export default MainPage
