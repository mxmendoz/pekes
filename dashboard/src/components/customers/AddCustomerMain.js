import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CUSTOMER_CREATE_RESET } from '../../Redux/Constants/CustomerConstants';
import { createCustomer } from '../../Redux/Actions/CustomerActions';
import Toast from '../LoadingError/Toast';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddCustomerMain = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nit, setNit] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const customerCreate = useSelector((state) => state.customerCreate);
  const { loading, error, customer } = customerCreate;

  useEffect(() => {
    if (customer) {
      toast.success('Cliente agregado con éxtio', ToastObjects);
      dispatch({ type: CUSTOMER_CREATE_RESET });
      setName('');
      setEmail('');
      setAge('');
      setGender('');
      setNit('');
      setPhone('');
      setCountry('');
      setCity('');
      setAddress('');
      setNote('');
      setImage('');
    }
  }, [customer, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCustomer(
        name,
        email,
        age,
        gender,
        nit,
        phone,
        country,
        city,
        address,
        note,
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
            <Link to="/customers" className="btn btn-secondary text-white">
              Regresar a clientes...
            </Link>
            <h2 className="content-title">AGREGAR CLIENTE</h2>
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
                    <label htmlFor="customer_title" className="form-label">
                      Nombre del cliente: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="cliente..."
                      className="form-control"
                      id="customer_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_email" className="form-label">
                      Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      placeholder="correo electrónico..."
                      className="form-control"
                      id="customer_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_age" className="form-label">
                      Edad: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="edad del cliente..."
                      className="form-control"
                      id="customer_age"
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_gender" className="form-label">
                      Género: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="género del cliente..."
                      className="form-control"
                      id="customer_gender"
                      required
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_nit" className="form-label">
                      Número de Identificación Tributaria:
                    </label>
                    <input
                      type="text"
                      placeholder="número de identificación tributaria..."
                      className="form-control"
                      id="customer_nit"
                      value={nit}
                      onChange={(e) => setNit(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_phone" className="form-label">
                      Teléfono: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="número telefónico..."
                      className="form-control"
                      id="customer_phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_country" className="form-label">
                      País: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="país..."
                      className="form-control"
                      id="customer_country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_city" className="form-label">
                      Ciudad: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="ciudad..."
                      className="form-control"
                      id="customer_city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_address" className="form-label">
                      Dirección: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="dirección exacta..."
                      className="form-control"
                      id="customer_address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="customer_note" className="form-label">
                      Nota:
                    </label>
                    <input
                      type="text"
                      placeholder="notas y otras..."
                      className="form-control"
                      rows="7"
                      id="customer_note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">URL Imágen:</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="pegar dirección web del imágen"
                      id="customer_image"
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

export default AddCustomerMain;
