import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import LogIn from "../Pages/LogIn";
import AuthLayout from "../Layout/AuthLayout";
import Registation from "../Pages/Registation";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
            { path: 'products', Component: Products },
            { path: 'contact', Component: Contact },
            { path: 'auth', Component: LogIn }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {index:true,element:<LogIn></LogIn>},
            {path:'registation',element:<Registation></Registation>}
        ]
    }
])
export default router