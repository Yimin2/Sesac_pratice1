import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component : Home
    } , {
        path: "/login",
        Component : Login
    } , {
        path: "/signup",
        Component : SignUp
    }
])

export default router