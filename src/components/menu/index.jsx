import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import logomarca from '../../assets/logomarca.png';

function Menu(props) {
  const activeLink    = "nav-link align-middle px-0";
  const inactiveLink  = "nav-link align-middle px-0 link-secondary";

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-5 d-none d-sm-inline">
          <img src={logomarca} className="img-logo" width="180px" alt="logo" />
        </span>
      </a>

      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

        <li className="nav-item">
          <Link to="/dashboard" className={props.page === "dashboard" ? activeLink : inactiveLink}>
            <i className="fs-4 bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/clientes" className={props.page === "clientes" ? activeLink : inactiveLink}>
            <i className="fs-4 bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Clientes</span>
          </Link>
        </li>

        <li className="nav-item">
          <a href="/produtos" className={props.page === "produtos" ? activeLink : inactiveLink}>
            <i className="fs-4 bi-tags"></i> <span className="ms-1 d-none d-sm-inline">Produtos</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className={props.page === "config" ? activeLink : inactiveLink}>
            <i className="fs-4 bi-gear"></i> <span className="ms-1 d-none d-sm-inline">Configurações</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className={props.page === "logout" ? activeLink : inactiveLink}>
            <i className="fs-4 bi-box-arrow-left"></i> <span className="ms-1 d-none d-sm-inline">Sair (LogOut)</span>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Menu;