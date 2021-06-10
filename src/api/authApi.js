import { axiosClient } from './axiosClient';
const authApi = {
    signup(user) {
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    getOne(id){
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    getAllContact(){
        const url = `/contact`;
        return axiosClient.get(url)
    },
    orderByUser(id){
        const url = `/orderByUser?userid=${id}`;
        return axiosClient.post(url)
    }
}
export default authApi;

