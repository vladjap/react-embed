import {
    INCREMENT,
    DECREMENT,
    SET_ACTIVE_FIELD,
} from '../constants/main';


const initalState = {
    test: 0,
    activeField: null,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT:
            state.test++;
            return state;
        case DECREMENT:
            state.test--;
            return state;
        case SET_ACTIVE_FIELD:
            console.log(action);
            // state.activeField = action.activeField;

            const newState = { ...state, activeField: action.activeField };


            return newState;
        default:
            return state
    }
};

