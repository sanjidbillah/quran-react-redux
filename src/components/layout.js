import { SurahListView } from './surah_list/surah_list'
import Ayat from './ayat/ayat'
import styles from './layout.module.css';
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as event from '../actions/surah/surah_actions'

// import store from '../store/new_store'
export function Layout() {
    return (<div className={styles.main} >
        <SurahListView></SurahListView>
        <Ayat></Ayat>
    </div>);

}
