import { LOAD_URL_STATUS, ERROR } from "../actions/status";

export default function reducer(
  state = {
    data: {},
    error: ""
  },
  action
) {
  const { data } = state;
  switch (action.type) {
    case LOAD_URL_STATUS: {
	    console.log("undeifned", action)
      if(action.payload === undefined){
        return Object.assign({}, state, {
          data: {},
          error: {error: true, message: 'Network error'}
        });
      }
      if(!(action.payload.url in data)){
        data[action.payload.url] = {};
      }
      data[action.payload.url] = action.payload;
      return Object.assign({}, state, {
        data,
	error: {}
      });
    }
    case ERROR:
      if(!(action.payload.url in data)){
	data[action.payload.url] = {};
      }
      data[action.payload.url].disable = true;
      return Object.assign({}, state, { error: action.payload, data });
    default: {
      return state;
    }
  }
}

