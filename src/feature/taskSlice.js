import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'

const initialState = [
  {
    id:'1',
    title: 'task one',
    description: 'Task description',
    done: true
  }
]
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
      addTask: (state, {type, payload}) => {
      payload.id = uuid()
      payload.done = false
      state.push(payload)
    }
  }
})

export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer