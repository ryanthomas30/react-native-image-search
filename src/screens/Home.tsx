import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getImages } from '../store'

const Home = () => {
	const navigation = useNavigation()
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchImages = async() => {
			await dispatch(getImages('dog'))
		}
		fetchImages()
	}, [])

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				onPress={() => navigation.navigate('ImageDetail')}
				title='Go to Image Detail'
			/>
		</View>
	)
}

export default Home
