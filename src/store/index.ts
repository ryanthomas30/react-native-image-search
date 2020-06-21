import { createStore, applyMiddleware } from 'redux'
import reduxThunk, { ThunkAction } from 'redux-thunk'
import { RootState } from './rootReducer'
import rootReducer from './rootReducer'

export type ThunkResult = ThunkAction<Promise<any>, RootState, undefined, any>

const w: any = window as any
const devtools: any = w.__REDUX_DEVTOOLS_EXTENSION__ ? w.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f

const middleware = applyMiddleware(reduxThunk)
const store = middleware(devtools(createStore))(rootReducer)

export default store

export * from './rootReducer'
export * from './image'
