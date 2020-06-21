import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
	children: ReactNode
}

const Header = ({ children }: Props) => (
	<View style={styles.header} >
		{children}
	</View>
)

const styles = StyleSheet.create({
	header: {
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		paddingTop: 40,
		paddingBottom: 20,
		paddingHorizontal: 20,
		alignSelf: 'stretch',
		alignItems: 'center',
	},
})

export default Header
