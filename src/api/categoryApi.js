import { axiosClient } from './axiosClient';
const categoryApi = {
    getAll(){
        const url = `/category`;
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(category,userid){
        const url = `/category/${userid}`;
        return axiosClient.post(url, category);
    },
    remove(id,userid){
        const url = `/category/${id}/${userid}`;
        return axiosClient.delete(url)
    },
    update(id,category,userid){
        const url = `/category/${id}/${userid}`;
        return axiosClient.put(url,category);
    },
    count(){
        const url = `/countCategory`;
        return axiosClient.get(url);
    },
    countProductOfCategory(){
        const url = `/countProductOfCategory`;
        return axiosClient.get(url);
    }
}
export default categoryApi;

