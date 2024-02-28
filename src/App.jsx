import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Root from "./routes/root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";

///
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      // { path: "/success", element: <SuccessPage /> },
      // { path: "/products/:id", element: <Products /> },
      // { path: "/product/:id", element: <ProductDetails /> },
      // { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
