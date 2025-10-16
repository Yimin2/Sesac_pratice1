import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Profile from "../pages/Profile.jsx";
import PrivateLayout from "../layouts/PrivateLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

const router = createBrowserRouter([{
    path: "/", Component: Home
}, {
    Component: PrivateLayout, children: [{
        path: "/profile", Component: Profile
    }]
}, {
    Component: AuthLayout, children: [{
        path: "/login", Component: Login
    }, {
        path: "/signup", Component: SignUp
    }]
}])

export default router