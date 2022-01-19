
export default class QPath {
    static surahList = "https://api.alquran.cloud/v1/surah";
    static ayat = number => 'https://api.alquran.cloud/v1/surah/' + number + '';
    static secondaryAyat = number => "https://api.alquran.cloud/v1/surah/" + number + "/bn.bengali";
} 