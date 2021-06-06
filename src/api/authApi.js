import { axiosClient } from './axiosClient';
const authApi = {
    signup(user) {
        const url = `/signup`;
        return axiosClient.post(url, user);
    }
}
export default authApi;

