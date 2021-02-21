import {GET_PHOTOS_PENDING, GET_PHOTOS_RESOLVE, GET_PHOTOS_ERROR} from "../constants";

const getPhotoPending = () => ({type: GET_PHOTOS_PENDING});
const getPhotoResolve = (data) => ({type: GET_PHOTOS_RESOLVE, payload: data})
const getPhotoError = () => ({type: GET_PHOTOS_ERROR})

export const getPhotos = () => {
    return (dispatch) => {
        dispatch(getPhotoPending())
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((data) => data.json())
            .then((data) => dispatch(getPhotoResolve(data)))
            .catch(() => dispatch(getPhotoError()))
    }
}