import React from "react"
import MoviesContainer from "./MoviesContainer"
import GenresContainer from "./GenresContainer"

let API = "https://neonflix-api.herokuapp.com/api/v1/movies"

class MainPage extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
  }

  render() {
    return (
     <>
        <GenresContainer movies={this.state.movies} />
        <MoviesContainer movies={this.state.movies} />
     </>
    )
  }
}

export default MainPage
