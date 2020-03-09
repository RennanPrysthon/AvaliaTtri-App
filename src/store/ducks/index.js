import { combineReducers } from "redux";

import auth from './auth';
import provas from './provas';
import questoes from './questoes';


const reducers = combineReducers({
  auth,
  provas,
  questoes
});

export default reducers;