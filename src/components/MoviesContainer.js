import React from "react"
import Movie from "./Movie"







const MoviesContainer = (props) => {
    let moviesMapped = props.movies.map(movie => {
        return <Movie movie={movie}/>
    })


    return(
        <>
           {moviesMapped}
        </>
    )
}


export default MoviesContainer 