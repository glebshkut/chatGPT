import './App.css';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'chatgpt',
  initialState: {
    value: 0,
    apiProvided: false,
    API: "",
    screen: "initial"
  },
  reducers: {
    setAPI: (state, action: PayloadAction<string>) => {
      state.API = action.payload;
      if (action.payload !== "") {
        state.apiProvided = true;
      }
    }
  }
})

export const { setAPI } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
})
