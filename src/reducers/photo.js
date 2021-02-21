import {GET_PHOTOS_PENDING, GET_PHOTOS_RESOLVE, GET_PHOTOS_ERROR} from "../constants";

const initialValues = {
    isLoading: false,
    photos: []
}

export const photoReducer = (state = initialValues, action) => {
    switch (action.type) {
        case GET_PHOTOS_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_PHOTOS_RESOLVE: {
            return {
                isLoading: false,
                photos: action.payload
            }
        }
        case GET_PHOTOS_ERROR: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}