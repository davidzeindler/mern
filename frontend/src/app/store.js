import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/app/features/auth/auth-slice'
import tasksReducer from '../../src/app/features/tasks/task-slice'
import booksReducer from '../../src/app/features/books/book-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    books: booksReducer
  }
});
