import { bucket } from "./index"
import axios from 'axios'
import cookies from 'vue-cookies'

axios.defaults.headers.common['Authorization'] = 'Token ' + cookies.get('token');

export default {

  getAllBucketLists(){
    return axios.get(bucket.getAllBucketLists())
        .then(response => response)
        .catch(error => error)
  },
}