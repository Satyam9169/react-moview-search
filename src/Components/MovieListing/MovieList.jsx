import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../Features/Movies/MovieSlice'
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(movies);
  let renderMovies, renderShows = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      return (<MovieCard key={index} data={movie} />)
    })
  ) : (
    <div className='movies-error'>
      <h1>{movies.Error}</h1>
    </div>
  );
  
  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => {
      return (<MovieCard key={index} data={movie} />)
    })
  ) : (
    <div className='movies-error'>
      <h1>{shows.Error}</h1>
    </div>
  );
 

  return (
    <>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2 className='text-white d-flex justify-content-center py-4'>Movie List</h2>
          <div className='movie-container'>{renderMovies}</div>
        </div>
      </div>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2 className='text-white d-flex justify-content-center py-4'>Shows List</h2>
          <div className='movie-container'>{renderShows}</div>
        </div>
      </div>
    </>
  )
}

export default MovieList;