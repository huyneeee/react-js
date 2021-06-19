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
    },
    orderbystutus(status){
        const url = `/orderbystutus?status=${status}`;
        return axiosClient.post(url)
    },
    updateOrder(id,orderUpdate,userId){
        const url = `/order/${id}/${userId}`;
        return axiosClient.put(url,orderUpdate);
    },
    orderRencent(){
        const url = `/orderrecent`;
        return axiosClient.get(url)
    },
    totalOrderInMonth6(){
        const url = `/totalOrderInMonth6`;
        return axiosClient.get(url);
    }
}
export default authApi;

