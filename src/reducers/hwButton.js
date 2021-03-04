import {RED_BG, GREEN_BG, BLUE_BG} from "../constants";

const initialBgColor = {
    background: '#fff'
}

export const buttonReducer = (state= initialBgColor, action) => {
    switch (action.type) {
        case RED_BG: {
            return {
                background: 'red'
            }
        }
        case GREEN_BG: {
            return {
                background: 'green'
            }
        }
        case BLUE_BG: {
            return {
                background: 'blue'
            }
        }
        default: {
            return state
        }
    }
}