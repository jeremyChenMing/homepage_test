import {combineReducers} from 'redux'; 
import { reducer as formReducer } from 'redux-form';
import environment from './environment'; 

const reducers={
	environment,
    form:formReducer,
}


const rootReducer = combineReducers(reducers);

export default rootReducer;