import axios from 'axios'


// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASEAPI, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

service.defaults.withCredentials = true


export default service