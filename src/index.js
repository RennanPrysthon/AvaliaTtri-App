import React from 'react';

import Routes from './routes/index';
import Reducer from './store/ducks/user';
import store from './store/index';

const Page = Routes(true);

const App = () => <Reducer store={store}><Page /></Reducer>;

export default App;
