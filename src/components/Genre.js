import React from "react"

const Genre = (props) => {
  return <button className="genre-button">{props.genreName} <span>{props.genreCount}</span></button>
}

export default Genre
