interface ImageBase {
	id: number
	user: string
	imageHeight: number
	imageWidth: number
}

export interface Image extends ImageBase {
	tags: string[]
	imageUrl: string
	userImageUrl: string
}

export interface ImageResponse extends ImageBase {
	tags: string
	largeImageURL: string
	userImageURL: string
}
