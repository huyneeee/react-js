import axios from 'axios'
import { isAuthenticated } from '../auth';
import { API } from '../config'

const { token } = isAuthenticated();

export const axiosClient = axios.create({
    baseURL: API,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    }
});