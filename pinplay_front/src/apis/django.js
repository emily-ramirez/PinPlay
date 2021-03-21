import axios from 'axios';

//TODO: Change the url for deployment
export default axios.create({
    baseURL: 'http://localhost:8000'
});

