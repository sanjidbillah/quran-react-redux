import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'surah',
    initialState: {
        surahNameList: [],
        selectedSurah: 1,
    },
    reducers: {

        fetchSurah: (state, action) => {
            state.surahNameList = action.payload;

        },
        SetSeletedIndex: (state, action) => {

          

            state.selectedSurah = action.payload
        }
    }
})


export const { fetchSurah, SetSeletedIndex } = slice.actions;

export const getSurahList = state => state.surah.surahNameList;
export const getSeletectedIndex = state => state.surah.selectedSurah;

export default slice.reducer;