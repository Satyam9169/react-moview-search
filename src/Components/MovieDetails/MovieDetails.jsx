import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncMoviesOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMoviesOrShow
} from '../../Features/Movies/MovieSlice';
import './MovieDetails.css';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMoviesOrShow());  // cleanup function of useEffect
    }
  }, [dispatch, imdbID]);

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
        ) : (
        <>
          <div className='container'>
            <div className='row py-5'>
              <div className='col-8 section-left'>
                <div className='movie-title text-center py-2 text-warning'><h4>{data.Title}</h4></div>
                <div className='movie-rating py-4 text-info'>
                  <span className='pe-3'>
                    IMDB Rating <i className="bi bi-star-fill"></i> : {data.imdbRating}
                  </span>
                  <span className='pe-3'>
                    IMDB Votes <i className="bi bi-hand-thumbs-up"></i> : {data.imdbVotes}
                  </span>
                  <span className='pe-3'>
                    Runtime <i className="bi bi-camera-reels"></i> : {data.Runtime}
                  </span>
                  <span>
                    Year <i className="bi bi-calendar"></i> : {data.Year}
                  </span>
                </div>
                <div className='movie-plot' >{data.Plot}</div><br />
                <div className='movie-info py-1' style={{ color: "whitesmoke" }}>
                  <div>
                    <span>Director : </span>
                    <span style={{ color: "darkorange" }}>  {data.Director}</span>
                  </div><br />
                  <div>
                    <span>Stars : </span>
                    <span style={{ color: "darkorange" }}>  {data.Actors}</span>
                  </div><br />
                  <div>
                    <span>Generes : </span>
                    <span style={{ color: "darkorange" }}>  {data.Genre}</span>
                  </div><br />
                  <div>
                    <span>Language : </span>
                    <span style={{ color: "darkorange" }}>  {data.Language}</span>
                  </div><br />
                  <div>
                    <span>Awards : </span>
                    <span style={{ color: "darkorange" }}>  {data.Awards}</span>
                  </div>
                </div>
              </div>
              <div className='col-4 section-right ps-5'>
                <img src={data.Poster} alt={data.Title} />
              </div>
            </div>
          </div>
          </>
        )}
    </div>
  )
}

export default MovieDetails;