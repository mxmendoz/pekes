import React, { useEffect } from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/productScreen';
import AddProduct from './screens/AddProduct';
import ProductEditScreen from './screens/ProductEditScreen';
import { listProducts } from './Redux/Actions/ProductActions';
import OrderScreen from './screens/OrderScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import Login from './screens/LoginScreen';
import UsersScreen from './screens/UsersScreen';
import NotFound from './screens/NotFound';
import PrivateRouter from './PrivateRouter';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from './Redux/Actions/OrderActions';
import SupplierScreen from './screens/supplierScreen'; /////
import AddSupplier from './screens/AddSupplier'; ////////
import SupplierEditScreen from './screens/SupplierEditScreen'; ///////
import { listSuppliers } from './Redux/Actions/SupplierActions'; //////
import CustomerScreen from './screens/customerScreen'; /////
import AddCustomer from './screens/AddCustomer'; ////////
import CustomerEditScreen from './screens/CustomerEditScreen'; ///////
import { listCustomers } from './Redux/Actions/CustomerActions'; //////
import CategoryScreen from './screens/categoryScreen'; /////
import AddCategory from './screens/AddCategory'; ////////
import CategoryEditScreen from './screens/CategoryEditScreen'; ///////
import { listCategories } from './Redux/Actions/CategoryActions'; //////

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listCategories());
      dispatch(listCustomers());
      dispatch(listSuppliers());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter exact path="/" component={HomeScreen} />
          <PrivateRouter exact path="/products" component={ProductScreen} />
          <PrivateRouter exact path="/addproduct" component={AddProduct} />
          <PrivateRouter exact path="/customers" component={CustomerScreen} />
          <PrivateRouter exact path="/addcustomer" component={AddCustomer} />
          <PrivateRouter exact path="/suppliers" component={SupplierScreen} />
          <PrivateRouter exact path="/addsupplier" component={AddSupplier} />
          <PrivateRouter exact path="/categories" component={CategoryScreen} />
          <PrivateRouter exact path="/addcategory" component={AddCategory} />
          <PrivateRouter exact path="/orders" component={OrderScreen} />
          <PrivateRouter
            exact
            path="/order/:id"
            component={OrderDetailScreen}
          />
          <PrivateRouter exact path="/users" component={UsersScreen} />
          <PrivateRouter
            exact
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
          <PrivateRouter
            exact
            path="/category/:id/edit"
            component={CategoryEditScreen}
          />
          <PrivateRouter
            exact
            path="/customer/:id/edit"
            component={CustomerEditScreen}
          />
          <PrivateRouter
            exact
            path="/supplier/:id/edit"
            component={SupplierEditScreen}
          />
          <Route exact path="/login" component={Login} />
          <PrivateRouter exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
