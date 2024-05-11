import AxiosClient from "../common/axios/axiosClient";

const path = "/imgur"

const imgurService = {
	upload: (file:any) => {
		var formData = new FormData();
		formData.append("file", file);
		const url = `${path}/upload_image`;
		return AxiosClient.post(url, formData,{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	}
}

export default imgurService;