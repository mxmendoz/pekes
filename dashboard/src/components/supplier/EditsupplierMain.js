import React, { useEffect, useState } from 'react';
import Toast from '../LoadingError/Toast';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  editSupplier,
  updateSupplier,
} from '../../Redux/Actions/SupplierActions';
import { SUPPLIER_UPDATE_RESET } from '../../Redux/Constants/SupplierConstants';
import { toast } from 'react-toastify';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditSupplierMain = (props) => {
  const { supplierId } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nit, setNit] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [observation, setObservation] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const supplierEdit = useSelector((state) => state.supplierEdit);
  const { loading, error, supplier } = supplierEdit;

  const supplierUpdate = useSelector((state) => state.supplierUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = supplierUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SUPPLIER_UPDATE_RESET });
      toast.success('Proveedor actualizado con éxtio', ToastObjects);
    } else {
      if (!supplier.name || supplier._id !== supplierId) {
        dispatch(editSupplier(supplierId));
      } else {
        setName(supplier.name);
        setEmail(supplier.email);
        setNit(supplier.nit);
        setPhone(supplier.phone);
        setCountry(supplier.country);
        setCity(supplier.city);
        setAddress(supplier.address);
        setObservation(supplier.observation);
        setImage(supplier.image);
      }
    }
  }, [supplier, dispatch, supplierId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateSupplier({
        _id: supplierId,
        name,
        email,
        nit,
        phone,
        country,
        city,
        address,
        observation,
        image,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: '1200px' }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/suppliers" className="btn btn-secondary text-white">
              Regresar a proveedor...
            </Link>
            <h2 className="content-title">ACTUALIZAR PROVEEDOR</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Aceptar!
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Nombre del proveedor: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="proveedor..."
                          className="form-control"
                          id="supplier_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Correo Electrónico:
                        </label>
                        <input
                          type="email"
                          placeholder="correo electrónico..."
                          className="form-control"
                          id="email_title"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Número de Identificación Tributaria: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="número de identificación tributaria..."
                          className="form-control"
                          id="nit_title"
                          required
                          value={nit}
                          onChange={(e) => setNit(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Teléfono: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="teléfono..."
                          className="form-control"
                          id="phone_title"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          País: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="país..."
                          className="form-control"
                          id="country_title"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Ciudad: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="ciudad..."
                          className="form-control"
                          id="city_title"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Dirección: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="dirección..."
                          className="form-control"
                          id="address_title"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="supplier_title" className="form-label">
                          Observaciones:
                        </label>
                        <input
                          type="text"
                          placeholder="observaciones y otras..."
                          className="form-control"
                          id="observation_title"
                          rows="7"
                          value={observation}
                          onChange={(e) => setObservation(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">URL Imágen:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditSupplierMain;
