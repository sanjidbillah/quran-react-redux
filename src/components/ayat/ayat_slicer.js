import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'ayat',
    initialState: {
        ayatList: [],
        surahName: 'AL Fatihah'
    },
    reducers: {
        setName: (state, action) => {
            state.surahName = action.payload;
        },
        fetchAyat: (state, action) => {
            state.ayatList = action.payload;

        },
        remove: state => {
            state.ayatList = [];
        },

    }
})
export const { fetchAyat, remove,setName } = slice.actions;

export const getAyatList = state => state.ayat.ayatList;
export const getName = state => state.ayat.surahName;

export default slice.reducer;