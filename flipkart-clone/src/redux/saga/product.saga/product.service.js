export const getProductCategoriesService = async () => {
  console.log("service");
  let url = `http://localhost:3001/categories`;
  let options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  return response.json();
};

export const getProductDataService = async (cat_name) => {
  cat_name = cat_name.replaceAll("-", " ");
  const url = `http://localhost:3001/products?category=${cat_name}`;
  const options = {
    method: "GET",
  };
  let response = await fetch(url, options);
  return response.json();
};
