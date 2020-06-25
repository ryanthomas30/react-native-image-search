import { ImageActionTypes } from './actionTypes'
import { Image } from '../../model'

export type ImageState = {
	/**
	 * Array of images from the Pixabay API.
	 */
	images: Image[]
}

interface Action {
	type: ImageActionTypes
	payload: Payload
}

type Payload = Image[]

const initialState: ImageState = {
	images: [],
}

/**
 * Reducer for image data from the Pixabay API.
 */
export default (state: ImageState = initialState, action: Action): ImageState => {
	switch (action.type) {
		case ImageActionTypes.SET_IMAGES:
			return { ...state, images: action.payload }
		case ImageActionTypes.ADD_IMAGES:
			return { ...state, images: [...state.images, ...action.payload] }
		default:
			return state
	}
}
