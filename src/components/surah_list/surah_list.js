import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import classes from './surah_list.module.css'
import QApi from '../../api/api';
import * as surahEvent from '../../actions/surah/surah_actions'
export function SurahListView() {
    const surahList = useSelector(state => state.surahList)
    const selectedIndex = useSelector(state => state.selectedIndex)
    const dispatch = useDispatch();

    useEffect(() => {
        QApi.getInitialSurah(dispatch)
    },
        // eslint-disable-next-line
        []);

    return (
        <div className={classes.main}>
            {surahList.map((e) =>
                e.number === selectedIndex ?
                    <div key={e.number} className={[classes.item, classes.active].join(' ')}>
                        <p className={classes.number} >{e.number}</p>
                        <div className={classes.name} >
                            <p >{e.englishName}</p>
                            <p className={classes.subtitle} >{e.englishNameTranslation}</p>
                        </div></div>
                    :
                    <div key={e.number} onClick={() => {
                        dispatch(surahEvent.setEmptySurahList())
                        dispatch(surahEvent.setSurahName(e.englishName))
                        dispatch(surahEvent.setSelectedIndex(e.number));
                        QApi.getAyat(dispatch, e.number);

                    }} className={classes.item}>
                        <p className={classes.number} >{e.number}</p>
                        <div className={classes.name} >
                            <p >{e.englishName}</p>
                            <p className={classes.subtitle} >{e.englishNameTranslation}</p>
                        </div></div>)}
        </div>
    )
}