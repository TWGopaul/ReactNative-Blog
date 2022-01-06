import axios from 'axios';

export default axios.create({
    //needs to be updated as ngrok server timesout
    baseURL: ' http://345c-69-2-184-176.ngrok.io'
});