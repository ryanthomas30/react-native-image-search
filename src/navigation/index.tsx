import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* Screens */
import Home from '../screens/Home'
import ImageDetail from '../screens/ImageDetail'

const Stack = createStackNavigator()

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName='Home' >
			<Stack.Screen
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='ImageDetail'
				component={ImageDetail}
			/>
		</Stack.Navigator>
	</NavigationContainer>
)

export default Navigation

