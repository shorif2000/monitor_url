import axios from "axios";

export const LOAD_URL_STATUS = "LOAD_URL_STATUS";

export function loadUrlStatus(url) {
  
  return async function(dispatch) {
    const request = await axios
      .get(url)
      .then(response => {
        console.log(response.status);
        return response.status;
      })
      .catch(error => {
        console.log("Looks like there was a problem: \n", error);
      });
    console.log(request);
    console.log(LOAD_URL_STATUS);
    dispatch({
      type: LOAD_URL_STATUS,
      payload: request
    });
  };
}

