import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './Movies/MovieSlice'

export const store = configureStore ({
    reducer:{
        movies: movieReducer,
    },
})