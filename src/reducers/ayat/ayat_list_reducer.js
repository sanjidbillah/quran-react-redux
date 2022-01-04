import * as actions from '../../actions/actionType';


const ayatReducer = (state = [], action) => {
    if (action.type === actions.getAyat) {
        return [...action.payload.data];
    } else if (action.type === actions.setEmptyAyat) {
        return [];
    }
    return state;
}
export default ayatReducer;
