
import {createBrowserRouter,} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import Privateroute from "./Privateroute";

 const router = createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: ()=> fetch('/news.json')
                },
                {
                    path:'/news/:id',
                    element:<Privateroute><News></News></Privateroute>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                }, {
                    path:'/register',
                    element:<Register></Register>
                },
            ]
        }
     ]);
 export default router;