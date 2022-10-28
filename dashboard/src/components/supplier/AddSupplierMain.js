import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SUPPLIER_CREATE_RESET } from '../../Redux/Constants/SupplierConstants';
import { createSupplier } from '../../Redux/Actions/SupplierActions';
import Toast from '../LoadingError/Toast';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddSupplierMain = () => {
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

  const supplierCreate = useSelector((state) => state.supplierCreate);
  const { loading, error, supplier } = supplierCreate;

  useEffect(() => {
    if (supplier) {
      toast.success('Proveedor agregado con éxtio', ToastObjects);
      dispatch({ type: SUPPLIER_CREATE_RESET });
      setName('');
      setEmail('');
      setNit('');
      setPhone('');
      setCountry('');
      setCity('');
      setAddress('');
      setObservation('');
      setImage('');
    }
  }, [supplier, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createSupplier(
        name,
        email,
        nit,
        phone,
        country,
        city,
        address,
        observation,
        image
      )
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: '1200px' }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/suppliers" className="btn btn-secondary text-white">
              Regresar a proveedores...
            </Link>
            <h2 className="content-title">AGREGAR PROVEEDOR</h2>
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
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="supplier_title" className="form-label">
                      Nombre del provedor: (*)
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
                    <label htmlFor="supplier_email" className="form-label">
                      Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      placeholder="correo electrónico..."
                      className="form-control"
                      id="supplier_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="supplier_nit" className="form-label">
                      Número de Identificación Tributaria: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="número de identificación tributaria..."
                      className="form-control"
                      id="supplier_nit"
                      required
                      value={nit}
                      onChange={(e) => setNit(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="supplier_phone" className="form-label">
                      Teléfono: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="número telefónico..."
                      className="form-control"
                      id="supplier_phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="supplier_country" className="form-label">
                      País: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="país..."
                      className="form-control"
                      id="supplier_country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="supplier_city" className="form-label">
                      Ciudad: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="ciudad..."
                      className="form-control"
                      id="supplier_city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="supplier_address" className="form-label">
                      Dirección: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="dirección exacta..."
                      className="form-control"
                      id="supplier_address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="supplier_observation"
                      className="form-label"
                    >
                      Observaciones:
                    </label>
                    <input
                      type="text"
                      placeholder="observaciones y otras..."
                      className="form-control"
                      rows="7"
                      id="supplier_observation"
                      value={observation}
                      onChange={(e) => setObservation(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">URL Imágen:</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="pegar dirección web del imágen"
                      id="supplier_image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" disabled />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddSupplierMain;
