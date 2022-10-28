import axios from 'axios';
import { logout } from './userActions';
import {
  SUPPLIER_CREATE_FAIL,
  SUPPLIER_CREATE_REQUEST,
  SUPPLIER_CREATE_SUCCESS,
  SUPPLIER_DELETE_FAIL,
  SUPPLIER_DELETE_REQUEST,
  SUPPLIER_DELETE_SUCCESS,
  SUPPLIER_EDIT_FAIL,
  SUPPLIER_EDIT_REQUEST,
  SUPPLIER_EDIT_SUCCESS,
  SUPPLIER_LIST_FAIL,
  SUPPLIER_LIST_REQUEST,
  SUPPLIER_LIST_SUCCESS,
  SUPPLIER_UPDATE_FAIL,
  SUPPLIER_UPDATE_REQUEST,
  SUPPLIER_UPDATE_SUCCESS,
} from '../Constants/SupplierConstants';
import { URL } from './../url';

//Todos los productos
export const listSuppliers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SUPPLIER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/suppliers/all`, config);

    dispatch({ type: SUPPLIER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: SUPPLIER_LIST_FAIL,
      payload: message,
    });
  }
};

//Eliminar un producto
export const deleteSupplier = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SUPPLIER_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${URL}/api/suppliers/${id}`, config);

    dispatch({ type: SUPPLIER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: SUPPLIER_DELETE_FAIL,
      payload: message,
    });
  }
};

//Crear un producto
export const createSupplier =
  (name, email, nit, phone, country, city, address, observation, image) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: SUPPLIER_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${URL}/api/suppliers/`,
        { name, email, nit, phone, country, city, address, observation, image },
        config
      );

      dispatch({ type: SUPPLIER_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: SUPPLIER_CREATE_FAIL,
        payload: message,
      });
    }
  };

//Editar o actualizar un producto
export const editSupplier = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUPPLIER_EDIT_REQUEST });
    const { data } = await axios.get(`${URL}/api/suppliers/${id}`);
    dispatch({ type: SUPPLIER_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: SUPPLIER_EDIT_FAIL,
      payload: message,
    });
  }
};

//Actualizar un producto
export const updateSupplier = (supplier) => async (dispatch, getState) => {
  try {
    dispatch({ type: SUPPLIER_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${URL}/api/suppliers/${supplier._id}`,
      supplier,
      config
    );

    dispatch({ type: SUPPLIER_UPDATE_SUCCESS, payload: data });
    dispatch({ type: SUPPLIER_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: SUPPLIER_UPDATE_FAIL,
      payload: message,
    });
  }
};
