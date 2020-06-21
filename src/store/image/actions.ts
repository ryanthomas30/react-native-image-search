import { ThunkResult } from '..'
import { ImageAPI } from '../../api'
import { ImageActionTypes } from './actionTypes'

export const getImages = (searchTerm: string): ThunkResult => async dispatch => {
	const imageApi = new ImageAPI()
	const hits = await imageApi.getImages(searchTerm)
	console.log('hits:', hits)

	return dispatch({
		payload: hits,
		type: ImageActionTypes.SET_IMAGES,
	})
}
