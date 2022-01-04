import * as actions from '../../actions/actionType';


const selectedSurah = (state = 1, action) => {
    if (action.type === actions.setSelectedSurahIndex) {
        return state = action.payload.index;
    }
    return state;
}
export default selectedSurah;
