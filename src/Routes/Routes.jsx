import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import BookToy from "../pages/BookToy/BookToy";

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
          element:<SingleProduct></SingleProduct>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: '/booking/:id',
          element: <BookToy></BookToy>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        }
      ]
    },
  ]);

  export default router;