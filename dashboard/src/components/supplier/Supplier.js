import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSupplier } from '../../Redux/Actions/SupplierActions';

const Supplier = (props) => {
  const { supplier } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm('Estás seguro de eliminarlo?')) {
      dispatch(deleteSupplier(id));
    }
  };

  return (
    <>
      <div className="col-md-3 col-sm-3 col-lg-4 mb-3">
        <div className="card card-product-flex shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={supplier.image} alt="Supplier" />
          </Link>
          <div className="name mb-1">
            <b>Proveedor:</b> {supplier.name}
          </div>
          <div className="email mb-1">
            <b>Correo E:</b> {supplier.email}
          </div>
          <div className="nit mb-1">
            <b>NIT:</b> {supplier.nit}
          </div>
          <div className="phone mb-1">
            <b>Teléfono:</b> {supplier.phone}
          </div>
          <div className="country mb-1">
            <b>País:</b> {supplier.country}
          </div>
          <div className="city mb-1">
            <b>Ciudad:</b> {supplier.city}
          </div>
          <div className="city mb-1">
            <b>Dirección:</b> {supplier.address}
          </div>
          <div className="observation mb-1">
            <b>Nota:</b> {supplier.observation}
          </div>
          <div className="col-12">
            <Link
              to={`/supplier/${supplier._id}/edit`}
              className="btn btn-sm btn-primary p-2 pb-6 col-md-6"
            >
              <i className="fas fa-marker"></i>
            </Link>
            <Link
              to="#"
              onClick={() => deletehandler(supplier._id)}
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

export default Supplier;
