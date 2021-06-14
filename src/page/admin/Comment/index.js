import React, { useState, useEffect } from 'react'
import List from './List';
import Loading from '../../../components/Loading'
import commentApi from '../../../api/commentApi'
import productApi from '../../../api/productApi';
import CommentByProduct from './CommentByProduct';
const CommentPage = () => {
    const [listComment, setListComment] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [commentById, setCommentByid] = useState([]);
    const [commntsProduct, setCommentsProduct] = useState({
        status: true,
        id: ''
    });
    const { id, status } = commntsProduct;

    // get comment api
    useEffect(() => {
        const fetchComment = async () => {
            try {
                const { data: comments } = await commentApi.getAll()
                setListComment(comments);
                setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchComment();
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const { data: products } = await productApi.getAll()
                setListProduct(products);
                setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        })() 
    }, []);

    useEffect(() => {
            (async () => {
                try {
                    const { data: comments } = await commentApi.commentByProduct(id);
                    setCommentByid(comments);
                    setLoading(false);
                } catch (error) {
                    console.log("Failed to get data", error);
                }
            })()
    }, [id]);
    const hadleCommentById = (id, status) => {
        setCommentsProduct({
            status: status,
            id: id
        })
    }
    return (
        <>
            {loading ? (<Loading />)
                : (
                    < >
                        {status ?

                            <List listProduct={listProduct} hadleClick={hadleCommentById} />
                            :
                            <CommentByProduct hadleClick={hadleCommentById} comment={commentById} />
                        }

                    </>
                )
            }
        </>
    )
}

export default CommentPage
