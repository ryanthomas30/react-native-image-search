import React from 'react'
import { Image, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Loader from '../components/Loader'
import { Image as ImageType } from '../model'
import { useResponsiveDimensions } from '../hooks'

interface Props {
	/**
	 * Array of images from the Pixabay API.
	 */
	images: ImageType[]
	loadingMore: boolean
	onEndReached: ((info: { distanceFromEnd: number }) => void)
}

const ImageList = ({ images, loadingMore, onEndReached }: Props) => {
	const navigation = useNavigation()
	const { width, height, isPortrait } = useResponsiveDimensions()

	/* Image Dimensions */
	const portraitWidth = isPortrait ? width - 40 : height - 40
	// Base the imageHeight on width of screen in portrait mode to maintain height across orientations
	const imageHeight = Math.round(portraitWidth * 9 / 16)
	const imageWidth = width - 40

	return (
		<FlatList
			data={images}
			keyExtractor={(image, index) => `${image.id}-${index}`}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.5}
			ListFooterComponent={() => {
				if (!loadingMore) return null
				return (
					<View style={[{ width: imageWidth, height: imageHeight }, styles.loadingMoreContainer]} >
						<Loader />
					</View>
				)
			}}
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
	loadingMoreContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default ImageList
