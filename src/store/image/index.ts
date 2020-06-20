export type ImageState = {
	images: any
}

const initialState: ImageState = {
	images: {},
}

enum ImageActionTypes {
	SET_IMAGES = 'SET_IMAGES'
}

export default (state: ImageState = initialState, action: any): ImageState => {
	switch (action.type) {
		case ImageActionTypes.SET_IMAGES:
			return { ...state, images: action.payload }
		default:
			return state
	}
}
