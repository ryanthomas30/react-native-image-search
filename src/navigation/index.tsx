import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from '../model'

/* Screens */
import Home from '../screens/Home'
import ImageDetail from '../screens/ImageDetail'

export type RootStackParamList = {
	Home: undefined
	ImageDetail: { image: Image }
}

const Stack = createStackNavigator<RootStackParamList>()

const Navigation = () => (
	<NavigationContainer>
		<SafeAreaView style={styles.container}>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name='Home'
					component={Home}
				/>
				<Stack.Screen
					name='ImageDetail'
					component={ImageDetail}
				/>
			</Stack.Navigator>
		</SafeAreaView>
	</NavigationContainer>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Navigation

