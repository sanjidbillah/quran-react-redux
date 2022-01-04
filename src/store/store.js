import { combineReducers } from 'redux';
import surahList from '../reducers/surah/surah_list_reducer'
import selectedIndex from '../reducers/surah/selected_surah_reducer'
import ayat from '../reducers/ayat/ayat_list_reducer'
import surahName from '../reducers/surah/surah_name_reducer'

const store = combineReducers({ surahList, selectedIndex, ayat, surahName });

export default store;