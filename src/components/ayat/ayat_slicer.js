import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'ayat',
    initialState: {
        ayatList: [],
    },
    reducers: {

        fetchAyat: (state, action) => {
            state.ayatList = action.payload;

        },
        remove: state => {
            state.ayatList = [];
          },

    }
})
export const { fetchAyat,remove } = slice.actions;

export const getAyatList = state => state.ayat.ayatList;

export default slice.reducer;