import { COUNT_INC, COUNT_DEC } from "../constants";

export const actionInc = () => ({
    type: COUNT_INC
});

export const actionDec = () => ({
    type: COUNT_DEC
});