import {combineReducers} from 'redux'
import {photoReducer} from './photo'
import {countReducer} from './count'
import {buttonReducer} from "./hwButton";
import {postReducer} from "./post";

export const rootReducer = combineReducers({
    photoState: photoReducer,
    countState: countReducer,
    buttonState: buttonReducer,
    postReducer: postReducer
})