import axios from 'axios';

//TODO: Change the url for deployment
export default axios.create({
    baseURL: 'https://radiant-anchorage-77650.herokuapp.com/'
});

