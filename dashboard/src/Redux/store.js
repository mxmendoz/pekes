import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userLoginReducer } from './Reducers/userReducers';
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from './Reducers/ProductReducers';
import {
  supplierCreateReducer,
  supplierDeleteReducer,
  supplierEditReducer,
  supplierListReducer,
  supplierUpdateReducer,
} from './Reducers/SupplierReducers';
import {
  customerCreateReducer,
  customerDeleteReducer,
  customerEditReducer,
  customerListReducer,
  customerUpdateReducer,
} from './Reducers/CustomerReducers';
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from './Reducers/OrderReducers';
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryEditReducer,
  categoryListReducer,
  categoryUpdateReducer,
} from './Reducers/CategoryReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  supplierList: supplierListReducer, //////////////
  supplierDelete: supplierDeleteReducer, ///////////////
  supplierCreate: supplierCreateReducer, //////////
  supplierEdit: supplierEditReducer, ////////////
  supplierUpdate: supplierUpdateReducer, ///////////
  customerList: customerListReducer, //////////////
  customerDelete: customerDeleteReducer, ///////////////
  customerCreate: customerCreateReducer, //////////
  customerEdit: customerEditReducer, ////////////
  customerUpdate: customerUpdateReducer, ///////////
  categoryList: categoryListReducer, //////////////
  categoryDelete: categoryDeleteReducer, ///////////////
  categoryCreate: categoryCreateReducer, //////////
  categoryEdit: categoryEditReducer, ////////////
  categoryUpdate: categoryUpdateReducer, ///////////
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
});

//Registro de usaurio (Login)
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
