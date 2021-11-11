import { useSelector, useDispatch } from 'react-redux';
import { getSurahList, fetchSurah, getSeletectedIndex,setSeletedIndex } from './surah_list_slicer'
import React, { useEffect } from 'react';
import classes from './surah_list.module.css'

export function SurahListView() {
    const surahList = useSelector(getSurahList)
    const selectedIndex = useSelector(getSeletectedIndex)
    const dispatch = useDispatch();


    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/surah').then(res => res.json()).then((data) => {
            dispatch(fetchSurah(data['data']));
        });
    },
        // eslint-disable-next-line
        []);

    return (

        <div className={classes.main}>
            {surahList.map((e) => 
            
            e.number===selectedIndex? 
            <div className={[classes.item,classes.active].join(' ')}>
                <p className={classes.number} >{e.number}</p>
                <div className={classes.name} >
                    <p >{e.englishName}</p>
                    <p className={classes.subtitle} >{e.englishNameTranslation}</p>
                </div></div>
            :
            <div onClick={()=>dispatch(setSeletedIndex(e.number))} className={classes.item}>
                <p className={classes.number} >{e.number}</p>
                <div className={classes.name} >
                    <p >{e.englishName}</p>
                    <p className={classes.subtitle} >{e.englishNameTranslation}</p>
                </div></div>)}
        </div>
    )
}