import {LOAD_URL_STATUS} from "../actions";
const initialState = {
    status: null
};
export default function reducer(state = initialState, action) {
console.log(action)
    switch (action.type) {
        case LOAD_URL_STATUS: {
	console.log(state, action)
            return {
                ...state,
                status: action
            }
        }
        default: {
console.log(state)
            return state;
        }
    }
}
