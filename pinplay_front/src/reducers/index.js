import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import playlistReducer from './playlistReducer';

export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
  form: formReducer
});