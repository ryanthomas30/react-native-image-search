import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native'

interface Props {
	children: ReactNode
	style?: StyleProp<ViewStyle>
}

const Row = ({ children, style }: Props) => (
	<View style={[styles.row, style]} >
		{children}
	</View>

)

const styles = StyleSheet.create({
	row: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9',
	},
})

export default Row
