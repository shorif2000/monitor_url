import axios from "axios";

export const LOAD_URL_STATUS = "LOAD_URL_STATUS";

export function loadUrlStatus(url, interval) {
  
  const checkUrl = `http://www.banglarelief.org:9010/health/${url.replace(/^https?\:\/\//i, "")}`;
  return async function(dispatch) {
    const request = await axios
      .get(checkUrl)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log("Looks like there was a problem: \n", error);
      });
    dispatch({
      type: LOAD_URL_STATUS,
      payload: request
    });
  };
}

