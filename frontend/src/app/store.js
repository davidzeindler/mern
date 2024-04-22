import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/app/features/auth/auth-slice'
import tasksReducer from '../../src/app/features/tasks/task-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer
  }
});
