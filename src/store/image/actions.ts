import { ThunkResult } from '..'
import { ImageAPI } from '../../api'
import { ImageActionTypes } from './actionTypes'

/**
 * Fetch images from the Pixabay API.
 * @param searchTerm String query to send to the Pixabay API.
 */
export const getImages = (searchTerm: string): ThunkResult => async dispatch => {
	const imageApi = new ImageAPI()
	const hits = await imageApi.getImages(searchTerm)

	return dispatch({
		payload: hits,
		type: ImageActionTypes.SET_IMAGES,
	})
}
