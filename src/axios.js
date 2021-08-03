import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-4edb9/us-central1/API'
    // API URL 

});
export default instance;