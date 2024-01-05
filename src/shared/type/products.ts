type Category = {
	id?: number
	name?: string
	image?: string
}

export type Products = {
	id?: string
	title?: string
	price?: number
	description?: string
	category?: Category
	images?: string[]
	quantity?:number
}

