import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/logo.png"
              style={{ height: '46' }}
              className="logo"
              alt="Logo Pekes"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Tablero</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/products"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Productos</span>
              </NavLink>
            </li>
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Ingresar Productos</span>
              </NavLink>
            </li> */}
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/categories"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Categorías</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/orders"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Pedidos</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/customers"
              >
                <i className="icon fas fa-users"></i>
                <span className="text">Clientes</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/suppliers"
              >
                <i className="icon fas fa-coins"></i>
                <span className="text">Proveedores</span>
              </NavLink>
            </li>
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addsupplier"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Ingresar Proveedores</span>
              </NavLink>
            </li> */}
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/users"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Usuarios</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Otros</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="aside-top">
          <img
            src="/images/logo2.png"
            style={{ height: '46' }}
            className="logo"
            alt="PEKES"
          />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
