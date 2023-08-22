import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import usersReducer from './slices/usersSlice'

export default configureStore({
    reducer: {
        usersList: usersReducer,
        
    }
})