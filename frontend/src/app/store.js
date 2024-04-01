import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/app/features/auth/authSlice'
import tasksReducer from '../../src/app/features/tasks/taskSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer
  }
});
