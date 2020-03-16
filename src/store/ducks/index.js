import { combineReducers } from "redux";

import auth from './auth';
import provas from './provas';
import questoes from './questoes';
import feed from './feed';

const reducers = combineReducers({
  auth,
  provas,
  questoes,
  feed
});

export default reducers;