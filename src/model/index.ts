interface ImageBase {
	/**
	 * ID of the image.
	 */
	id: number
	/**
	 * Name of the user that uploaded the image.
	 */
	user: string
	/**
	 * Height of the image.
	 */
	imageHeight: number
	/**
	 * Width of the image.
	 */
	imageWidth: number
}

/**
 * Image object from the Pixabay API.
 */
export interface Image extends ImageBase {
	/**
	 * Array of tags associated with the image.
	 */
	tags: string[]
	/**
	 * URL of the image.
	 */
	imageUrl: string
	/**
	 * URL of the user that uploaded the image.
	 */
	userImageUrl: string
}

/**
 * The raw image response as it is returned from the Pixabay API.
 */
export interface ImageResponse extends ImageBase {
	/**
	 * String of tags associated with the image.
	 */
	tags: string
	/**
	 * URL of the image.
	 */
	largeImageURL: string
	/**
	 * URL of the user that uploaded the image.
	 */
	userImageURL: string
}
