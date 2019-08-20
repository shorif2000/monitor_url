import axios from "axios";

export const LOAD_URL_STATUS = "LOAD_URL_STATUS";
export const ERROR = "ERROR";

export function loadUrlStatus(url, interval) {
  const checkUrl = `http://52.56.180.211:9010/health/${url.replace(
    /^https?:\/\//i,
    ""
  )}`;
  return async function(dispatch) {
    const request = await axios
      .get(checkUrl)
      .then(response => {
        response.data[0].interval = interval + 1;
        response.data[0].url = url.replace(/^https?:\/\//i, "");
        return response.data[0];
      })
      .catch(error => {
        console.log("Looks like there was a problem: \n", error);
	return {
            error: true,
	    statusCode: 500,	
            message: error.message,
            url: url.replace(/^https?:\/\//i, "")
          };
      });
    let type = LOAD_URL_STATUS;
    if(request.error){
      type = ERROR;
    }
    dispatch({
      type: type,
      payload: request
    });
  };
}

