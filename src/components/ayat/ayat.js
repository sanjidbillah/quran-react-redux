
import { useSelector } from 'react-redux';
import classes from './ayat.module.css'
export default function Ayat() {
    const getAyat = useSelector(state => state.ayat)
    const surahName = useSelector(state => state.surahName)
    const getSecondary = useSelector(state => state.secondaryAyat)

    return (

        <div className={classes.main}>
            <div className={classes.title}><p>{surahName}</p></div>
            {getSecondary.map((e, i) => <div key={i} className={classes.ayatBloc}>
                <p className={classes.number}>{e.numberInSurah}</p>
                <div className={classes.ayatGroup}>
                    {<p className={classes.ayat}>{getAyat[i].text}</p>}
                    <p className={classes.secondary}>{e.text}</p>
                </div>


            </div>)}


        </div>
    )
}