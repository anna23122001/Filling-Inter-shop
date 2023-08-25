import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../api/cinema-service';
import { setError, setStatus } from '../../model/constants'

const SLICE_NAME = 'movies';
const initialState = {
    movies: [],
    status: null,
    error: null
}

export const getAllMovies = createAsyncThunk(
    `${SLICE_NAME}/getAllMovies`,
    async function (_, { rejectWithValue }) {
        try {
            const { data } = await api.get(`/${SLICE_NAME}`);
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const deleteMovie = createAsyncThunk(
    `${SLICE_NAME}/deleteMovie`,
    async function (id, { rejectWithValue }) {
        try {
            await api.delete(`${SLICE_NAME}/${id}`);
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const createMovie = createAsyncThunk(
    `${SLICE_NAME}/createMovie`,
    async function (newMovie, { rejectWithValue }) {
        try {
            const { data } = await api.post(`/${SLICE_NAME}`, newMovie);
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const updateMovie = createAsyncThunk(
    `${SLICE_NAME}/updateMovie`,
    async function (updatedMovie, { rejectWithValue }) {
        try {
            const { data } = await api.put(`/${SLICE_NAME}/${updatedMovie.id}`, updatedMovie)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

const moviesSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    extraReducers: {
        [getAllMovies.fulfilled]: (state, { payload }) => {
            state.users = payload;
            state.status = 'fulfilled';
            state.error = null
        },
        [deleteMovie.fulfilled]: (state, { payload }) => {
            state.movies = state.movies.filter((movie) => movie.id !== payload);
            state.status = 'fulfilled';
			state.error = null;
        },
        [createMovie.fulfilled]: (state, { payload }) => {
            state.movies.push(payload);
            state.status = 'fulfilled';
			state.error = null;
        },
        [updateMovie.fulfilled]: (state, { payload }) => {
            state.movies = state.movies.map((movie) => movie.id === payload.id ? payload : movie);
            state.status = 'fulfilled';
			state.error = null;
        },

        [getAllMovies.rejected]: setError,
        [deleteMovie.rejected]: setError,
        [createMovie.rejected]: setError,
        [updateMovie.rejected]: setError,

        [getAllMovies.pending]: setStatus,
        [deleteMovie.pending]: setStatus,
        [createMovie.pending]: setStatus,
        [updateMovie.pending]: setStatus,
    }
})

export default moviesSlice.reducer