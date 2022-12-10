import axios from 'axios'

export const config = {
    serverUrl: 'http://localhost:5000'
}


export const axiosClient = axios.create({
    baseURL: config.serverUrl
});