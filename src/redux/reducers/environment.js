import * as types from '../constants/ActionTypes';


const initialState = {
    value:'1',
    data:{
    	username:'123'
    }
};

export default function environment(state = initialState, action) {
    switch(action.type) {
    case types.CHANGE_INIT_VALUE:
        return Object.assign({}, state, {
            value:action.value
        });
    case types.LOAD:
        return Object.assign({}, state, {
            data:action.data
        });
    default:
        return state;
    }
}