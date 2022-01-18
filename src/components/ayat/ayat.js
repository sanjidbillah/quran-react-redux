
import { useSelector } from 'react-redux';
import classes from './ayat.module.css'
export default function Ayat() {
    const getAyat = useSelector(state => state.ayat)
    const surahName = useSelector(state => state.surahName)
    const getSecondary = useSelector(state => state.secondaryAyat)

    return (

        <div className={classes.main}>
            <div className={classes.title}><p>{surahName}</p></div>
            {getAyat.map((e, i) => <div key={i} className={classes.ayatBloc}>
                <p className={classes.number}>{e.numberInSurah}</p>
                <p className={classes.ayat}>{e.text}</p>
                {getSecondary.length !== 0 ? <p>0</p> : '1'}

            </div>)}


        </div>
    )
}