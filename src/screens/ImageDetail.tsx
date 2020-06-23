import React from 'react'
import { View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'

import { RootStackParamList } from '../navigation'
import { Header, Tag, Row, Label, Avatar } from '../components'
import { useResponsiveDimensions } from '../hooks'

type ImageDetailRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>

const ImageDetail = () => {
	const route = useRoute<ImageDetailRouteProp>()
	const navigation = useNavigation()
	const { image } = route.params
	const { width, height, isPortrait } = useResponsiveDimensions()

	/* Image Dimensions */
	const portraitWidth = isPortrait ? width - 40 : height - 40
	// Base the imageHeight on width of screen in portrait mode to maintain height across orientations
	const imageHeight = Math.round(portraitWidth * 9 / 16)
	const imageWidth = width - 40

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
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollViewContentContainer}
			>
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
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	scrollView: {
		alignSelf: 'stretch',
	},
	scrollViewContentContainer: {
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
