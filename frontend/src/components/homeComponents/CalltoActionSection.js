import React from 'react';

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Para más información!</h2>
              <p>
                Regístrese gratis y obtenga mayor información de nuestra
                mercadería
              </p>
              <form className="form-section">
                <input
                  placeholder="Su correo electrónico..."
                  name="email"
                  type="email"
                />
                <input value="Aceptar" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
