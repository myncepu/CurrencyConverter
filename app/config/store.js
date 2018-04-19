import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'recux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

// const store = createStore(reducers, composeWithDevTools(
//   applyMiddleware(...middleware))
// )
const store = createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store
