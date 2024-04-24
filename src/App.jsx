// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/header/header";
// import AddProduct from "./pages/addProduct";
// import Product from "./pages/products";
// import Home from "./pages/home";
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Home />
//       </>
//     ),
//   },
//   {
//     path: "/add/product",
//     element: (
//       <>
//         <Header />
//         <AddProduct />
//       </>
//     ),
//   },
//   {
//     path: "/product",
//     element: (
//       <>
//         <Header />
//         <Product />
//       </>
//     ),
//   },
// ]);
// function App() {
//   return <RouterProvider router={route} />;
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AddProducts from "./pages/addProducts";
import Products from "./pages/product";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Products />,
  },
  {
    path: "/product/create",
    element: <AddProducts />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
