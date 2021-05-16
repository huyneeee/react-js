
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import ToDoList from './components/ToDoList/ToDoList';
import CategoryPage from "./page/Category";
import HomePage from "./page/Home";
import ProductsPage from './page/Product';
import ProductDetail from './page/ProductDetail';

function App() {

  return (
    <div className="App  ">
      <Router>

        <Switch>

          <Route path="/" exact component={HomePage} />
         
          <Route path="/todolist" exact component={ToDoList} />

          <Route path="/products" exact component={ProductsPage} />

          <Route path="/category" exact component={CategoryPage} />

          <Route path="/shop/:id" component={ProductDetail} />

        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
