import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LangState {
  language: string;
};

const localStorageLang = localStorage.getItem('language');

const initialState: LangState = {
  language: localStorageLang ? localStorageLang : 'EN',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;
