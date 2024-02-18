import { useDispatch, useSelector } from "react-redux";
import { handelCart } from "../redux/product.slice";

const Cart = () => {
  let { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // const addCart = (product) => {
  //   let payload = {
  //     opt: "add",
  //     product,
  //   };
  //   dispatch(handelCart(payload));
  // };

  // const removeFromCart = (product) => {
  //   let payload = {
  //     opt: "remove",
  //     product,
  //   };
  //   dispatch(handelCart(payload));
  // };
  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5>Your Cart</h5>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="d-non">
              <div className="card mb-3">
                <div className="card-body">
                  {cart.map((product) => {
                    return (
                      <div className="d-flex border-bottom py-2">
                        <div className="px-4">
                          <img
                            src={product.image}
                            className="cartpImg"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <p className="card-title">{product.title}</p>
                          <div className="text-secondary">
                            <p className="text-capitalize">
                              Category:{product.category}
                            </p>
                          </div>

                          <p className="card-text">₹ {product.price} /-</p>
                          <span className="text-primary">
                            Quantity: {product.qty}
                          </span>
                          <button
                            className="btn btn-success btn-sm mx-3"
                            onClick={() => {
                              dispatch(
                                handelCart({
                                  opt: "add",
                                  product,
                                })
                              );
                            }}
                          >
                            Add
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              dispatch(
                                handelCart({
                                  opt: "remove",
                                  product,
                                })
                              );
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body d-flex  justify-content-end">
                  <a
                    href="#"
                    className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                    style={{ backgroundColor: "#fb641b" }}
                  >
                    PLACE ORDER
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Add more product cards here --> */}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title border-bottom pb-3">PRICE DETAILS</h6>
                <table className="table">
                  <tbody>
                    <tr className="border-white">
                      <td>Price (1 item) </td>
                      <td>₹94,598 </td>
                    </tr>
                    <tr className="border-white">
                      <td>Discount </td>
                      <td>
                        <span className="text-success">- ₹3000</span>
                      </td>
                    </tr>

                    <tr className="">
                      <td>Delivery Charges </td>
                      <td>
                        <span className="text-success">FREE</span>
                      </td>
                    </tr>
                    <tr className="border-white ">
                      <td>
                        <span className="font-weight-bold">Total Amount</span>
                      </td>
                      <td>
                        <span className="font-weight-bold">₹94,598</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              {/* <!-- <button type="button" className="btn btn-primary">Login</button> --> */}
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

export default Cart;
