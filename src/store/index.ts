import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import rootReducer from './rootReducer'

// Mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
)

export default store
