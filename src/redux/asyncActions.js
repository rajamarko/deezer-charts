import * as actionCreators from './actions';

const apiUrlWithCorsAnywhere =
  'https://cors-anywhere.herokuapp.com/api.deezer.com/chart';

export const getDeezerData = () => {
  let serverStatus = 0;

  return (dispatch) => {
    return fetch(apiUrlWithCorsAnywhere)
      .then((response) => {
        serverStatus = response.status;
        return response.json();
      })
      .then((data) => {
        if (serverStatus === 200) {
          return dispatch(actionCreators.setDeezerResponse(data));
        }
        return dispatch(actionCreators.setDeezerError(data.error));
      })
      .catch((error) => {
        return dispatch(actionCreators.setDeezerError(error));
      });
  };
};
