import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getImages, useTypedSelector } from '../store'
import { Header, SearchBar } from '../components'

const Home = () => {
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const images = useTypedSelector(state => state.image.images)
	const [loading, setLoading] = useState(false)
	console.log('images:', images)

	const imageWidth = Dimensions.get('window').width - 40
	const imageHeight = Math.round(imageWidth * 9 / 16)

	useEffect(() => {
		const fetchImages = async() => {
			setLoading(true)
			await dispatch(getImages('dog'))
			setLoading(false)
		}
		fetchImages()
	}, [])

	if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Loading</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Header>
				<SearchBar />
			</Header>
			<FlatList
				data={images}
				keyExtractor={image => `${image.id}`}
				renderItem={({ item: image }) => (
					<TouchableOpacity onPress={() => navigation.navigate('ImageDetail')} >
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
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	image: {
		marginVertical: 20,
		borderRadius: 20,
	},
})

export default Home
