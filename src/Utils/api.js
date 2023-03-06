import axios from "axios";

const api = axios.create({
	baseURL: "https://fakerestapi.azurewebsites.net/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
