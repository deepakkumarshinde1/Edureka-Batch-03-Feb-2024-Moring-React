const Home = () => {
  return (
    <>
      <div className="container-fluid categories" style={{ marginTop: "60px" }}>
        <div className="container">
          <div className="d-flex justify-content-between catemobile">
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/offers.webp" alt="" />
              </div>
              <div className="catname">Top Offers</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Grocery.webp" alt="" />
              </div>
              <div className="catname">Grocery</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Mobiles.webp" alt="" />
              </div>
              <div className="catname">Mobiles</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Fashion.webp" alt="" />
              </div>
              <div className="catname">Fashion</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Electronics.webp" alt="" />
              </div>
              <div className="catname">Electronics</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Home.webp" alt="" />
              </div>
              <div className="catname">Home</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Appliances.webp" alt="" />
              </div>
              <div className="catname">Appliances</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img width="64px" src="/img/category/Travel.webp" alt="" />
              </div>
              <div className="catname">Travel</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img
                  width="64px"
                  src="/img/category/Beauty, Toys & More.webp"
                  alt=""
                />
              </div>
              <div className="catname">Beauty, Toys & More</div>
            </div>
            <div className="items text-center">
              <div className="catimg">
                <img
                  width="64px"
                  src="/img/category/Two Wheelers.webp"
                  alt=""
                />
              </div>
              <div className="catname">Two Wheelers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="slidercaro">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/sliders/b1.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/sliders/b2.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/sliders/b3.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/sliders/b4.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row border-bottom mt-3">
          <div className="ps-4">
            <h6>Don't Miss These!</h6>
            <p className="text-secondary">Inspired by your order</p>
          </div>
        </div>
      </div>

      <div className="slider mb-5" id="slider">
        <div className="slide" id="slide">
          <div className="item text-center">
            <img
              src="/img/productimg/product.webp"
              width="200px"
              className="p-4"
            />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p2.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p3.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p4.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p5.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p6.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img
              src="/img/productimg/product.webp"
              width="200px"
              className="p-4"
            />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p2.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p3.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p4.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p5.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p6.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
        </div>
        <button className="ctrl-btn pro-prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button className="ctrl-btn pro-next">
          {" "}
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved{" "}
                    <a href="#">flipkart</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
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
            <p className="p-3 p-3 pb-0">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email/Mobile no"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer  justify-content-center">
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
