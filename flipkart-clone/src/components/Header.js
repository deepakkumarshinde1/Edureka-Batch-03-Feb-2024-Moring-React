import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let userName = useRef();
  let password = useRef();
  let { cart } = useSelector((state) => state.product);

  let makeLogin = () => {
    console.log(userName.current.value);
    console.log(password.current.value);
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-0"
                  placeholder="Enter Email"
                  required
                  ref={userName}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-0"
                  placeholder="Enter Password"
                  required
                  ref={password}
                />
              </div>
            </div>
            <div className="modal-footer  justify-content-center">
              {/* <!-- <button type="button" className="btn btn-primary">Login</button> --> */}
              <button
                type="button"
                className="btn btn-primary btn-sm rounded-0"
                onClick={makeLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg_blue fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-2">
            <Link className="navbar-brand" to="/">
              <img src="/img/flipkartlogo.png" width="75px" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon text-white"
                style={{ color: "#fff" }}
              ></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex col-md-7">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for product brands and more"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <ul className="navbar-nav  mb-2 mr-auto mb-lg-0 ms-3">
                <li className="nav-item">
                  <a
                    className="nav-link  bg-white text-dark px-3 rounded"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Become a Seller
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Notification Preprensences
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        27/7 Customer Care{" "}
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Download App
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="/my-cart">
                    <i className="bi bi-cart-fill mx-1"></i>
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
