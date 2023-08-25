import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import moviesReducer from './slices/MoviesSlice'
    
export default configureStore({
    reducer: {
        moviesList: moviesReducer

    }
})