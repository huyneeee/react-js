import { axiosClient } from './axiosClient';
const commentApi = {
    add(comment,userid){
        const url = `/comment/${userid}`;
        return axiosClient.post(url, comment);
    },
    remove(id,userid){
        const url = `/category/${id}/${userid}`;
        return axiosClient.delete(url)
    }, 
    commentByProduct(idProduct){
        const url = `/comment/${idProduct}`;
        return axiosClient.get(url);
    },
    getAll(){
        const url = `/comment`;
        return axiosClient.get(url);
    }
}
export default commentApi;

