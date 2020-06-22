import { combineReducers, Reducer } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import image, { ImageState } from './image'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = {
	image: ImageState
}

const rootReducer: Reducer<RootState> = combineReducers({
	image,
})

export default rootReducer
