export interface IProductsModel {
	products?: Array<ProductDetailModel>
}

export interface ProductDetailModel {
    _id?: string;
	name?: string;
	price?: number;
	image?: string;
	type: string;
	// dateEntry: Date;
}