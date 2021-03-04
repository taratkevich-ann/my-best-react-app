import {combineReducers} from 'redux'
import {photoReducer} from './photo'
import {countReducer} from './count'
import {buttonReducer} from "./hwButton";

export const rootReducer = combineReducers({
    photoState: photoReducer,
    countState: countReducer,
    buttonState: buttonReducer
})