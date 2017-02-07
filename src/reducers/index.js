import { combineReducers } from 'redux-immutable';
import routing from 'reducers/routingReducer.js';
import { reducer as formReducer } from 'redux-form/immutable';
import flashMessages from './flashMessages';
import list from './list';
import authReducer from 'containers/Auth/reducers/authReducer.jsx';

const rootReducer = combineReducers({
  routing,
  flashMessages,
  list,
  form: formReducer,
  authReducer,
});

export default rootReducer;
