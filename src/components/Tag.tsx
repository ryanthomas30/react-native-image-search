import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
	label: string
}

const Tag = ({ label }: Props) => (
	<View style={styles.tag} >
		<Text style={styles.tagText} >{label}</Text>
	</View>
)

const styles = StyleSheet.create({
	tag: {
		height: 25,
		paddingHorizontal: 12,
		marginLeft: 6,
		borderRadius: 32,
		backgroundColor: '#d9d9d9',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tagText: {
		fontSize: 12,
	},
})

export default Tag
