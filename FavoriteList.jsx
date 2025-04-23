import React from 'react';
import FavouriteCard from './FavouriteCard';
import "./Movielist.css";
import {useState,useEffect} from 'react';




const FavouriteList = () => {

    const[favouriteMovies,setFavouriteMovies]= useState([]);
    useEffect(() => {
        try{ const storedMovies = JSON.parse(localStorage.getItem("favourites"))|| [];
            setFavouriteMovies(storedMovies);
            console.log("Stored movies:",storedMovies);
        }catch(error){
            console.error("errorparsing favorite movies from localstorage",error);
            setFavouriteMovies([]);
        }
       
    },[]);

    return(

        <>
         <div className='movieList-container'>
            {favouriteMovies.length === 0 ?
             (<p id = 'favp'>No movie Added to Favourite</p>

             ) : (
              
             favouriteMovies.map((movie,index) => (
                <FavouriteCard 
                  name={movie.name}
                  description={movie.description}
                  genre={movie.genre}
                  image={movie.image}
                 /> ))
           ) }
             
        
         </div>
        </>
    )
}

export default  FavouriteList;



