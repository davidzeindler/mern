import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/app/features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
