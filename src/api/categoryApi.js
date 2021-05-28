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
    add(category){
        const url = `/category`;
        return axiosClient.post(url, category);
    },
    remove(id){
        const url = `/category/${id}`;
        return axiosClient.delete(url)
    },
    update(id,category){
        const url = `/category/${id}`;
        return axiosClient.put(url,category);
    }
}
export default categoryApi;

