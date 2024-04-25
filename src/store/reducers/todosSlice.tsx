import { createSlice } from '@reduxjs/toolkit';
import { TTodoItem } from '../../types/app';
import { todoList } from '../../constants/todos';

const initialState: TTodoItem[] = todoList;

const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action) => {
      state.unshift(action.payload);      
    },
    toggle: (state, action) => {
      const todo = state.find((todoItem) => todoItem.id === action.payload);
      todo!.isCompleted = !todo!.isCompleted;
    },
    remove: (state, action) => {
      return state.filter(({id}) => id !== action.payload);
    }
  },
})

export const { add, toggle, remove } = todosSlice.actions

export default todosSlice.reducer