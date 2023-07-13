import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import uiReducer from './features/ui/uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export default rootReducer;
