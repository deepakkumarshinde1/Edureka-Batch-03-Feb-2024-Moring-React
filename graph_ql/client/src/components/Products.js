import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_PRODUCT, GET_PRODUCT_TITLE_IMAGE } from "../graphQl/Query";

const Products = () => {
  // let { data, loading, error } = useQuery(GET_PRODUCT_TITLE_IMAGE, {
  //   variables: { count: 5 },
  // });
  let [getProductData, { data, error, loading }] = useLazyQuery(
    GET_PRODUCT_TITLE_IMAGE,
    {
      variables: { count: 5 },
    }
  );

  let [products, setProducts] = useState([]);

  useEffect(() => {
    if (data !== undefined) setProducts(data.getProducts);
  }, [data]);

  return (
    <>
      <button onClick={() => getProductData()}>Get Data</button>
      {loading ? "loading..." : null}
      {products.length === 0 ? null : (
        <table className="table">
          <tbody>
            <tr>
              <th>Sr No</th>
              <th>Title</th>
              <th>Image</th>
            </tr>
          </tbody>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.image}
                      style={{ width: "100px" }}
                      alt=""
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Products;
