import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../Redux/Actions/CategoryActions';

const Category = (props) => {
  const { category } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm('Estás seguro de eliminarlo?')) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th width="22%">
              <b>Categoría</b>
            </th>
            <th width="22%">
              <b>Sub Categoría General</b>
            </th>
            <th width="34%">
              <b>Sub Categoría Específica</b>
            </th>
            <th width="12%">
              <b>Imágen</b>
            </th>
            <th width="10%">
              <b>Acción</b>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="name mb-1">{category.cat}</div>
            </td>
            <td>
              <div className="city mb-1">{category.subcat}</div>
            </td>
            <td>
              <div className="note mb-1"> {category.subcat2}</div>
            </td>
            <td>
              <Link to="#" className="img-wrap">
                <img src={category.image} alt="Category" width="40%" />
              </Link>
            </td>
            <td>
              <Link
                to={`/category/${category._id}/edit`}
                className="btn btn-sm btn-primary p-2 pb-6 col-md-6"
              >
                <i className="fas fa-marker"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deletehandler(category._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-6 col-md-6"
              >
                <i className="fas fa-trash"></i>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Category;
