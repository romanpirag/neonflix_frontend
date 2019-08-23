import React from "react"


const Movie = (props) => {
    return (
      <div className="moviecard">
        {/* <h2>{props.movie.title}</h2> */}
        <img alt="" className="image" src={props.movie.image} />
      </div>
    )
}

export default Movie 