const Header = () => {
  return (
    <>
      <div className="container-fluid bg_blue fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
              <img src="/img/flipkartlogo.png" width="75px" alt="" />
            </a>
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
                  <a className="nav-link" href="#">
                    {" "}
                    <i className="bi bi-cart-fill"></i>
                    Cart
                  </a>
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
