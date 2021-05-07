import { axiosClient } from './axiosClient';
const productApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(product){
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    },
    update(id,product){
        const url = `/products/${id}`;
        return axiosClient.put(url,product);
    }
}
export default productApi;

