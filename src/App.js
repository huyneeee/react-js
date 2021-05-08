
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ToDoList from './components/ToDoList/ToDoList';
import ProductsPage from './page/Product'
import HomePage from "./page/Home";
import ProductDetail from './page/ProductDetail'
import EditProductPage from './page/Product/EditProductPage';
function App() {

  return (
    <div className="App  ">
      <Router>

        <Switch>

          <Route path="/" exact component={HomePage} />
         
          <Route path="/todolist" exact component={ToDoList} />

          <Route path="/products" exact component={ProductsPage} />

          {/* <Route path="/products/edit" exact component={EditProductPage} /> */}

          <Route path="/shop/:id" component={ProductDetail} />

        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
