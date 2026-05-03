import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import LogIn from "../Pages/LogIn";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {index:true,Component:Home},
            {path:'about',Component:About},
            {path:'products',Component:Products},
            {path:'contact',Component:Contact},
            {path:'login',Component:LogIn}
        ]
    }
])
export default router