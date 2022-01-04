import * as actions from '../../actions/actionType';


export const getAyat = data => {
    return {
        type: actions.getAyat,
        payload: {
            data: data
        }
    }
}



