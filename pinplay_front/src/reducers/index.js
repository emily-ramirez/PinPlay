import {combineReducers} from 'redux';
import authReducer from './authReducer';
import playlistReducer from './playlistReducer';

export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer
});