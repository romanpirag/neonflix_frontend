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
        {this.state.movies.length > 0 ? (
          <>
            <GenresContainer movies={this.state.movies} />
            <MoviesContainer movies={this.state.movies} />
          </>
        ) : (
          <h1>LOADING...</h1>
        )}
      </>
    )
  }
}

export default MainPage
