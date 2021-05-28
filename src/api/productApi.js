import { axiosClient } from './axiosClient';
const productApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(product){
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    remove(id){
        const url = `/product/${id}`;
        return axiosClient.delete(url)
    },
    update(id,product){
        const url = `/product/${id}`;
        return axiosClient.put(url,product);
    }
}
export default productApi;

