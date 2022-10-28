import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Actions/userActions';
import Message from './../components/LoadingError/Error';
import Loading from '../components/LoadingError/Loading';
import Toast from './../components/LoadingError/Toast';

const Login = ({ history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="logBody">
        <Toast />

        <div
          className="card shadow mx-auto"
          style={{
            maxWidth: '380px',
            marginTop: '100px',
            background:
              'linear-gradient(to right top, #11d9f9, #10c5fa, #10b3ff, #6b9eff, #8090f9)',
          }}
        >
          <div className="card-body">
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
            <h4 className="card-title mb-4 text-center">Iniciar sesión</h4>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Correo Electrónico"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100">
                  Acceso
                </button>
              </div>
            </form>
          </div>
        </div>

        <h1 className="textoPanel">
          Variedades{' '}
          <span className="p1">
            <b>P</b>
          </span>
          <span className="p2">
            <b>e</b>
          </span>
          <span className="p3">
            <b>k</b>
          </span>
          <span className="p4">
            <b>e</b>
          </span>
          <span className="p5">
            <b>s</b>
          </span>
        </h1>
        <h2 className="textoPanel2">Panel Administrativo</h2>
      </div>
    </>
  );
};

export default Login;
