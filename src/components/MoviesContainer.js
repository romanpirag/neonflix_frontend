import React from "react"
import Movie from "./Movie"







const MoviesContainer = (props) => {
    let moviesMapped = props.movies.map(movie => {
        return <Movie key={movie.id} movie={movie}/>
    })

    return(
        <div className="movie-container">
           {moviesMapped}
        </div>
    )
}


export default MoviesContainer 