import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
	baseURL: process.env.customKey,
	headers: {
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
	},
	withCredentials: true,
});

export default instance;
