interface ImageBase {
	id: number
	user: string
	imageHeight: number
	imageWidth: number
}

export interface Image extends ImageBase {
	tags: string[]
}

export interface ImageResponse extends ImageBase {
	tags: string
}
