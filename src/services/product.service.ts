import AxiosClient from "../common/axios/axiosClient";

const path = "/products"

const productService = {
	getAll: (page=1,limit=10,query='',category='',formPrice=0,toPrice=999999999,sort='') => {
		const url = `${path}`;
		return AxiosClient.get(url,{
			params: {
				page,
				limit,
				query,
				category,
				formPrice,
				toPrice,
				sort
			}
		});
	},
	getBySlug: (slug:string) => {
		const url = `${path}/${slug}`;
		return AxiosClient.get(url);
	},
	create : (data:any) => {
		const url = `${path}`;
		return AxiosClient.post(url,data);
	},
	updateStatus : (id:string,status:string) =>{
		const url = `${path}/status/${id}`
		return AxiosClient.put(url,{status})
	},
	update : (id:string,data:any) => {
		const url = `${path}/${id}`;
		return AxiosClient.put(url,data);
	}
}

export default productService;