import { ThunkResult } from '..'
import { ImageAPI } from '../../api'
import { ImageActionTypes } from './actionTypes'

/**
 * Fetch images from the Pixabay API.
 * @param searchTerm String query to send to the Pixabay API.
 * @param page The page of results to retrieve (default 20 images per page).
 */
export const getImages = (searchTerm: string, page: number): ThunkResult => async dispatch => {
	const imageApi = new ImageAPI()
	try {
		const hits = await imageApi.getImages(searchTerm, page)
		if (page === 1) {
			return dispatch({
				payload: hits,
				type: ImageActionTypes.SET_IMAGES,
			})
		}
		return dispatch({
			payload: hits,
			type: ImageActionTypes.ADD_IMAGES,
		})
	} catch (err) {
		console.error(err)
		return dispatch({
			payload: [],
			type: ImageActionTypes.ADD_IMAGES,
		})
	}

}
