import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = applyMiddleware(reduxThunk)
const store = middleware(createStore)(rootReducer)

export default store
