import React, { useEffect } from 'react'
import MovieList from '../MovieListing/MovieList'
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from '../../Features/Movies/MovieSlice';

const Home = () => {
  
  const dispatch = useDispatch();
  const movieText = "Space";
  const showtext = "Friends";
  useEffect(() => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showtext));
      // console.log('The response from API', response);    
      //***********Dispatch****************
      // You call store. dispatch to dispatch an action. 
      //This is the only way to trigger a state change
  }, [dispatch]);
  return (
      <>
        <div className='banner-img'></div>
        <MovieList />
      </>
  )
}

export default Home