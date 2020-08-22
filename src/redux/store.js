import {configureStore, createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [
      {
        key: '1',
        text: 'Buy coffee',
      },
    ],
    done: [
      {
        key: '2',
        text: 'Pick up the boys!',
      },
    ],
    reducers: {
      add: (state) => {},
      remove: (state) => {},
      toggle: (state) => {},
    },
  },
});

const {actions, reducer} = todoSlice;
const {add, remove, toggle} = actions;
export const store = configureStore({reducer});
