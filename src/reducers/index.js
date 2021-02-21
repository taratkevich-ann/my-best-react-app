import {combineReducers} from 'redux'
import {photoReducer} from './photo'
import {countReducer} from './count'

export const rootReducer = combineReducers({
    photoState: photoReducer,
    countState: countReducer
})