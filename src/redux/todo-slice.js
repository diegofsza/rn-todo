import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [
      {
        key: '1',
        text: 'Buy coffee',
        completed: false,
      },
      {
        key: '2',
        text: 'Pick up the boys!',
        completed: true,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action) => {
      state.items = state.items.filter((i) => i.key !== action.payload);
    },
    toggle: (state, action) => {
      const item = state.items.find((i) => i.key === action.payload);
      item.completed = !item.completed;
    },
  },
});

export const {add, remove, toggle} = todoSlice.actions;

export default todoSlice.reducer;
