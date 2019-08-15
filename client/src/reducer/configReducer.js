import _ from "lodash";
import { FETCH_GROUPS, LOAD_CONFIG } from "../actions/config";

export default function reducer(
  state = {
    data: [],
    groups: []
  },
  action
) {
  switch (action.type) {
    case LOAD_CONFIG: {
      const groups = action.payload.reduce(
        (groupsSoFar, { group_id, name, url, interval_check }) => {
          if (!groupsSoFar[name]) groupsSoFar[name] = [];
          const temp = { group_id, name, url, interval_check };
          groupsSoFar[name].push(temp);
          return groupsSoFar;
        },
        {}
      );
      return Object.assign({}, state, {
        data: groups
      });
    }
    case FETCH_GROUPS: {
      return Object.assign({}, state, {
        groups: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

