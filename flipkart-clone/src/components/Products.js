const Products = () => {
  let getProductData = async () => {
    let url = `https://fakestoreapi.com/products`;
    let options = {
      method: "GET",
    };
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5>All Products</h5>
          <button onClick={getProductData}>GET DATA</button>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>
                    <span className="product-sizes-level">M, L, XL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default Products;
