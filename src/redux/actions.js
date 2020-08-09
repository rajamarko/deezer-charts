export const SET_DEEZER_RESPONSE = 'SET_DEEZER_RESPONSE';
export const SET_DEEZER_ERROR = 'SET_DEEZER_ERROR';

export const setDeezerResponse = (apiResponse) => ({
  type: SET_DEEZER_RESPONSE,
  payload: apiResponse,
});

export const setDeezerError = (apiError) => ({
  type: SET_DEEZER_ERROR,
  payload: apiError,
});
