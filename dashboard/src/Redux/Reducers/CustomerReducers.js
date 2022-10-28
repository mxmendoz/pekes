import {
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_RESET,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_EDIT_FAIL,
  CUSTOMER_EDIT_REQUEST,
  CUSTOMER_EDIT_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_RESET,
  CUSTOMER_UPDATE_SUCCESS,
} from '../Constants/CustomerConstants';

//Todos los productos
export const customerListReducer = (state = { customers: [] }, action) => {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      return { loading: true, customers: [] };
    case CUSTOMER_LIST_SUCCESS:
      return { loading: false, customers: action.payload };
    case CUSTOMER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//Eliminar un producto
export const customerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_DELETE_REQUEST:
      return { loading: true };
    case CUSTOMER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//Crear un producto
export const customerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_CREATE_REQUEST:
      return { loading: true };
    case CUSTOMER_CREATE_SUCCESS:
      return { loading: false, success: true, customer: action.payload };
    case CUSTOMER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//Editar o actualizar un producto
export const customerEditReducer = (
  state = { customer: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CUSTOMER_EDIT_REQUEST:
      return { ...state, loading: true };
    case CUSTOMER_EDIT_SUCCESS:
      return { loading: false, customer: action.payload };
    case CUSTOMER_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//Editar o Actualizar un producto
export const customerUpdateReducer = (state = { customer: {} }, action) => {
  switch (action.type) {
    case CUSTOMER_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOMER_UPDATE_SUCCESS:
      return { loading: false, success: true, customer: action.payload };
    case CUSTOMER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_UPDATE_RESET:
      return { customer: {} };
    default:
      return state;
  }
};
