//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ed0ad22644mshf387e496fc8d0f7p16fc3ajsnb52a5bdc5ba2",
//     "X-RapidAPI-Host": "",
//   },
// };

// fetch(
//   "https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product?url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0CFN6GRTH%2F",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const axessoApi = createApi({
  reducerPath: "amazonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ed0ad22644mshf387e496fc8d0f7p16fc3ajsnb52a5bdc5ba2"
      );

      return headers;
    },
  }),

  endpoints: (builder) => {
    getProducts: builder.query({ query: ()=> "/products/" });
  },
});

export const { useGetProductsQuery } = axessoApi;
