import React from "react"
import Genre from "./Genre"

const makeGenres = movies => {
  const genreCount = {}
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    const genre = movie.genre
    if (genreCount[genre]) {
      genreCount[genre] += 1
    } else {
      genreCount[genre] = 1
    }
  }
  return genreCount
}

const GenresContainer = props => {
  const genresCountObject = makeGenres(props.movies)

  const genresArray = Object.keys(genresCountObject).sort()

  const genresMapped = genresArray.map((genre, index) => {
    const genreCount = genresCountObject[genre]
    return <Genre genreName={genre} genreCount={genreCount} key={index} />
  })

  return <div className="genres-container">{genresMapped}</div>
}

export default GenresContainer
