import {GET_POSTS_PENDING, GET_POSTS_RESOLVE, GET_POSTS_ERROR} from "../constants";

const getPostPending = () => ({type: GET_POSTS_PENDING})
const getPostResolve = (data) => ({type: GET_POSTS_RESOLVE, payload: data})
const getPostError = () => ({type: GET_POSTS_ERROR})

export const getPosts = () => {
    return (dispatch) => {
        dispatch(getPostPending())
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((data) => dispatch(getPostResolve(data)))
            .catch(() => dispatch(getPostError()))
    }
}