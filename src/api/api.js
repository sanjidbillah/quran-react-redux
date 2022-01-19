
import QPath from '../utility/path';
import * as surahEvent from '../actions/surah/surah_actions';
import * as ayatEvent from '../actions/ayat/ayat_actions'
export default class QApi {
    static async getSecondaryAayat(dispatch, number) {
        const res = await fetch(QPath.secondaryAyat(number));
        const data = await res.json();
        dispatch && dispatch(ayatEvent.getSecondary(data['data']['ayahs']))
    };
    static async getAyat(dispatch, number) {
        const res = await fetch(QPath.ayat(number));
        const data = await res.json();

        dispatch && dispatch(ayatEvent.getAyat(data['data']['ayahs']))
        QApi.getSecondaryAayat(dispatch, number);
    };
    static async getInitialSurah(dispatch) {
        const res = await fetch(QPath.surahList);
        const data = await res.json();
        dispatch && dispatch(surahEvent.getSurah(data['data']))
        QApi.getAyat(dispatch, 1);
    };


} 