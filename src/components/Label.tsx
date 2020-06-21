import React, { ReactNode } from 'react'
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native'

interface Props {
	children: ReactNode
	style?: StyleProp<TextStyle>
}

const Label = ({ children, style }: Props) => (
	<Text style={[styles.label, style]} >{children}</Text>
)

const styles = StyleSheet.create({
	label: {
		color: '#9C9C9C',
	},
})

export default Label
