import { applyMiddleware, createStore } from 'redux';
import moduls from 'modules';
import { createLogger } from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const store = createStore(
    moduls,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;