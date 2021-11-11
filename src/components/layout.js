import {SurahListView} from './surah_list/surah_list'
import Ayat from './ayat/ayat'
import styles from './layout.module.css';

export function Layout() {


    return (<div className={styles.main}>
        <SurahListView></SurahListView>
        <Ayat></Ayat>
    </div>);

}
