import React from 'react'
import { Image, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Image as ImageType } from '../model'

interface Props {
	images: ImageType[]
}

const ImageList = ({ images }: Props) => {
	const navigation = useNavigation()

	const imageWidth = Dimensions.get('window').width - 40
	const imageHeight = Math.round(imageWidth * 9 / 16)

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
