import { configureStore } from '@reduxjs/toolkit';
import surahReducer from '../components/surah_list/surah_list_slicer';

import ayatReducer from '../components/ayat/ayat_slicer';

export default configureStore({
    reducer: {
        surah: surahReducer,
        ayat: ayatReducer
    },
});