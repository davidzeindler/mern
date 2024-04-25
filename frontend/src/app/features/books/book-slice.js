import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bookService from './book-service'

const initialState = {
    books: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getBooks = createAsyncThunk(
    '/library/books',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await bookService.getBooks(token)
        } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) 
            || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
      reset: state => initialState
    },
    extraReducers: (builder) => {
      builder
        .addCase(getBooks.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getBooks.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.books = action.payload
        })
        .addCase(getBooks.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    }
  })
  
  export const { reset } = bookSlice.actions
  export default bookSlice.reducer