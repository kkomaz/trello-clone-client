import axios from 'axios';
import { Socket } from 'phoenix';

import {
  LOGIN_SUCCESS,
  CURRENT_USER,
  SOCKET_CONNECTED,
} from 'actions/ActionTypes.js';

function setCurrentUser(dispatch, user) {
  dispatch({
    type: CURRENT_USER,
    currentUser: user,
  });

  const socket = new Socket('ws://localhost:4000/socket', {
    params: { token: sessionStorage.getItem('jwt') },
  });

  socket.connect();

  const channel = socket.channel(`users:${user.id}`);
  channel.join().receive('ok', (message) => {
    dispatch({
      type: SOCKET_CONNECTED,
      socket: socket,
      channel: channel,
    });
  });
}

function onSuccess(response, dispatch) {
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
