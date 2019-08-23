import React from "react"


const Movie = (props) => {
    return(
        <>
        <div>{props.movie.title}</div>
        <img className="poster" alt='' src={props.movie.image}></img>
        </>
    )
}

export default Movie 