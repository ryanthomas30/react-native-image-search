import axios, { AxiosInstance } from 'axios'
import { ImageResponse, Image } from '../model'

export class ImageAPI {

	private readonly BASE_URL: string
	private readonly API_KEY: string
	private readonly axios: AxiosInstance

	constructor() {
		this.BASE_URL = 'https://pixabay.com/api/'
		this.API_KEY = '17125759-fd5ec2146d30095986331d974'

		this.axios = axios.create({
			baseURL: this.BASE_URL,
		})
	}

	async getImages(searchTerm: string): Promise<Image[]> {
		const response = await this.axios.get('', {
			params: {
				q: searchTerm,
				key: this.API_KEY,
			},
		})

		return (response.data.hits as ImageResponse[]).map(({ id, user, tags, imageHeight, imageWidth, largeImageURL, userImageURL }) => ({
			id,
			user,
			tags: tags.split(', '),
			imageHeight,
			imageWidth,
			imageUrl: largeImageURL,
			userImageUrl: userImageURL || 'https://picsum.photos/200',
		}))
	}
}
