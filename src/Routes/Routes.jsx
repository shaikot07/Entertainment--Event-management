import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Contact from "../Page/contact/Contact";
import Eventtts from "../Page/Eventss/Eventtts";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import DetelesCard from "../Sheard/DetelesCard";
import PrivateRoute from "./PrivateRoute";
import Error from "../Sheard/ErrorPage";
import ErrorPage from "../Sheard/ErrorPage";
import Future from "../Page/future/Future";


const router = createBrowserRouter([
      {
            path:'/',
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children: [
                  {
                        path:'/',
                        element:<Home></Home>,
                        loader: ()=> fetch('/data.json')

                  },
                  {
                        path:'/deteles/:id',
                        element:<PrivateRoute><DetelesCard></DetelesCard></PrivateRoute>
                  },
                  {
                        path:'/contact',
                        element:<PrivateRoute><Contact></Contact></PrivateRoute>
                  },
                  {
                        path:'/future',
                        element:<PrivateRoute><Future></Future></PrivateRoute>
                  },
                  {
                        path:'/login',
                        element:<Login></Login>
                  },
                  {
                        path:'/register',
                        element:<Register></Register>
                  },
            ]
      }
])

export default router;