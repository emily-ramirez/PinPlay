import axios from 'axios';

//TODO: Change the url for deployment
export default axios.create({
    baseURL: 'http://pinplay.me'
});

