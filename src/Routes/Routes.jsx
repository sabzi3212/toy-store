import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import BookToy from "../pages/BookToy/BookToy";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToy/AllToys";
import BookedToys from "../pages/BookedToys/BookedToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../Layout/ErrorPage";
import Error from "../Error";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/products/:id',
          element:<PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-tau-seven.vercel.app/products/${params.id}`)
        },
        {
          path: '/order/:id',
          element: <BookToy></BookToy>,
          loader: ({params}) => fetch(`https://assignment-11-server-tau-seven.vercel.app/products/${params.id}`)
        },
        {
          path: '/addToy',
          element:<AddToy></AddToy>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/myToys',
          element: <PrivateRoute><BookedToys></BookedToys></PrivateRoute>
        },
        {
          path: '/myToys/update/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`https://assignment-11-server-tau-seven.vercel.app/products/${params.id}`)
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: "*",
      element:<Error></Error>
    }
  ]);

  export default router;