import React from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import "./MoviePageDetail.css";
import { useParams } from "react-router-dom";



const MoviePageDetail = () => {
    const{name,description,genre,image}=useParams();
  return (
    <div className="movie-detail-container">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Genre:</strong> {genre}</p>
     

      <div className="movie-actions">
        <button className="nav-btn">
          <BsCardList className="btn-icon" /> Card
        </button>
        <button className="nav-btn">
          <FaHeart className="btn-icon" /> Favourites
        </button>
         <button className="nav-btn">
         <FaTrashAlt className="btn-icon" /> Delete
           
        </button>
      </div>
    </div>
  );
};

export default MoviePageDetail;
