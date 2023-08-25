export const BASE_URL = 'http://localhost:5000/movies';

// for reducers

export const setError = (state, { payload }) => {
    state.error = payload;
    state.status = 'rejected'
}

export const setStatus = (state) => {
    state.error = null;
    state.status = 'pending'
}