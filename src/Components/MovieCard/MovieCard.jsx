import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = (props) => {
    const { data } = props;

    return (
        <>
            <Link style={{textDecoration: 'none'}} to={`/movie/${data.imdbID}`}>
                <div className='card-container'>
                    <div className="card m-2" >
                        <img src={data.Poster} className="card-img-top" alt={data.Title} style={{ width: "17.813rem", height: "21.875rem" }} />
                        <div className="card-body">
                            <h5 className="card-title">{data.Title}</h5><br/>
                            <p className="card-text">{data.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MovieCard;