import React, { useEffect , useState} from 'react';
import MovieCard from './MovieCard';
import "./Movielist.css";




const MovieList = ({setCardCount,setFavouriteCount,favouriteCount,cardCount}) => {

   const [movies,setMovies] = useState([]);

  
    const fetchMovies = async() => {
      try{
        fetch("http://localhost:5000/movie")
        .then((Response)=>Response.json())
        .then((data) => {
          console.log("data",data);
          setMovies(data);
        })
      } catch(error){
        console.log("error",error);
      }

    }

    useEffect(() => {
      fetchMovies();

   },[]) 


    return(

        <>
         <div className='movieList-container'>

           {movies.map((movie)=>(
             <MovieCard
             key={movie._id}
             id={movie._id}
             name={movie.name}
             description = {movie.description}
             genre={movie.genre}
             image={movie.image}
             setFavouriteCount={setFavouriteCount} 
             setCardCount={setCardCount}           
             favouriteCount={favouriteCount}
             cardCount={cardCount}
             />

           ))}
         </div>
        </>
    )
}

export default  MovieList;