import React, { useEffect, useState } from 'react';
import Toast from '../LoadingError/Toast';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  editCustomer,
  updateCustomer,
} from '../../Redux/Actions/CustomerActions';
import { CUSTOMER_UPDATE_RESET } from '../../Redux/Constants/CustomerConstants';
import { toast } from 'react-toastify';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditCustomerMain = (props) => {
  const { customerId } = props;

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

  const customerEdit = useSelector((state) => state.customerEdit);
  const { loading, error, customer } = customerEdit;

  const customerUpdate = useSelector((state) => state.customerUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = customerUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CUSTOMER_UPDATE_RESET });
      toast.success('Cliente actualizado con éxito', ToastObjects);
    } else {
      if (!customer.name || customer._id !== customerId) {
        dispatch(editCustomer(customerId));
      } else {
        setName(customer.name);
        setEmail(customer.email);
        setAge(customer.age);
        setGender(customer.gender);
        setNit(customer.nit);
        setPhone(customer.phone);
        setCountry(customer.country);
        setCity(customer.city);
        setAddress(customer.address);
        setNote(customer.note);
        setImage(customer.image);
      }
    }
  }, [customer, dispatch, customerId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCustomer({
        _id: customerId,
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
            <Link to="/customers" className="btn btn-secondary text-white">
              Regresar a cliente...
            </Link>
            <h2 className="content-title">ACTUALIZAR CLIENTE</h2>
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
                        <label htmlFor="customer_title" className="form-label">
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
                        <label htmlFor="customer_title" className="form-label">
                          Edad: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="edad del cliente..."
                          className="form-control"
                          id="age_title"
                          required
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="customer_title" className="form-label">
                          Género: (*)
                        </label>
                        <input
                          type="text"
                          placeholder="genero del cliente..."
                          className="form-control"
                          id="gender_title"
                          required
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="customer_title" className="form-label">
                          Número de Identificación Tributaria:
                        </label>
                        <input
                          type="text"
                          placeholder="número de identificación tributaria..."
                          className="form-control"
                          id="nit_title"
                          value={nit}
                          onChange={(e) => setNit(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="customer_title" className="form-label">
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
                        <label htmlFor="customer_title" className="form-label">
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
                        <label htmlFor="customer_title" className="form-label">
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
                        <label htmlFor="customer_title" className="form-label">
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
                        <label htmlFor="customer_title" className="form-label">
                          Nota:
                        </label>
                        <input
                          type="text"
                          placeholder="notas y otras..."
                          className="form-control"
                          id="note_title"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
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

export default EditCustomerMain;
