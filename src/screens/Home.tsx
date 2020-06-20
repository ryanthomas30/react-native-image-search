import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
	const navigation = useNavigation()
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
