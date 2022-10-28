import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Supplier from './Supplier';
import { listSuppliers } from '../../Redux/Actions/SupplierActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';
// import products from './../../data/Products';

const MainSuppliers = () => {
  const dispatch = useDispatch();

  const supplierList = useSelector((state) => state.supplierList);
  const { loading, error, suppliers } = supplierList;

  const supplierDelete = useSelector((state) => state.supplierDelete);
  const { error: errorDelete, success: successDelete } = supplierDelete;

  useEffect(() => {
    dispatch(listSuppliers());
  }, [dispatch, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">PROVEEDORES</h2>
        <div>
          <Link to="/addsupplier" className="btn btn-primary">
            Crear Nuevo Proveedor
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
                <option>Importación Nacional</option>
                <option>Importación Extranjera</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Últimos ingresos</option>
                <option>Ingresos altos</option>
                <option>Ingresos medio</option>
                <option>Ingresos bajo</option>
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
              {/* Suppliers */}
              {suppliers.map((supplier) => (
                <Supplier supplier={supplier} key={supplier._id} />
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

export default MainSuppliers;
