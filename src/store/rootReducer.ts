import { combineReducers, Reducer } from 'redux'

import image, { ImageState } from './image'

export type RootState = {
	image: ImageState
}

const rootReducer: Reducer<RootState> = combineReducers({
	image,
})

export default rootReducer
