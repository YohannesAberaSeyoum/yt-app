import axios from "axios";

const KEY = "AIzaSyAcjFABwG8Ug7nvpto6WAG-gmgV8Gudy4M";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
