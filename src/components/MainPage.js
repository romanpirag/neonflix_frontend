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
          <div className="loadingdiv">
            <h1>Loading Heroku Resources...</h1>
            <img src="https://i.imgur.com/GCNyjJY.gif" alt="Loading" />
          </div>
        )}
      </>
    )
  }
}

export default MainPage
