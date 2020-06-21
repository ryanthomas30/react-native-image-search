import React from 'react'
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'

interface Props {
	source: ImageSourcePropType
	label?: string
}

const ImageDetail = ({ source, label }: Props) => (
	<View style={styles.container} >
		<Image
			style={styles.image}
			source={source}
		/>
		{ label && <Text style={styles.label} >{label}</Text>}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		height: 64,
		width: 64,
		borderRadius: 100,
		marginRight: 12,
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default ImageDetail
