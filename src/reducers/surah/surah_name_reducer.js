import * as actions from '../../actions/actionType';

const surahNameReducer = (state = 'AL Fatihah', action) => {
    if (action.type === actions.setSurahName) {
        return state = action.payload.name;
    }
    return state;
}
export default surahNameReducer;
