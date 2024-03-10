import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query {
    getProducts {
      id
      title
      price
      description
      category
      image
    }
  }
`;

export const GET_PRODUCT_TITLE_IMAGE = gql`
  query Product($count: Int!) {
    getProducts(count: $count) {
      id
      title
      image
    }
  }
`;
