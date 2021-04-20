import axios from 'axios'

const BASE_URL ='http://127.0.0.1:8000/';

const getEquties = (params) => {
    let date,query,limit,page = undefined
    if (params){
         date = params.date
         query = params.query
         limit = params.limit
         page = params.page
    }
    let url = BASE_URL + 'api/equity/'
    var request = {
        params:{

        }
    }
    if (date != undefined){
        url = url + 'date/' + date 
    }
    if (query != undefined){
        url = url + 'search/'
        request.params.q = query
    }
    if (limit != undefined){
        request.params.limit = limit
    }
    if (page != undefined){
        request.params.page = page
    }
    try {
        return  axios.get(url,request).then(response => response.data)
    }
    catch(errors){
        console.error(errors)   
    }
}
export {getEquties}