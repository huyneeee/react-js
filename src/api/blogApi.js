import { axiosClient } from './axiosClient';
const blogApi = {
    getAll(){
        const url = `/blogs`;
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    add(blogs){
        const url = `/blogs`;
        return axiosClient.post(url, blogs);
    },
    remove(id){
        const url = `/blog/${id}`;
        return axiosClient.delete(url)
    },
    update(id,blogs){
        const url = `/blog/${id}`;
        return axiosClient.put(url,blogs);
    }
    ,image(id){
        const url = `/blog/image/${id}`;
        return axiosClient.get(url);
    }
}
export default blogApi;

