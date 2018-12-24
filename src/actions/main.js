import {
    INCREMENT,
    DECREMENT,
    SET_ACTIVE_FIELD,
} from '../constants/main';

export function increment() {
    return {
        type: INCREMENT,
    };
}

export function decrement() {
    return {
        type: DECREMENT,
    };
}

export function setActiveField(activeField) {
    return {
        type: SET_ACTIVE_FIELD,
        activeField,
    }
}
