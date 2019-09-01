import React from "react"

const Genre = props => {
  return (
    <button className="genre-button">
      {props.genreName} <span className="genreCount">{props.genreCount}</span>
    </button>
  )
}

export default Genre
