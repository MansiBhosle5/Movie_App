import React from 'react';
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { useState } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ name, description, genre, image, setCardCount, setFavouriteCount, favouriteCount, cardCount ,id }) => {
  
  const [isfavourite,setIsFavourite] = useState(false);
  const [iscard,setIsCard] = useState(false);

  function handleFavourite() {
    if(isfavourite === false){
    setFavouriteCount(favouriteCount+ 1);
    setIsFavourite(!isfavourite);
    }
  
    const existingMovies = JSON.parse(localStorage.getItem("favourites") || "[]");
    const newMovie = {name, description, genre, image};
    const updateMovies = [...existingMovies,newMovie].filter(
      (movie,index,self) => {
      return   index === self.findIndex((m) => m.name === movie.name);
      }
    );
    localStorage.setItem("favourites",JSON.stringify(updateMovies));
  }
   
  
  function handleCard() {
    if(iscard === false){
    setCardCount(cardCount + 1);
    setIsCard(!iscard);
    }
    console.log("card",iscard);
  }
  
  const deleteMovie = async() => {
    try{
      const Response = await fetch(`http://localhost:5000/movie/${id}`,{
        method :"DELETE",
        headers:{
          "Content-Type":"application/json",
        },
      });
      const data = await Response.json();
      console.log("deleted ",data);

    }catch(error){
      console.log("error",error);
  } 
  }

  function handleDelete() {
    alert(`Do you want to delete the ${name} ?`);
    deleteMovie();
    window.location.reload(true);
    
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
        <button className="icon-btn" onClick={handleCard}>
          <BsCardList />
        </button>
        <button className="icon-btn" onClick={handleFavourite}>
          <FaHeart />
        </button>
        <button className="icon-btn" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
