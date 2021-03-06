import React, { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from '../images/no_image.jpg'
import Grid from "./Grid/grid";
import HeroImage from "./HeroImage/heroImage";
import SearchBar from "./SearchBar/searchBar";
import Spinner from './Spinner/spinner'
import Thumb from "./Thumb/thumb";

const Home = () =>{
 const {state, loading, error, searchTerm, setSearchTerm} = useHomeFetch();

 console.log(state)
    return(
        <>
        {!searchTerm && state.results[0] ?
            <HeroImage
            image={ `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
            title={state.results[0].original_title}
            text={state.results[0].overview} /> : null
        }
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header={ searchTerm? 'Search Results': 'Popular Movies'}>
        {
            state.results.map(movie => (
                <Thumb 
                key={movie.id}
                clickable
                image={
                    movie.poster_path 
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                movieId={movie.id}
                />
            ))
        }
        </Grid>
        <Spinner/>
        </>
    )
}
export default Home