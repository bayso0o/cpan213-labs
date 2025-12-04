import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

if (__DEV__) {
  // @ts-ignore (if TS complains)
  global.reduxStore = store;
}
