import { combineReducers } from "redux";

import auth from './auth';
import provas from './provas';


const reducers = combineReducers({
  auth,
  provas
});

export default reducers;