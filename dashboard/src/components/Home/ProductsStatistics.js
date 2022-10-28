import React from 'react';

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Estadisticas de los Productos</h5>
          {/* <object
            data="https://charts.mongodb.com/charts-comercio-e-znqze/embed/charts?id=630acb5e-a5c8-46f7-8399-507e1a8550e9&maxDataAge=3600&theme=light&autoRefresh=true"
            width="100%"
            height="350px"
            type="text/html"
          ></object> */}

          <embed
            type="text/html"
            src="https://charts.mongodb.com/charts-comercio-e-znqze/embed/charts?id=630acb5e-a5c8-46f7-8399-507e1a8550e9&maxDataAge=3600&theme=light&autoRefresh=true"
            width="100%"
            height="350px"
            background="#FFFFFF"
            border="none"
            borderRadius="2px"
            boxShadow="0 2px 10px 0 rgba(70, 76, 79, .2);"
          ></embed>

          {/* <iframe
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2);',
              width: '100%',
              height: '350px',
            }}
            src="https://charts.mongodb.com/charts-comercio-e-znqze/embed/charts?id=630acb5e-a5c8-46f7-8399-507e1a8550e9&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe> */}
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
