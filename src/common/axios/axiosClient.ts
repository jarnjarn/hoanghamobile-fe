import axios from 'axios';
const API_ENDPOINT =process.env.REACT_APP_API_URL;

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json',
  timeout: 50000,
});

AxiosClient.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    let token = null;
    try {
      token = localStorage.getItem('token');
    } catch {}
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
	// remove params if value is null
	if (newConfig.params) {
		Object.keys(newConfig.params).forEach((key) => {
			if (newConfig.params[key] === null || newConfig.params[key] === undefined || newConfig.params[key] === '') {
				delete newConfig.params[key];
			}
		});
	}
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);
AxiosClient.interceptors.response.use(
  function (response) {
    return response.data ?? response;
  },
  function (error) {
    console.log('error', error.response);
    return Promise.reject(error);
  },
);

export default AxiosClient;
