import AxiosClient from "../common/axios/axiosClient";

const path = "/users"

const userService = {
	getInfo : () => {
		const url = `${path}/info`;
		return AxiosClient.get(url);
	},
	updateInfo : (data:any) => {
		const url = `${path}/info`;
		return AxiosClient.put(url,data);
	},
	login : (token:string) => {
		const url = `${path}/login`;
		const headers = {
			Authorization : `Bearer ${token}`
		}
		return AxiosClient.post(url,null,{headers});
	},
	uploadAvatar : (data:any) => {
		const url = `${path}/avatar`;
		return AxiosClient.post(url,data,{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	getList : (page=1,limit=10,query='') => {
		const url = `${path}`;
		return AxiosClient.get(url,{
			params : {
				page,
				limit,
				query
			}
		});
	},
	updateStatus : (id:string,status:string) =>{
		const url = `${path}/status/${id}`
		return AxiosClient.put(url,{status})
	},
	updateUserInfo: (id:string,data:any)=>{
		const url = `${path}/userInfo/${id}`
		return AxiosClient.put(url,data)
	}
}

export default userService;