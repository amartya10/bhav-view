import axios from 'axios'
const BASE_URL ='http://127.0.0.1:8000/';

// const ApiService = {
// 	init(){
// 		axios.defaults.baseURL = BASE_URL;
//   },
//   query(resource, params) {
//     return  axios.get(resource, params).catch(error => {
//       throw new Error(`${error}`);});
//   },
//   get(resource, slug = "") {
//     return axios.get(`${resource}/${slug}`).catch(error => {
//       throw new Error(`[RWV] ApiService ${error}`);
//     });
//   },
//   post(resource, params) {
//     return axios.post(`${resource}`, params);
//   }
// }

// export default ApiService

// const EquityService = {

// 	get(){
// 		return ApiService.get("equity")
// 	},
// 	get(slug){
// 		return ApiService.get("equity",slug)
// 	},
// 	query(){
// 		return ApiService.get("equity/")
// 	}

// }

export  function getEquties(params){
	// console.log(params)
	let date,query,limit,page = undefined
	if (params){
		query = params.query
		limit = params.limit
		page  = params.page - 1
		date = params.date
	}	
	let url = BASE_URL + 'api/equity/'
	var request = {
		params:{
		}
	}
	if (date != undefined){
		url = url + 'date/' + date +'/'
	}
	if (query != undefined && query.length >= 3 ){
		url = url + 'search/'
		request.params.q = query
	}
	if (limit != undefined && limit >= 0){
		request.params.limit = limit
	}
	if (page != undefined && limit >= 0){
		request.params.page = page
	}
	try {
		return axios.get(url,request).then(response => response.data)
	}
	catch(errors){
		console.error(errors)   
	}
}


export  function exportEquities(date,data){
	let url = BASE_URL + 'api/equity/'


	if (date != undefined){
		url = url + 'date/' + date +'/'
	}

	url = url + 'export'
	// console.log(data)

	try {
		axios.post(url,data).then((response)=>{
			// console.log(response.data)

			var fileURL = window.URL.createObjectURL(new Blob([response.data]));

			var fileLink = document.createElement('a');



			fileLink.href = fileURL;

			fileLink.setAttribute('download', 'file.csv');

			document.body.appendChild(fileLink);



			fileLink.click();
		})	
	}
	catch(errors){
		console.log(errors)

	}
}
export default {getEquties,exportEquities}