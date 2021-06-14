import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../../../actions/cartAction'
import categoryApi from '../../../api/categoryApi'
import commentApi from '../../../api/commentApi'
import productApi from '../../../api/productApi'
import ProductRelate from '../../../components/ProductRelate'
const ProductDetail = ({  user }) => {
    window.scrollTo(0,0)
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const detailProduct = async () => {
            try {
                const { data: detailProduct } = await productApi.getOne(id);
                const { data: category } = await categoryApi.getOne(detailProduct.category);
                const { data: getAllComment } = await commentApi.commentByProduct(id);
                const catename = category.name;
                const product = { ...detailProduct, catename };
                setComment(getAllComment);
                setProduct(product);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        detailProduct();
    }, [id]);

    const dispatch = useDispatch();
    const handleClick = (product) => {
        dispatch(addToCart({ ...product, image: '' }));
    }        

    const commentComponent = () => {
        return (
            <>
            <p className="text-xl my-4 font-semibold  w-full uppercase">Comment</p>
            {comment.length!==0 && comment.map(cmt => {
                                return (
                                    <div className="flex my-5" key={cmt._id}>
                                    <div className="w-1/12 justify-center  flex">
                                        <div className="flex">
                                            <img className="inline-block h-16  w-16 rounded-full ring-2 ring-white " src={cmt.image} alt=""/>
                                        </div>  
                                    </div>
                                    <div className="w-11/12 bg-gray-300 px-10 py-5 rounded-3xl">
                                        <p className="text-lg font-semibold">{cmt.name}</p>
                                        <p className="mb-2">{cmt.content}</p>
                                        <i className="far fa-thumbs-up text-lg mr-3"></i>
                                        <i className="fas fa-share text-lg mr-3"></i>
                                    </div>
                                </div>
                                    )
            })}




            <div className="flex w-100 h-24 my-8 relative">
                {user ?  (
                    <>
                    <div className="w-1/12 ">
                        <img className="ml-10 inline-block h-14  w-14 rounded-full ring-2 ring-white " src={user.image} alt=""/>
                    </div>
                    <div className="w-11/12">

                        <input type="text" className=" w-full py-4 px-3 bg-gray-100 border-none rounded-2xl focus:outline-none" placeholder="Write a comment..."
                        onKeyPress={async(e)=>{
                            const content= e.target.value;
                            if(e.charCode===13){
                                let inputComment = new FormData();

                                inputComment.append('name', user.name);
                                inputComment.append('id_user', user._id);
                                inputComment.append('id_product', id);
                                inputComment.append('image', user.image);
                                inputComment.append('content',content);

                                try {
                                    const { data:postComment} = await commentApi.add(inputComment,user._id);
                                    setComment([...comment,postComment]);
                                    e.target.value='';
                                } catch (error) {
                                    console.log(error.response)
                                }
                               
                            }
                        }}
                        />
                        <div className="text-2xl  absolute right-9 top-3">
                            <i className="far fa-smile text-gray-300 mr-2"></i>
                            <i className="fas fa-camera text-gray-300 mr-2"></i>
                            <i className="far fa-sticky-note text-gray-300"></i>
                        </div>
                    </div>
                    </>
                ) : <Link to="/login" className="text-md text-gray-500">Login to Comment !</Link>}
            </div>
            </>
        )
    }
    return (
        <>
                <div className="bg-gray-100 w-screen h-32 flex justify-center items-center">
                    <Link to='/' className="font-semibold text-md ">Home </Link> / {product.name}
                </div>
                <div className="flex w-full px-24 mt-20 ">
                    <div className="w-2/5 h-auto flex justify-center ">
                        <div className="bg-gray-400 h-2/3 w-3/4 ">
                            <img src={`http://localhost:4000/api/product/image/${product._id}`} className="h-full w-full" alt="" />
                        </div>
                    </div>
                    <div className="w-3/5  h-auto tracking-widest">
                        <p className="text-lg font-semibold text-gray-900 mb-10">{product.name}</p>
                        <p className="text-sm text-gray-600 mb-5">Category:{product.catename}</p>
                        <p className="text-sm text-gray-600 mb-5 ">Availability:{product.status ? 'Stock' : 'Instock'}</p>
                        <p className="text-sm text-gray-600 mb-5">Quantity:{product.quantity}</p>
                        <p className="text-md text-gray-600 font-bold leading-8 mb-5">${product.price}.00</p>
                        <div className="border border-gray-200 w-full h-auto p-5 box-border bg-gray-100">
                            <div className=" w-1/3 h-auto  ">
                                <p className="text-lg font-bold text-gray-600 mb-2">Quantity</p>
                                <div className="flex ">
                                    <div className="w-1/5 bg-gray-300 text-black justify-center items-center flex hover:bg-black hover:text-white">
                                        <span>-</span>
                                    </div>
                                    <div className="w-3/5 ">
                                        <input type="text" className="outline-none p-2 border text-center w-full" defaultValue={1} />
                                    </div>
                                    <div className="w-1/5 bg-gray-300 text-black justify-center items-center flex hover:bg-black hover:text-white">
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="flex justify-center py-3 border-b border-gray-500 mb-4">
                                    <button
                                        onClick={() => { handleClick(product) }}
                                        className="border-b-2 border-black font-bold  text-sm add-to-cart focus:outline-none" >ADD TO CARD</button>
                                </div>
                                <div className="flex justify-center">
                                    <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-behance" /></Link>
                                    <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-facebook-f" /></Link>
                                    <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-google" /></Link>
                                    <Link to='' className="text-gray-500 uppercase mr-6 text-sm"><i className="fab fa-twitter" /></Link>
                                    <Link to='' className="text-gray-500 uppercase text-sm"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-8 mt-4">{product.description}</p>
                    </div>
                </div>
                <div className="px-24">
                {commentComponent()}
                </div>
                <ProductRelate id={id} />
            </>
            
    )
}

export default ProductDetail
