import React from "react";
import Slider from "./components/slider/slider";
import MovieList from "./components/movieList/movielist";
import './Home.css'
function Home(){
    return(
        <>
        <Slider />
        <h2 class="header">Recommended Movies</h2>
        <MovieList />
        </>
    )
}

export default Home