import {SurahListView} from './surah_list/surah_list'
import styles from './layout.module.css';

export function Layout() {


    return (<div className={styles.main}>
        <SurahListView></SurahListView>
    </div>);

}
