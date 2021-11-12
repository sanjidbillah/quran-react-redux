
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchAyat, getAyatList,setName,getName } from './ayat_slicer';
import classes from './ayat.module.css'
export default function Ayat() {
    const dispatch = useDispatch();
    const getAyat = useSelector(getAyatList)
    const getN = useSelector(getName)

    useEffect(() => {

        fetch('https://api.alquran.cloud/v1/surah/1').then(res => res.json()).then((data) => {
            dispatch(setName(data['data']['englishName']))
            dispatch(fetchAyat(data['data']['ayahs']));
        });
    },
        // eslint-disable-next-line
        []);
    return (
        <div className={classes.main}>
            <div className={classes.title}><p>{getN}</p></div>
            {getAyat.map((e) => <div className={classes.ayatBloc}>
                <p className={classes.number}>{e.numberInSurah}</p>
                <p className={classes.ayat}>{e.text}</p>
            </div>)}
        </div>
    )
}