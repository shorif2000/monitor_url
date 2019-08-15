import { LOAD_URL_STATUS } from "../actions/status";

export default function reducer(
  state = {
    data: []
  },
  action
) {
  switch (action.type) {
    case LOAD_URL_STATUS: {
      return Object.assign({}, state, {
        data: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

