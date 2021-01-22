import axios from 'axios';


const API_END_POINT : string = 'https://jsonplaceholder.typicode.com';


export default axios.create({
    baseURL:API_END_POINT
}); 