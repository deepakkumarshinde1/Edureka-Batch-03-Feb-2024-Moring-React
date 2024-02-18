import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handelCart, saveProductList } from "../redux/product.slice";

// class component
// handel a comp lifecycle
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// handel state ==> this.state, setState
//------------------------------
// handel a comp lifecycle ==> useEffect
// handel state ==> useState() ==> [value,setValue]

const Products = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  let { cat_name } = useParams(); // collect a data(dynamic) from url

  const getProductData = async () => {
    try {
      cat_name = cat_name.replaceAll("-", " ");
      const url = `http://localhost:3001/products?category=${cat_name}`;
      const options = {
        method: "GET",
      };
      let response = await fetch(url, options);
      let data = await response.json();
      dispatch(saveProductList(data));
    } catch (error) {
      alert("Server error:: " + error.message);
    }
  };

  // promises are the methods which are async in nature
  // run --> success --> resolve --> try{} or then()
  // run --> fail --> rejected --> catch{} or catch()

  useEffect(() => {
    getProductData();
  }, []); // only once i.e on mounting

  useEffect(() => {
    // unmount starts
    return () => {
      dispatch(saveProductList([])); // resting list
    };
    // unmount ends
  }, []);

  // updating
  useEffect(() => {
    console.log("list updated");
  }, [productList]);

  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5 className="text-capitalize">
            All Products Of {cat_name.replaceAll("-", " ")}
          </h5>
        </div>

        <div className="row mb-3">
          {productList.map((product) => {
            return (
              <div
                className="col-md-3 mb-3"
                title={product.title}
                style={{ cursor: "pointer" }}
                key={product.id}
              >
                <div className="card size p-2 add-shadow">
                  <img
                    src={product.image}
                    style={{ height: "30vh" }}
                    className="card-img-top-img"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h6 className="product-style">{product.category}</h6>
                    <div className="overflow">
                      <p className="product-name">
                        {product.title.substring(0, 20)}...{" "}
                      </p>
                    </div>
                    <div className="">
                      <span className="pe-2">₹ {product.price}</span>
                      <span className="text-secondary pe-2">
                        <del>₹ {product.price * 2}</del>
                      </span>
                      <span className="text-success">50% off</span>
                    </div>
                    <div>
                      <p className="product-sizes">
                        <span className="text-secondary mx-2" title="rating">
                          <i className="bi bi-star-half"></i>{" "}
                          {product.rating.rate}
                        </span>
                        <span className="product-sizes-level" title="reviews">
                          <i className="bi bi-chat-dots"></i>
                          {product.rating.count}
                        </span>
                      </p>
                    </div>
                    <section>
                      <button
                        className="btn btn-primary btn-sm"
                        title="Click to Add"
                        onClick={() => {
                          let payload = {
                            opt: "add",
                            product,
                          };
                          dispatch(handelCart(payload));
                        }}
                      >
                        <i className="bi bi-cart-plus"></i> Add To Cart
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
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
