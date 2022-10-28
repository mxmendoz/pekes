import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Orders = (props) => {
  const { orders } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre del Cliente</th>
          <th scope="col">Correo Electrónico</th>
          <th scope="col">Total</th>
          <th scope="col">Pagado</th>
          <th scope="col">Fecha</th>
          <th>Estado</th>
          <th scope="col" className="text-end">
            Acción
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>Q. {order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Pagado en {moment(order.paidAt).format('DD-MM-YYYY')}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  No pagado
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format('DD-MM-YYYY')}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">Entregado</span>
              ) : (
                <span className="badge btn-dark">No entregado</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
