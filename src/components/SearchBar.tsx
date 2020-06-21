import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchBar = () => (
	<TextInput
		placeholder='Search for an image'
		returnKeyType='search'
		placeholderTextColor='#9C9C9C'
		style={styles.search}
	/>
)

const styles = StyleSheet.create({
	search: {
		paddingHorizontal: 20,
		paddingVertical: 12,
		backgroundColor: '#EFEFEF',
		borderRadius: 50,
		alignSelf: 'stretch',
	},
})

export default SearchBar
