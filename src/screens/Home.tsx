import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'

import { getImages, useTypedSelector } from '../store'
import { Header, ImageList, SearchBar, Loader } from '../components'
import { Image } from '../model'

interface ImageListWrapperProps {
	images: Image[]
	loading: boolean
	loadingMore: boolean
	searchTerm: string
	onEndReached: ((info: { distanceFromEnd: number }) => void)
}

const ImageListWrapper = ({ images, loading, loadingMore, searchTerm, onEndReached }: ImageListWrapperProps) => {
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
	return (
		<ImageList
			images={images}
			onEndReached={onEndReached}
			loadingMore={loadingMore}
		/>
	)
}

const Home = () => {
	const dispatch = useDispatch()
	const images = useTypedSelector(state => state.image.images)
	const [loading, setLoading] = useState(false)
	const [loadingMore, setLoadingMore] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [page, setPage] = useState(1)

	useEffect(() => {
		const fetchImages = async () => {
			const onFirstPage = page === 1
			if (onFirstPage) {
				setLoading(true)
			} else {
				setLoadingMore(true)
			}
			await dispatch(getImages(searchTerm, page))
			setLoading(false)
			setLoadingMore(false)
		}
		fetchImages()
	}, [page])

	const handleSearch = async (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
		const newSearchTerm = e.nativeEvent.text
		setLoading(true)
		setSearchTerm(newSearchTerm)
		await dispatch(getImages(e.nativeEvent.text, 1))
		setLoading(false)
	}

	const onEndReached = () => {
		setPage((page) => page + 1)
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
					loadingMore={loadingMore}
					searchTerm={searchTerm}
					onEndReached={onEndReached}
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
