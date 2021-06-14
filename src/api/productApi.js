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
    countproduct(){
        const url = `/countproduct`;
        return axiosClient.get(url);
    },
    add(product,userId){
        const url = `/products/${userId}`;
        return axiosClient.post(url, product);
    },
    remove(id,userId){
        const url = `/product/${id}/${userId}`;
        return axiosClient.delete(url)
    },
    update(id,product,userId){
        const url = `/product/${id}/${userId}`;
        return axiosClient.put(url,product);
    },
    productByCategory(cateId){
        const url = `/products/category/${cateId}`;
        return axiosClient.get(url);
    },
    listRelate(id){
        const url = `/products/related/${id}`;
        return axiosClient.get(url);
    },
    getProductPaginate(page,limit){
        const url =`/product/pagination?limit=${limit}&page=${page}`;
        return axiosClient.post(url);
    },
    getProductByTextSearch(textSearch){
        const url = `/products/${textSearch}`;
        return axiosClient.get(url);
    },
    getImage(id){
        const url = `/image?id=${id}`;
        return axiosClient.post(url);
    }
}
export default productApi;

