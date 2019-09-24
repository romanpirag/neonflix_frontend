import React from "react"
import Genre from "./Genre"

const makeGenres = movies => {
  const genreCount = []
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    const genre = movie.genre
    genreCount.push(genre)
  }
  const uniqueGenre = [...new Set(genreCount)]
  return uniqueGenre.sort()
}

const GenresContainer = props => {
  const genresArray = makeGenres(props.movies)

  const genresMapped = genresArray.map((genre, index) => {
    return <Genre genreName={genre} key={index} />
  })

  return <div className="genres-container">{genresMapped}</div>
}

export default GenresContainer



