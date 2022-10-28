import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Message from '../components/LoadingError/Error';
import Loading from '../components/LoadingError/Loading';
import Header from './../components/Header';
import { Link } from 'react-router-dom';

const Business = ({ location, history }) => {
  window.scrollTo(0, 0);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  return (
    <>
      <Header />

      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form className="Login col-md-12 col-lg-12 col-12">
          <div style={{ position: 'right' }}>
            <Link to="/" className="btn btn-outline-danger text-red">
              X
            </Link>
          </div>
          <section className="cero">
            <p1 className="bienvenido">
              <b>
                ¡Bienvenido a Variedades <span className="p">P</span>
                <span className="e">e</span>
                <span className="k">k</span>
                <span className="e2">e</span>
                <span className="s">s</span>!
              </b>
            </p1>
            <br></br>
            <p1 className="estamos">
              <b>Estamos felices de que estés aquí.</b>
              <br></br>
              <p1 className="nuestra-tienda">
                Nuestro negocio ofrece viariedades en juguetería, calzado y
                prendas de vestir. Ahora con la apertura de nuestra tienda
                digital, nos acerquemos aun más a usted con catálogo de
                productos, para que usted lo revisa desde la comodidad de su
                hogar. Esperamos que navegues en nuestra tienda y encuentras lo
                que buscas.
              </p1>
            </p1>
          </section>
        </form>
        <form className="Login2 col-md-12 col-lg-12 col-12">
          <section className="ceroo"></section>
        </form>

        <form className="Login2 col-md-12 col-lg-12 col-12">
          <section className="uno">
            <p1 className="vision">Visión</p1> <br></br>
            <p1 className="variedades">
              En Variedades <span className="p2">P</span>
              <span className="e22">e</span>
              <span className="k2">k</span>
              <span className="e222">e</span>
              <span className="s2">s</span> nos esforzamos por seguir siendo una
              de las mejores tiendas del municipio de Panajachel en el
              desarrollo de ecommerce para ofrecer siempre a nuestros clientes
              las distintas variedades de juguetes para los miembros más
              pequeños del hogar y hasta para los más grandes. Contamos también
              con sección de calzado y prendas de vestir. No basta con crear una
              tienda en línea, nosotros queremos mejorarla, hacerla eficiente,
              lograr un diseño adecuado y personal y conseguir que todas las
              personas que confían en nosotros obtengan el producto con su mayor
              satisfacción.
            </p1>
          </section>
        </form>
        <form className="Login2 col-md-12 col-lg-12 col-12">
          <section className="dos">
            <p1 className="mision">Misión</p1> <br></br>
            <p1 className="satisfacer">
              Satisfacer las necesidades en entretenimiento y vestimenta de los
              clientes. Sin embargo, nuestra labor va mucho más allá. Nos gusta
              estar cerca del cliente, intercambiar opiniones, ideas, hablar
              sobre su necesidad en esa ocasión, ayudarle en cualquier cuestión
              que necesite. No podemos olvidar que nosotros también somos un
              negocio y, probablemente, hayamos pasado o estemos pasando por las
              mismas circunstancias que viven nuestros clientes. Por todo ello,
              la mayor satisfacción para nosotros es verlos alegres, ayudándoles
              en todo lo que podamos, mucho más allá de simplemente venderle un
              producto de nuestra tienda.
            </p1>
          </section>
        </form>
        <form className="Login2 col-md-12 col-lg-12 col-12">
          <section className="tres">
            <p1 className="objetivos">Objetivos</p1> <br></br>
            <p1 className="nuestro-objetivo">
              Nuestro objetivo es que nuestros clientes se sientan satisfechos
              con nuestra mercadería y que confíen en nosotros par realizar sus
              compras en línea. Hemos trabajado muy duro pero hemos conseguido
              destacar a nivel de departamento de Sololá. Por ello, mantenernos
              en ese nivel nos lleva a esforzarnos más, cada día.
            </p1>
          </section>
        </form>
        <form className="Login2 col-md-12 col-lg-12 col-12">
          <section className="cuatro"></section>
        </form>
      </div>
    </>
  );
};

export default Business;
