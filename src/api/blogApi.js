import { axiosClient } from './axiosClient';
const blogApi = {
    getAll(){
        const url = `/blogs`;
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/blogs/${id}`;
        return axiosClient.get(url);
    },
    add(blogs){
        const url = `/blogs`;
        return axiosClient.post(url, blogs);
    },
    remove(id){
        const url = `/blogs/${id}`;
        return axiosClient.delete(url)
    },
    update(id,blogs){
        const url = `/blogs/${id}`;
        return axiosClient.put(url,blogs);
    }
}
export default blogApi;

