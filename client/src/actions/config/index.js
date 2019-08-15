import axios from "axios";
import configJson from "./config";
import groupsJson from "./groupsJson";

export const LOAD_CONFIG = "LOAD_CONFIG";

export function loadConfig() {
  return async function(dispatch) {
    const request = configJson;
    /*const request = await axios
 *       .get(url)
 *             .then(response => {
 *                     return response.status;
 *                           })
 *                                 .catch(error => {
 *                                         console.log("Looks like there was a problem: \n", error);
 *                                               });
 *                                                   */
    dispatch({
      type: LOAD_CONFIG,
      payload: request
    });
  };
}

export const FETCH_GROUPS = "FETCH_GROUPS";

export function fetchGroups(url) {
  return async function(dispatch) {
    const request = groupsJson;
    /*const request = await axios
 *       .get(url)
 *             .then(response => {
 *                     return response.status;
 *                           })
 *                                 .catch(error => {
 *                                         console.log("Looks like there was a problem: \n", error);
 *                                               });
 *                                                   */
    dispatch({
      type: FETCH_GROUPS,
      payload: request
    });
  };
}

