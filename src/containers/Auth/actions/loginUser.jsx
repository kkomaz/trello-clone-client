import axios from 'axios';
import {
  LOGIN_SUCCESS,
  CURRENT_USER,
} from 'actions/ActionTypes.js';

function setCurrentUser(dispatch, user) {
  dispatch({
    type: CURRENT_USER,
    currentUser: user,
  });
}

function onSuccess(response, dispatch) {
  console.log(response);
  sessionStorage.setItem('jwt', response.data.jwt);
  setCurrentUser(dispatch, response.data.user);
  dispatch({ type: LOGIN_SUCCESS });
}

function onError(error, dispatch) {
  console.log('error');
}

export default function loginUser(data) {
  const request = axios.post(`/api/v1/sessions`, {
    session: data,
  });

  return (dispatch) => request
    .then(response => onSuccess(response, dispatch), error => onError(error, dispatch));
}
