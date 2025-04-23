import React , {useState} from 'react'
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import "./App.css"
const HomePage = () => {
    const[favouriteCount,setFavouriteCount]=useState(0);
    const[cardCount,setCardCount]=useState(0);
    return(
        <>
        <Navbar favouriteCount = {favouriteCount} cardCount = {cardCount}/>
        <MovieList  setFavouriteCount={setFavouriteCount} setCardCount ={setCardCount}  favouriteCount =  {favouriteCount} cardCount = {cardCount} />
        </>
    )
} 

export default HomePage     