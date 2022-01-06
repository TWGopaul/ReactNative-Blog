import axios from 'axios';
import url from './config';

export default axios.create({
    //needs to be updated as ngrok server timesout
    baseURL: url,
});
