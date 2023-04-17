import './App.css';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'chatgpt',
  initialState: {
    API: "",
    screen: "initial",
    request: "",
    responses: [],
  } as storeState,
  reducers: {
    setAPI: (state, action: PayloadAction<string>) => {
      state.API = action.payload;
    },
    switchScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload;
    },
    setRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
    setResponses: (state, action: PayloadAction<{
      role: string;
      content: string;
    }>) => {
      const temp = state.responses;
      temp.push(action.payload);
      state.responses = temp;
    }
  }
})

export interface storeState {
  API: string;
  screen: string;
  responses: {
    role: string;
    content: string;
  }[];
  request: string;
}

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => { console.log(store.getState()) })