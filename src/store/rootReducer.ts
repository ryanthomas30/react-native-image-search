import { combineReducers, Reducer } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import image, { ImageState } from './image'

export type RootState = {
	image: ImageState
}

const rootReducer: Reducer<RootState> = combineReducers({
	image,
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
