import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Contact from "../Page/contact/Contact";
import Events from "../Page/Eventss/events";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import DetelesCard from "../Sheard/DetelesCard";


const router = createBrowserRouter([
      {
            path:'/',
            element:<Root></Root>,
            children: [
                  {
                        path:'/',
                        element:<Home></Home>,
                        loader: ()=> fetch('/data.json')

                  },
                  {
                        path:'/deteles/:id',
                        element:<DetelesCard></DetelesCard>
                  },
                  {
                        path:'/contact',
                        element:<Contact></Contact>
                  },
                  {
                        path:'/event',
                        element:<Events></Events>
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