
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,

  Route, Switch, useHistory
} from 'react-router-dom';
import { fetchData } from './actions/blogAction';
import { deleteAllCart, setCart } from './actions/cartAction';
import authApi from './api/authApi';
import categoryApi from './api/categoryApi';
import productApi from './api/productApi';
import { isAuthenticated } from './auth';
import AdminRoute from './auth/adminRoute';
import PrivateRoute from './auth/privateRoute';
import DashBoardsPage from './page/admin';
import AdminDashBoard from './page/admin/AdminDashBoard';
import BlogAdminPage from './page/admin/Blog';
import CategoryPage from './page/admin/Category';
import OrderAdmin from './page/admin/Order';
import ProductsPage from './page/admin/Product';
import Website from './page/web';
import AboutPage from './page/web/AboutPage';
import BlogDetailPage from './page/web/BlogDetailPage';
import BlogPage from './page/web/BlogPage';
import Cart from './page/web/Cart';
import ContactPage from './page/web/ContactPage';
import HomePage from './page/web/Home';
import LoginPage from './page/web/LoginPage';
import NotFoundPage from './page/web/NotFoundPage';
import OrderPage from './page/web/OrderPage';
import ProductByCategory from './page/web/ProductByCategory';
import ProductDetail from './page/web/ProductDetail';
import RegisterPage from './page/web/RegisterPage';
import ShopPage from './page/web/ShopPage';
import UserDashBoard from './page/web/UserDashBoard';
import { updateUser, signout } from './auth/index'
import CommentPage from './page/admin/Comment';
import ActivateAccountPage from './page/web/ActivateAcconuntPage';
function App() {
  const [listProducts, setListProducts] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [userProfile, setProfile] = useState('');
  const [pathname, setPathname] = useState('');
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  //dispatch fetch data blog
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const onHandlePathname = (url) => {
    setPathname(url);
  }

  // save user state
  useEffect(() => {

    const { user } = isAuthenticated();
    if (user) {
      (async () => {
        try {
          const { data: userProfile } = await authApi.getOne(user._id);
          setProfile(userProfile);
        } catch (error) {
          console.log(error.response)
        }
      })();
    }
  }, [])


  //get all product
  useEffect(() => {
    const fecthListProduct = async () => {
      try {
        const { data: listProduct } = await productApi.getAll();
        setListProducts(listProduct);
      } catch (error) {
        console.log("Failed to get data", error);
      }
    }
    fecthListProduct();
  }, [pathname]);

  //get all category
  useEffect(() => {
    const fecthListCategories = async () => {
      try {
        const { data: categories } = await categoryApi.getAll();
        setListCategories(categories);
      } catch (error) {
        console.log("Failed to get data", error);
      }
    }
    fecthListCategories();
  }, [pathname]);

  //login get user , save state
  const onHadleSignIn = async (data) => {

    if (localStorage.getItem('history') == null) {
      localStorage.setItem('history', '[]');
    }

    try {
      const { data: userProfile } = await authApi.getOne(data._id);
      localStorage.setItem('history', JSON.stringify(userProfile.history))
      localStorage.setItem('cart', JSON.stringify(userProfile.history));
      dispatch(setCart(userProfile.history));
      setProfile(userProfile);
    } catch (error) {
      console.log(error.response);
    }
  }
  const cart = useSelector(data => data.cart.data);
  const history = useHistory();

  // logout
  const onHadleLogout = () => {
    const userLogout = { ...userProfile, history: cart }
    const { token } = isAuthenticated()
    updateUser(userLogout, token)
      .then(data => {
        signout(() => {
          history.push('/login');
        })
      })
      .then(() => {
        dispatch(deleteAllCart());
        setProfile('');
      })


  }
  //loading
  const onHandleLoading = (status)=>{
    setLoading(status)
  }
  return (
    <div className="App">
      <Router>
        {/* admin  */}
        <Switch>
          <PrivateRoute exact path="/user/dashboard" >
            <UserDashBoard />
          </PrivateRoute>

          <DashBoardsPage url={onHandlePathname} path="/admin" >
            <Switch>

              <AdminRoute exact path="/admin/dashboard">
                <AdminDashBoard />
              </AdminRoute>

              <AdminRoute exact path="/admin/blogs">
                <BlogAdminPage />
              </AdminRoute>

              <AdminRoute exact path="/admin/products">
                <ProductsPage />
              </AdminRoute>

              <AdminRoute exact path="/admin/categories">
                <CategoryPage />
              </AdminRoute>

              <AdminRoute exact path="/admin/order">
                <OrderAdmin />
              </AdminRoute>

              <AdminRoute exact path="/admin/comment">
                <CommentPage />
              </AdminRoute>

            </Switch>
          </DashBoardsPage>



          {/* website  */}
          <Route>
            <Website user={userProfile} url={onHandlePathname} logout={onHadleLogout} loading={loading} >
              <Switch>
                <Route exact path="/">
                  <HomePage listProducts={listProducts} listCategories={listCategories} />
                </Route>
                <Route exact path="/about">
                  <AboutPage />
                </Route>
                <Route exact path="/contact">
                  <ContactPage />
                </Route>
                <Route exact path="/blog">
                  <BlogPage />
                </Route>
                <Route exact path="/blog/:id">
                  <BlogDetailPage />
                </Route>
                <Route path="/shop" exact>
                  <ShopPage  listCategories={listCategories} />
                </Route>
                <Route exact path="/shop/:id" >
                  <ProductDetail user={userProfile} />
                </Route>
                <Route exact path="/shop/category/:cateId" >
                  <ProductByCategory listCategories={listCategories} />
                </Route>
                <Route exact path="/login" >
                  <LoginPage signIn={onHadleSignIn} />
                </Route>
                <Route exact path="/register" >
                  <RegisterPage />
                </Route>
                <Route exact path="/cart" >
                  <Cart />
                </Route>
                <Route exact path="/checkout" >
                  <OrderPage userProfile={userProfile} handleLoading={onHandleLoading} />
                </Route>
                <Route exact path="/auth/activate/:token" >
                  <ActivateAccountPage />
                </Route>
                {/* /auth/activate/${token} */}
                <Route path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
            </Website>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
