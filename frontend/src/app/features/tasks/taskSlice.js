import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import taskService from './taskService'

const initialState = {
    tasks: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createTask = createAsyncThunk(
  'tasks/create',
  async (taskData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await taskService.createTask(taskData, token)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) 
        || error.message 
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      reset: state => initialState
    }
})

export const { reset } = taskSlice.actions
export default taskSlice.reducer