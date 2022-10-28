import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCustomer } from '../../Redux/Actions/CustomerActions';

const Customer = (props) => {
  const { customer } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm('Estás seguro de eliminarlo?')) {
      dispatch(deleteCustomer(id));
    }
  };

  return (
    <>
      <div className="col-md-3 col-sm-3 col-lg-4 mb-3">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={customer.image} alt="Customer" />
          </Link>
          <div className="name mb-1">
            <b>Cliente:</b> {customer.name}
          </div>
          <div className="email mb-1">
            <b>Correo E:</b> {customer.email}
          </div>
          <div className="age mb-1">
            <b>Edad:</b> {customer.age}
          </div>
          <div className="email mb-1">
            <b>Género:</b> {customer.gender}
          </div>
          <div className="nit mb-1">
            <b>NIT:</b> {customer.nit}
          </div>
          <div className="phone mb-1">
            <b>Teléfono:</b> {customer.phone}
          </div>
          <div className="country mb-1">
            <b>País:</b> {customer.country}
          </div>
          <div className="phone mb-1">
            <b>Ciudad:</b> {customer.city}
          </div>
          <div className="city mb-1">
            <b>Dirección:</b> {customer.address}
          </div>
          <div className="note mb-1">
            <b>Nota:</b> {customer.note}
          </div>
          <div className="col-12">
            <Link
              to={`/customer/${customer._id}/edit`}
              className="btn btn-sm btn-primary p-2 pb-6 col-md-6"
            >
              <i className="fas fa-marker"></i>
            </Link>
            <Link
              to="#"
              onClick={() => deletehandler(customer._id)}
              className="btn btn-sm btn-outline-danger p-2 pb-6 col-md-6"
            >
              <i className="fas fa-trash"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
