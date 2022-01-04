
// import { useDispatch } from 'react-redux';
import QPath from '../utility/path';
import * as surahEvent from '../actions/surah/surah_actions';
import * as ayatEvent from '../actions/ayat/ayat_actions'
export default class QApi {
    static async getAyat(dispatch, number) {
        const res = await fetch(QPath.ayat(number));
        const data = await res.json();
        dispatch && dispatch(ayatEvent.getAyat(data['data']['ayahs']))
    };
    static async getInitialSurah(dispatch) {
        const res = await fetch(QPath.surahList);
        const data = await res.json();
        dispatch && dispatch(surahEvent.getSurah(data['data']))
        QApi.getAyat(dispatch, 1);
    };


} 