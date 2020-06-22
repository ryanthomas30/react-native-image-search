import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { addOrientationChangeListener, removeOrientationChangeListener, getOrientationAsync, Orientation } from 'expo-screen-orientation'

/**
 * Returns dimensions of the screen that change based on screen orientation.
 */
export const useResponsiveDimensions = () => {
	const [height, setHeight] = useState<number>(Dimensions.get('window').height)
	const [width, setWidth] = useState<number>(Dimensions.get('window').width)
	const [orientation, setOrientation] = useState<Orientation>(Orientation.PORTRAIT_UP)
	useEffect(() => {
		const setInitialOrientation = async () => {
			const initialOrientation = await getOrientationAsync()
			setOrientation(initialOrientation)
		}
		setInitialOrientation()
		const subscription = addOrientationChangeListener((event) => {
			const { height: screenHeight, width: screenWidth } = Dimensions.get('window')
			setHeight(screenHeight)
			setWidth(screenWidth)
			setOrientation(event.orientationInfo.orientation)
		})
		return () => {
			removeOrientationChangeListener(subscription)
		}
	}, [])

	return { height, width, orientation }
}

