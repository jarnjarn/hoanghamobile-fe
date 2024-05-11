import AxiosClient from "../common/axios/axiosClient";

const path = "/categorys"

const categoryService = {
	getAll: () => {
		const url = `${path}`;
		return AxiosClient.get(url);
	},
	getPage:(page=1,limit=10,query="")=>{
		const url = `${path}/page`;
		return AxiosClient.get(url,{
			params:{
				page,
				limit,
				query
			}
		});
	}
}

export default categoryService;