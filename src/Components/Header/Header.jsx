import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import user from '../../Images/user.png';
import logo from '../../Images/logo.png';
import './Header.css'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/Movies/MovieSlice';

const Header = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        console.log(term);
        setTerm("");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'} >
                        <img src={logo} className="circle img-thumbnail" alt="logo_of_movie_app" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex m-auto" role="search" onSubmit={submitHandler}>
                            <input className="form-control me-2" value={term} type="search" placeholder="Search your movie" 
                            onChange={(e)=>setTerm(e.target.value)} aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item ps-5">
                                <Link to={'/'}>
                                    <img src={user} className="circle img-thumbnail" alt="user_profile" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header