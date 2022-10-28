import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CATEGORY_CREATE_RESET } from '../../Redux/Constants/CategoryConstants';
import { createCategory } from '../../Redux/Actions/CategoryActions';
import Toast from '../LoadingError/Toast';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddCategoryMain = () => {
  const [cat, setCat] = useState('');
  const [subcat, setSubcat] = useState('');
  const [subcat2, setSubcat2] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, error, category } = categoryCreate;

  useEffect(() => {
    if (category) {
      toast.success('Categoría agregado con éxtio', ToastObjects);
      dispatch({ type: CATEGORY_CREATE_RESET });
      setCat('');
      setSubcat('');
      setSubcat2('');
      setImage('');
    }
  }, [category, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory(cat, subcat, subcat2, image));
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: '1200px' }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/categories" className="btn btn-secondary text-white">
              Regresar a categorías de producto...
            </Link>
            <h2 className="content-title">AGREGAR CATEGORÍA DE PRODUCTOS</h2>
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
                    <label htmlFor="category_title" className="form-label">
                      Categoría de producto: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="categoría..."
                      className="form-control"
                      id="category_title"
                      required
                      value={cat}
                      onChange={(e) => setCat(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="category_title" className="form-label">
                      Sub Categoría General: (*)
                    </label>
                    <input
                      type="text"
                      placeholder="sub categoría general..."
                      className="form-control"
                      id="category_title"
                      required
                      value={subcat}
                      onChange={(e) => setSubcat(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="category_title" className="form-label">
                      Sub Categoría Específica:
                    </label>
                    <input
                      type="text"
                      placeholder="sub categoría específica..."
                      className="form-control"
                      id="category_title"
                      value={subcat2}
                      onChange={(e) => setSubcat2(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">URL Imágen:</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="pegar dirección web del imágen"
                      id="category_image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
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

export default AddCategoryMain;
