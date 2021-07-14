import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/pages/home/home";
import UserList from "./components/userlist/userlist";
import User from "./components/user/user";

import ProductList from "./components/pages/productlist/productlist";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css'
import NewUser from "./components/pages/newUser/newUser";
import Product from "./components/pages/product/product";
import NewProduct from "./components/pages/newproduct/newproduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/users"><UserList/></Route>
          <Route path="/user/:userId"><User/></Route>
          <Route path="/newUser"><NewUser/></Route>
          <Route path="/products"><ProductList/></Route>
          <Route path="/product/:productId"><Product/></Route>
          <Route path="/newProduct"><NewProduct/></Route>
        </Switch>
      </div> 
    </Router> 
  );
}

export default App;
