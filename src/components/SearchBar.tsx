import React from 'react'
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ ...other }: TextInputProps) => (
	<View style={styles.container} >
		<TextInput
			placeholder='Search for an image'
			returnKeyType='search'
			placeholderTextColor='#9C9C9C'
			style={styles.search}
			disableFullscreenUI
			{...other}
		/>
		<Ionicons
			name='md-search'
			size={24}
			color='#272727'
			style={styles.icon}
		/>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	search: {
		paddingRight: 24,
		paddingLeft: 48,
		paddingVertical: 12,
		backgroundColor: '#EFEFEF',
		borderRadius: 50,
	},
	icon: {
		position: 'absolute',
		left: 18,
		top: 14,
	},
})

export default SearchBar
