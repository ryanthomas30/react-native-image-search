import React from 'react'
import { Orientation } from 'expo-screen-orientation'
import { Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Image as ImageType } from '../model'
import { useResponsiveDimensions } from '../hooks'

interface Props {
	/**
	 * Array of images from the Pixabay API.
	 */
	images: ImageType[]
}

const ImageList = ({ images }: Props) => {
	const navigation = useNavigation()
	const { width, height, orientation } = useResponsiveDimensions()

	/* Image Dimensions */
	const portraitWidth = orientation === Orientation.PORTRAIT_UP || orientation === Orientation.PORTRAIT_DOWN ? width - 40 : height - 40
	// Base the imageHeight on width of screen in portrait mode to maintain height across orientations
	const imageHeight = Math.round(portraitWidth * 9 / 16)
	const imageWidth = width - 40

	return (
		<FlatList
			data={images}
			keyExtractor={image => `${image.id}`}
			renderItem={({ item: image }) => (
				<TouchableOpacity onPress={() => navigation.navigate('ImageDetail', { image })} >
					<Image
						source={{ uri: image.imageUrl }}
						resizeMode='cover'
						style={[{ width: imageWidth, height: imageHeight }, styles.image]}
					/>
				</TouchableOpacity>
			)}
			contentContainerStyle={{
				alignItems: 'center',
			}}
			style={{
				alignSelf: 'stretch',
			}}
		/>
	)
}

const styles = StyleSheet.create({
	image: {
		marginVertical: 20,
		borderRadius: 20,
	},
})

export default ImageList
