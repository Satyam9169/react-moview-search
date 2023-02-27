import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../Common/Apis/MovieApi';
import { APIKey } from '../../Common/Apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term)  => {
    // const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`
    ).catch((err) => { console.log('Err : ', err); });
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term)  => {
    // const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`
    ).catch((err) => { console.log('Err : ', err); });
    return response.data;
});

export const fetchAsyncMoviesOrShowDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowDetail', async (id)  => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`
    ).catch((err) => { console.log('Err : ', err); });
    return response.data;
});
                                                                                                    
const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
};

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // addMovies: (state, {payload}) => {
        //     state.movies = payload;
        // },
        removeSelectedMoviesOrShow: (state) => {
            state.selectMovieOrShow = {};   
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, movies: payload};
        },
        [fetchAsyncShows.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, shows: payload};
        },
        [fetchAsyncMoviesOrShowDetail.fulfilled]: (state, {payload}) => { 
            console.log("Fetched Successfully!");
            return {...state, selectMovieOrShow: payload};
        },
    },
});

export const {removeSelectedMoviesOrShow} = movieSlice.actions; 
// for getting the value from store
export const getAllMovies = (state)=> state.movies.movies;  
export const getAllShows = (state)=> state.movies.shows;  
export const getSelectedMovieOrShow = (state)=> state.movies.selectMovieOrShow;  
export default movieSlice.reducer;