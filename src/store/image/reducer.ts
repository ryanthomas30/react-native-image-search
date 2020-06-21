import { ImageActionTypes } from './actionTypes'
import { Image } from '../../model'

export type ImageState = {
	images: Image[]
}

const initialState: ImageState = {
	images: [],
}

export default (state: ImageState = initialState, action: any): ImageState => {
	switch (action.type) {
		case ImageActionTypes.SET_IMAGES:
			return { ...state, images: action.payload }
		default:
			return state
	}
}
