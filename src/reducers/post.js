import {GET_POSTS_PENDING, GET_POSTS_RESOLVE, GET_POSTS_ERROR} from "../constants";

const initialPostValues = {
    isLoading: false,
    posts: []
}

export const postReducer = (state = initialPostValues, action) => {
    switch (action.type) {
        case GET_POSTS_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_POSTS_RESOLVE: {
            return {
                isLoading: false,
                posts: action.payload
            }
        }
        case GET_POSTS_ERROR: {
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