import axios from "axios";

export const LOAD_CONFIG = "LOAD_CONFIG";

export function loadConfig() {
  return async function(dispatch) {
    const request = await axios
      .get( `http://52.56.180.211:9010/config`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log("Looks like there was a problem: \n", error);
	if (!error.status) {
          // network error
          return {error: true, message: 'Could not load config data'};
        }
	return {error: true, message: 'Looks like there was a problem'};
      });

    let type = LOAD_CONFIG;
    if(request.error){
      console.log("send diff type");
      type = 'ERROR';
    }
                                                    
    dispatch({
      type,
      payload: request
    });
  };
}

export const FETCH_GROUPS = "FETCH_GROUPS";

export function fetchGroups() {
  return async function(dispatch) {
    const request = await axios
      .get(`http://52.56.180.211:9010/groups`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log("Looks like there was a problem: \n", error);
	if (!error.status) {
          // network error
          return {error: true, message: 'Could not load group data'};
        }          
	return [{error: true, message: 'Looks like there was a problem'}]; 
    });
                                 
    let type = FETCH_GROUPS;
    if(request.error){
      console.log("send diff type");
      type = 'ERROR';
    }
                   
    dispatch({
      type,
      payload: request
    });
  };
}


export const ERROR = "ERROR";
