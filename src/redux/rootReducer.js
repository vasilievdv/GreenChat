import { combineReducers } from 'redux';
import requestDataReducer from '../components/UserControlPanel/reducers';

const rootReducer = combineReducers({ requestData: requestDataReducer });

export default rootReducer;
