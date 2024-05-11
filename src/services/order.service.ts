import AxiosClient from "../common/axios/axiosClient";

const path = "/order"

const orderService = {
	order : (data:any) => {
		const url = `${path}`;
		return AxiosClient.post(url,data);
	},
	getAll: (page=1,limit=10,query='') => {
		const url = `${path}`;
		return AxiosClient.get(url,{
			params: {
				page,
				limit,
				query
			}
		});
	},
	delete : (id:string) => {
		const url = `${path}/${id}`;
		return AxiosClient.delete(url);
	},
	getMyOrder:(page=1,limit=10,query='') =>{
		const url = `${path}/my`
		return AxiosClient.get(url,{
			params:{
				page,
				limit,
				query
			}
		})
	}
}

export default orderService;