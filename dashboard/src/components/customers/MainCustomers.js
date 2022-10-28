import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Customer from './Customer';
import { listCustomers } from '../../Redux/Actions/CustomerActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';
// import products from './../../data/Products';

const MainCustomers = () => {
  const dispatch = useDispatch();

  const customerList = useSelector((state) => state.customerList);
  const { loading, error, customers } = customerList;

  const customerDelete = useSelector((state) => state.customerDelete);
  const { error: errorDelete, success: successDelete } = customerDelete;

  useEffect(() => {
    dispatch(listCustomers());
  }, [dispatch, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">CLIENTES</h2>
        <div>
          <Link to="/addcustomer" className="btn btn-primary">
            Crear Nuevo Cliente
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Búsqueda..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Categorías</option>
                <option>Frecuente</option>
                <option>Ocasional</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Últimos ingresos</option>
                <option>Compra alta</option>
                <option>Compra medio</option>
                <option>Compra baja</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Customers */}
              {customers.map((customer) => (
                <Customer customer={customer} key={customer._id} />
              ))}
            </div>
          )}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Anterior
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Siguiente
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainCustomers;
