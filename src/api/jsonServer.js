import axios from 'axios';

export default axios.create({
    //TODO : server changeable every 8 hours
    baseURL: 'https://8278-2403-6200-8956-9f93-9125-9288-7407-b0da.ngrok-free.app'
});