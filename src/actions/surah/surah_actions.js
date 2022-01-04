
import * as actions from '../actionType';


export const getSurah = data => {
    return {
        type: actions.getSurah,
        payload: {
            data: data
        }
    }
}

export const setSelectedIndex = index => {
    return {
        type: actions.setSelectedSurahIndex,
        payload: {
            index
        }
    }
}

export const setEmptySurahList = () => {
    return {
        type: actions.setEmptyAyat,
    }
}

export const setSurahName = (name) => {
    return {
        type: actions.setSurahName,
        payload: {
            name
        }
    }
}
