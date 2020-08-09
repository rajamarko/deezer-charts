import * as actions from './actions';

const initialState = {
  deezerTracks: [],
  dataInitialized: false,
  serverError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DEEZER_RESPONSE:
      return {
        ...state,
        dataInitialized: true,
        deezerTracks: action.payload.tracks.data,
      };

    case actions.SET_DEEZER_ERROR:
      return {
        ...state,
        dataInitialized: true,
        serverError: true,
      };

    default:
      return state;
  }
};

export default reducer;
