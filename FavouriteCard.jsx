import React from 'react';
import {  FaTrashAlt } from "react-icons/fa";
//import { BsCardList } from "react-icons/bs";

import './MovieCard.css';
import { Link } from 'react-router-dom';

const FavouriteCard = ({ name, description, genre, image }) => {


    const removeFromFavourites = (movieName) => {
        console.log("name of the movie",movieName);
        let favourites = JSON.parse(localStorage.getItem("favourites")) || "[]";
        console.log("before removing",favourites);
        favourites = favourites.filter((movie) => movie.name !== movieName);
        console.log("after removing",favourites);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        // update state so UI refreshes
        window.location.reload();
      }
      
  
 
  return (
    <div className='movie-card-container'>
      <Link
        to={`/MoviePageDetail/${encodeURIComponent(name)}/${encodeURIComponent(description)}/${encodeURIComponent(genre)}/${encodeURIComponent(image)}`}
      >
        <img src={image} alt="Movie Poster" className="movie-image" />
        <h3>Name: {name}</h3>
        <p>Description: {description}</p>
        <p><strong>Genre:</strong> {genre}</p>
      </Link>
      
      <div className="movie-actions icon-actions">
       <button className="icon-btn" onClick={() => removeFromFavourites(name)} >
      <FaTrashAlt />
     </button>
     </div>
    </div>
  );
};

export default FavouriteCard;

