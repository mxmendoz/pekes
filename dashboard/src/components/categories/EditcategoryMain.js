import React, { useEffect, useState } from 'react';
import Toast from '../LoadingError/Toast';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  editCategory,
  updateCategory,
} from '../../Redux/Actions/CategoryActions';
import { CATEGORY_UPDATE_RESET } from '../../Redux/Constants/CategoryConstants';
import { toast } from 'react-toastify';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditCategoryMain = (props) => {
  const { categoryId } = props;

  const [cat, setCat] = useState('');
  const [subcat, setSubcat] = useState('');
  const [subcat2, setSubcat2] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const categoryEdit = useSelector((state) => state.categoryEdit);
  const { loading, error, category } = categoryEdit;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET });
      toast.success(
        'Categoría del producto actualizado con éxito',
        ToastObjects
      );
    } else {
      if (!category.cat || category._id !== categoryId) {
        dispatch(editCategory(categoryId));
      } else {
        setCat(category.cat);
        setSubcat(category.subcat);
        setSubcat2(category.subcat2);
        setImage(category.image);
      }
    }
  }, [category, dispatch, categoryId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCategory({
        _id: categoryId,
        cat,
        subcat,
        subcat2,
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
            <Link to="/categories" className="btn btn-secondary text-white">
              Regresar a categoría de productos...
            </Link>
            <h2 className="content-title">ACTUALIZAR CATEGORÍA DE PRODUCTOS</h2>
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
                        <label htmlFor="category_title" className="form-label">
                          Categoría del producto: (*)
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

export default EditCategoryMain;
