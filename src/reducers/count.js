import * as constants from "../constants";

const initialState = {
    count: 0
};

export const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.COUNT_INC: {
            return {
                count: state.count + 1
            };
        }
        case constants.COUNT_DEC: {
            return {
                count: state.count - 1
            };
        }
        default: {
            return state;
        }
    }
};