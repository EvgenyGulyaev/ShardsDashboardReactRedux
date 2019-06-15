import { combineReducers } from 'redux';

import loginUser from './logInUser';
import toggleSidebar from './toggleSidebar';

const reducer = combineReducers({
  loginUser,
  toggleSidebar
});

export default reducer;
