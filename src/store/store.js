import { combineReducers } from 'redux';
import surahList from '../reducers/surah/surah_list_reducer'
import selectedIndex from '../reducers/surah/selected_surah_reducer'
import ayat from '../reducers/ayat/ayat_list_reducer'
import secondaryAyat from '../reducers/ayat/secondary_ayat_reducer'
import surahName from '../reducers/surah/surah_name_reducer'

const store = combineReducers({ surahList, selectedIndex, ayat, surahName, secondaryAyat });

export default store;