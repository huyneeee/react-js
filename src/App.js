
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,

  Route, Switch
} from 'react-router-dom';
import { fetchData } from './actions/blogAction';
import categoryApi from './api/categoryApi';
import productApi from './api/productApi';
import DashBoardsPage from './page/admin';
import BlogAdminPage from './page/admin/Blog';
import CategoryPage from './page/admin/Category';
import ProductsPage from './page/admin/Product';
import Website from './page/web';
import AboutPage from './page/web/AboutPage';
import BlogDetailPage from './page/web/BlogDetailPage';
import BlogPage from './page/web/BlogPage';
import ContactPage from './page/web/ContactPage';
import HomePage from './page/web/Home';
import LoginPage from './page/web/LoginPage';
import NotFoundPage from './page/web/NotFoundPage';
import ProductDetail from './page/web/ProductDetail';
import RegisterPage from './page/web/RegisterPage';
import ShopPage from './page/web/ShopPage';
function App() {
  const [listProducts, setListProducts] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [ user , setUser ] = useState('');
  const [ pathname , setPathname] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchData());
  }, []);
  const onHandlePathname = (url)=>{
      setPathname(url);
  }


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

  const onHadleSignIn = (data)=>{
      setUser(data);
  }
 
  return (
    <div className="App">
      <Router>
        {/* admin  */}
        <Switch>
          <Route path="/admin">
            <DashBoardsPage url={onHandlePathname} >
              <Switch>
                <Route exact path="/admin/blogs">
                  <BlogAdminPage />
                </Route>
                <Route exact path="/admin/products">
                  <ProductsPage />
                </Route>
                <Route exact path="/admin/categories">
                  <CategoryPage />
                </Route>
              </Switch>
            </DashBoardsPage>
          </Route>
          {/* website  */}
          <Route>
            <Website user={user} url={onHandlePathname}  >
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
                  <ShopPage listProducts={listProducts} />
                </Route>
                <Route exact path="/shop/:id" >
                  <ProductDetail listProducts={listProducts}/>
                </Route>
                <Route exact path="/login" >
                  <LoginPage signIn={onHadleSignIn} />
                </Route>
                <Route exact path="/register" >
                  <RegisterPage />
                </Route>
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
