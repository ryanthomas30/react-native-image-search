import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'

import { getImages, useTypedSelector } from '../store'
import { Header, ImageList, SearchBar, Loader } from '../components'
import { Image } from '../model'

const Home = () => {
	const dispatch = useDispatch()
	const images = useTypedSelector(state => state.image.images)
	const [loading, setLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const fetchImages = async () => {
			setLoading(true)
			await dispatch(getImages(''))
			setLoading(false)
		}
		fetchImages()
	}, [])

	const handleSearch = async (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
		const newSearchTerm = e.nativeEvent.text
		setLoading(true)
		setSearchTerm(newSearchTerm)
		await dispatch(getImages(e.nativeEvent.text))
		setLoading(false)
	}

	interface ImageListWrapperProps {
		images: Image[]
		loading: boolean
		searchTerm: string
	}

	const ImageListWrapper = ({ images, loading, searchTerm }: ImageListWrapperProps) => {
		if (loading) {
			return <Loader />
		}
		if (images.length === 0) {
			if (searchTerm === '') {
				return (
					<Text>Search for an image.</Text>
				)
			}
			return (
				<Text>{`No images for keyword "${searchTerm}"`}</Text>
			)
		}
		return <ImageList images={images} />
	}

	return (
		<View style={styles.container}>
			<Header>
				<SearchBar onSubmitEditing={handleSearch} />
			</Header>
			<View style={styles.listContainer} >
				<ImageListWrapper
					images={images}
					loading={loading}
					searchTerm={searchTerm}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	listContainer: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
})

export default Home
