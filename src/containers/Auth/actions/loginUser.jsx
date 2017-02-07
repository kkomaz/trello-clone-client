import axios from 'axios';
import {
  LOGIN_SUCCESS,
} from 'actions/ActionTypes.js';

function onSuccess(response, dispatch) {
  console.log(response);
  sessionStorage.setItem('jwt', response.data.jwt);
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
