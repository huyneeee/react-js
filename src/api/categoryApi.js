import { axiosClient } from './axiosClient';
const categoryApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(categories){
        const url = `/categories`;
        return axiosClient.post(url, categories);
    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url)
    },
    update(id,categories){
        const url = `/categories/${id}`;
        return axiosClient.put(url,categories);
    }
}
export default categoryApi;

