import * as actions from '../../actions/actionType';


const getSurahReducer = (state = [], action) => {
    if (action.type === actions.getSurah) {
        return [...action.payload.data];
    }
    return state;
}
export default getSurahReducer;
