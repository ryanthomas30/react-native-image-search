import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'

import { RootStackParamList } from '../navigation'
import { Header, Tag, Row, Label, Avatar } from '../components'

type ImageDetailRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>

const ImageDetail = () => {
	const route = useRoute<ImageDetailRouteProp>()
	const navigation = useNavigation()
	const { image } = route.params

	const imageWidth = Dimensions.get('window').width - 24
	const imageHeight = Math.round(imageWidth * 9 / 16)

	return (
		<View style={styles.container}>
			<Header>
				<TouchableOpacity onPress={() => navigation.goBack()} >
					<Ionicons
						name='md-arrow-back'
						size={32}
						color='black'
					/>
				</TouchableOpacity>
			</Header>
			<View style={styles.userImageContainer} >
				<Avatar
					source={{ uri: image.userImageUrl }}
					label={image.user}
				/>
			</View>
			<Image
				source={{ uri: image.imageUrl }}
				resizeMode='cover'
				style={[{ width: imageWidth, height: imageHeight }, styles.image]}
			/>
			<Row>
				<Label>Resolution:</Label>
				<Tag label={`${image.imageWidth} x ${image.imageHeight}`} />
			</Row>

			<Row>
				<Label>Tags:</Label>
				<View style={styles.tagContainer} >
					{
						image.tags.map(tag => (
							<Tag
								label={tag}
								key={tag}
							/>
						))
					}
				</View>
			</Row>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	userImageContainer: {
		alignSelf: 'stretch',
		padding: 24,
	},
	image: {
		marginBottom: 24,
		borderRadius: 20,
	},
	tagContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})

export default ImageDetail
