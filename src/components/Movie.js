import React from "react"


const Movie = (props) => {
    return (
        <img alt="" className="image" src={props.movie.image} />
    )
}

export default Movie 