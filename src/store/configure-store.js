import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'


const createStoreWithMiddleware = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    promise,
  ),
)

export default createStoreWithMiddleware
