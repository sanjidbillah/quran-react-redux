
import {useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchAyat, getAyatList } from './ayat_slicer';
export default function Ayat(){
    const dispatch = useDispatch();
    const getAyat = useSelector(getAyatList)
    
    useEffect(() => {
        
        fetch('https://api.alquran.cloud/v1/surah/1').then(res => res.json()).then((data) => {
            dispatch(fetchAyat(data['data']['ayahs']));
        });
    },
        // eslint-disable-next-line
        []);
    return(
        <div>
            {getAyat.map((e)=><h1>{e.text}</h1>)} 

            
        </div>
    )
}